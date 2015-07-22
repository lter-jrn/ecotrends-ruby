class ExtracatMetadata < ActiveRecord::Base
  establish_connection(:development)
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

  def self.get_values(entry_id)
    et_table_name = where(entryid: entry_id).first.real_table_name
    search_connection = SearchDatum.connection
    vals = search_connection.execute("SELECT * from #{et_table_name}").values
    SearchDatum.clear_active_connections!
    vals
  end
end
