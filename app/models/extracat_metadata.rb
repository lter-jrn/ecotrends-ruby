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
    if term_hash["keywords"].present?
      self.where("keywords like ?", "%#{term_hash['keywords']}%")
    else
      self.where(entryid: term_hash["id"])
    end
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
    return data_record, val_set
  end
end
