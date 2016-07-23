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
    keyword_search = nil


    if term_hash["keywords"].present?
      words_array = term_hash["keywords"].split(",")
      keyword_search = self.where("keywords ILIKE ANY (array[?]) or docid ILIKE ANY (array[?])", words_array.map {|val| "%#{val}%"}, words_array.map {|val| "%#{val}%"})
    else
      keyword_search = self
    end

    if term_hash["variable_filters"].present?
      keyword_search = keyword_search.where("variable_name" => term_hash["variable_filters"])
    end

    if term_hash["subtopics"].present?
      keyword_search = keyword_search.where("subtopic" => term_hash["subtopics"].split("-"))
    end

    if term_hash["topics"].present?
      topic_array = term_hash["topics"].split("-")
      keyword_search = keyword_search.where("topic" => topic_array)
    end

    if term_hash["ecosystems"].present?
      ecosystems_array = term_hash["ecosystems"].split("-")
      keyword_search = keyword_search.where("ecosystem" => ecosystems_array)
    end

    if term_hash["biome"].present?
      biome_array = term_hash["biome"].split("-")
      keyword_search = keyword_search.where("biome" => biome_array)
    end


    if term_hash["site_filters"].present?
      keyword_search = keyword_search.where("site_name" => term_hash["site_filters"].split(","))
    end
    if term_hash["min_date"].present? && term_hash["max_date"].blank?
      keyword_search = keyword_search.where("begin_date > ?", term_hash["min_date"])
    end
    if term_hash["max_date"].present? && term_hash["min_date"].blank?
      keyword_search = keyword_search.where("end_date < ?", term_hash["max_date"])
    end

    if term_hash["max_date"].present? && term_hash["min_date"].present?
      keyword_search = keyword_search.where("begin_date > ? and end_date < ?", term_hash["min_date"], term_hash["max_date"])
    end

    if keyword_search == self
      keyword_search = self.all()
    end

    keyword_search.order("variable_name asc")
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
    return data_record, self.get_valset(val_set, data_record.timescale == "yearly")
  end

    #returns the dataset
  def self.get_values_by_docid(doc_ids)
    doc_ids = doc_ids.split if doc_ids.is_a?(String)
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
      final_hash = val_set.each {|d| hash_rec.merge!(d["start_date"].to_date.strftime("%Y-%m-%d") => d["observation"])}
      #binding.pry
      years += hash_rec.keys
      return_records << {record: data_record, datum: hash_rec.sort.to_h}
    end
    return return_records, self.year_range_for_labels(years)
  end
  #here for now, must be an array
  def self.year_range_for_labels(years)
    years.sort.flatten.uniq
  end

  def self.get_valset(val_set, is_yearly = true)
    if is_yearly
      val_set.map {|d| {:year => d["year"], observation: d["observation"]}}
    else
      val_set.map {|d| {:year => d["start_date"].to_date.strftime("%Y-%m-%d"), observation: d["observation"]}}
    end

  end
end
