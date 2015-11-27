# This class is containing all the Meta Data to Search against and display in Search Results
class ExtracatMetadata < ActiveRecord::Base
  establish_connection(:development)
  has_many :saved_datasets, foreign_key: 'docid'
# entryid
# docid
# rev
# packageid
# site
# site_name
# station_names
# variable_name
# unit_name
# timescale
# topic
# subtopic
# begin_date
# end_date
# north_bound
# south_bound
# east_bound
# west_bound
# creator_individuals
# creator_organizations
# keywords
  def real_table_name
    packageid.gsub('.', '_')
  end

  def self.sites
    self.sites_count.keys
  end

  def self.sites_count
    self.group(:site).count
  end
  #search for metadata to display in results page
  def self.search(term_hash)
    #take the term_hash and get values for that table either id or keywords
    keyword_search = if term_hash["keywords"].present?
                       self.where("keywords like ?", "%#{term_hash['keywords']}%")
                     end
    if term_hash["variable_name"].present?
      keyword_search = keyword_search.where("variable_name" => term_hash["variable_name"])
    end
    if term_hash["site"].present?
      keyword_search = keyword_search.where("site_name" => term_hash["site"])
    end
    keyword_search
  end
  #returns the dataset
  def self.get_values(entry_id)
    data_record = where(entryid: entry_id).first
    et_table_name = data_record.real_table_name
    search_connection = SearchDatum.connection
    vals = search_connection.execute("SELECT * from #{et_table_name}")
    SearchDatum.clear_active_connections!
    fields = vals.fields
    #we may get to use a generic model if each of the fields are the same. time will tell.
    val_set = vals.present? ? vals.values.map {|value_set| Hash[fields.zip(value_set)]} : []
    return data_record, val_set.map {|d| {:year => d["year"], observation: d["observation"]}}
  end

    #returns the dataset
  def self.get_values_by_docid(doc_ids)
    years = []
    return_records = []
    doc_ids.each do |doc_id|
      hash_rec = {}
      data_record = where(docid: doc_id).first
      et_table_name = data_record.real_table_name
      search_connection = SearchDatum.connection
      vals = search_connection.execute("SELECT * from #{et_table_name}")
      SearchDatum.clear_active_connections!
      fields = vals.fields
      #we may get to use a generic model if each of the fields are the same. time will tell.
      val_set = vals.present? ? vals.values.map {|value_set| Hash[fields.zip(value_set)]} : []
      #binding.pry
      final_hash = val_set.each {|d| hash_rec.merge!(d["year"] => d["observation"])}
      #binding.pry
      years += hash_rec.keys
      return_records << {record: data_record, datum: hash_rec.sort.to_h}
    end
    return return_records, self.year_range_for_labels(years)
  end

  def self.year_range_for_labels(years)
    new_years = years.sort.flatten.uniq
    minn = new_years.min.to_i
    maxx = new_years.max.to_i
    (minn..maxx).to_a
  end
end
