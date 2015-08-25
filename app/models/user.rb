class User < ActiveRecord::Base
  establish_connection(:user)

  def self.get_by_uid(the_uid)
   self.setup_call_to_db("Select * from user_profile where uid = '#{the_uid}'")
  end
  def self.setup_call_to_db(sql_statement)
    user_connection = User.connection
    vals = user_connection.execute(sql_statement)
    User.clear_active_connections!
    fields = vals.fields
    vals.present? ? vals.values.map {|value_set| Hash[fields.zip(value_set)]} : []
  end

end
