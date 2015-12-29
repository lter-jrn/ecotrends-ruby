# coding: utf-8
class UserProfile < ActiveRecord::Base
  establish_connection(:user)
  has_many :saved_datasets, foreign_key: 'iduser'
  #u = UserProfile.new(uid: "pjamm", regdate: DateTime.now, status:1, gname: "Philip", sname: "Test", net:"ECOTRENDS", org: "NSMU Test", email: "philip@ingram.com", phone: "212-555-1212")
  def self.table_name
    'user_profile'
  end

  def self.get_by_uid(the_uid, network = "")
    sql_statement = if network.blank?
                      "Select * from user_profile where uid = '#{the_uid}'"
                    else
                      "Select * from user_profile where uid = '#{the_uid}' and net = '#{network}'"
                    end
   self.setup_call_to_db(sql_statement)
  end

  def self.setup_call_to_db(sql_statement)
    user_connection = User.connection
    vals = user_connection.execute(sql_statement)
    User.clear_active_connections!
    fields = vals.fields
    vals.present? ? vals.values.map {|value_set| Hash[fields.zip(value_set)]} : []
  end

  def self.authenticate(params)
    if params["network"].present?
     bind =  UserProfile.ldap_authenticate(params["network"], params["uid"], params["password"])
     bind ? self.get_by_uid(params["uid"], params["network"]).first : false
    else
      UserProfile.ecotrend_authenticate(params["uid"], params["password"])
    end
  end
# ldap = Net::LDAP.new(host: "ldap.lternet.edu", base: "o=LTER,dc=ecoinformatics,dc=org”)
# ldap.authenticate "uid=pingram,o=LTER,dc=ecoinformatics,dc=org", “mypassword”
# ldap.bind => true
  def self.ldap_authenticate(network, the_uid, password)
    the_network = self.get_network(network)
    ou_statement = self.set_statement(the_uid, network) #get the whole statement here instead of just the ou. adjust for new LTER ldap.
    ldap = Net::LDAP.new
    ldap.host = the_network
    ldap.authenticate(ou_statement, password)
    ldap.bind
  end

  def self.ecotrend_authenticate(the_uid, password)
    the_user = self.get_by_uid(the_uid).first
    if the_user
      self.encrypt_password(password) == the_user["passphrase"] ? the_user : false
    else
      false
    end
  end

  def self.encrypt_password(password)
    Digest::SHA1.base64digest(password)
  end

  def self.get_network(network)
    if ["LTER"].include? network
      "ldap.lternet.edu"
    else
      "ldap.ecoinformatics.org"
    end
  end

  def self.set_statement(the_uid, network)
    if ["NCEAS", "DataONE", "Kepler"].include? network
      "uid=#{the_uid},ou=Account,dc=ecoinformatics,dc=org"
    elsif ["LTER"].include? network
      "uid=#{the_uid},o=LTER,dc=ecoinformatics,dc=org"
    else
      "uid=#{the_uid},o=unaffiliated,dc=ecoinformatics,dc=org"
    end
  end

  def update_and_send_password_reset(thyme)
    self.update_attribute(:lastupdate, thyme)
    ResetPassword.reset_password_mail(self).deliver_now
  end
end
