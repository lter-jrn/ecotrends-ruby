class SavedDataset < ActiveRecord::Base
  belongs_to :user_profile, foreign_key: "iduser"
  belongs_to :extracat_metadata, ->(user) { where docid: user.docid }, foreign_key: 'docid', primary_key: 'docid'
  establish_connection(:user)
  #u = UserProfile.new(uid: "pjamm", regdate: DateTime.now, status:1, gname: "Philip", sname: "Test", net:"ECOTRENDS", org: "NSMU Test", email: "philip@ingram.com", phone: "212-555-1212")
  def self.table_name
    'saved_datasets'
  end

  # def self.get_by_uid(the_uid, network = "")
  #   sql_statement = if network.blank?
  #                     "Select * from user_profile where uid = '#{the_uid}'"
  #                   else
  #                     "Select * from user_profile where uid = '#{the_uid}' and net = '#{network}'"
  #                   end
  #  self.setup_call_to_db(sql_statement)
  # end

  # def self.setup_call_to_db(sql_statement)
  #   user_connection = User.connection
  #   vals = user_connection.execute(sql_statement)
  #   User.clear_active_connections!
  #   fields = vals.fields
  #   vals.present? ? vals.values.map {|value_set| Hash[fields.zip(value_set)]} : []
  # end

  # def self.authenticate(params)
  #   if params["network"].present?
  #    bind =  UserProfile.ldap_authenticate(params["network"], params["uid"], params["password"])
  #    bind ? self.get_by_uid(params["uid"], params["network"]).first : false
  #   else
  #     UserProfile.ecotrend_authenticate(params["uid"], params["password"])
  #   end
  # end

  # def self.ldap_authenticate(network, the_uid, password)
  #   ou_statement = self.set_ou(network)
  #   ldap = Net::LDAP.new
  #   ldap.host = "ldap.ecoinformatics.org"
  #   ldap.authenticate("uid=#{the_uid},#{ou_statement},dc=ecoinformatics,dc=org", password)
  #   ldap.bind
  # end

  # def self.ecotrend_authenticate(the_uid, password)
  #   the_user = self.get_by_uid(the_uid).first
  #   if the_user
  #     self.encrypt_password(password) == the_user["passphrase"] ? the_user : false
  #   else
  #     false
  #   end
  # end

  # def self.encrypt_password(password)
  #   Digest::SHA1.base64digest(password)
  # end

  # def self.set_ou(network)
  #   if ["NCEAS", "DataONE", "Kepler"].include? network
  #     "ou=Account"
  #   else
  #     "o=unaffiliated"
  #   end
  # end
end
