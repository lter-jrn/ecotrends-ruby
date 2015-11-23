class RegistrationController < ApplicationController
   #u= UserProfile.new(uid: "pjamm", regdate: DateTime.now, status:1, gname: "Philip", sname: "Test", net:"ECOTRENDS", org: "NSMU Test", email: "philip@ingram.com", phone: "212-555-1212")
  def new
    @user = UserProfile.new
  end

  def create
    the_route = "/signup"
    if params["password"].present? && (params["password"] == params["password_confirmation"])
      network = "ECOTRENDS"
      if params["network"].present?
        if UserProfile.ldap_authenticate(params["network"], params["uid"], params["password"])
          network = params["network"]
        else
          network = ""
        end
      end
      if network.present?
        @user = UserProfile.new(regdate: DateTime.now, uid: params["uid"], status: 1, gname: params["gname"], sname: params["sname"], net: network, org: params["org"], email: params["email"], phone: params["phone"], passphrase: UserProfile.encrypt_password(params["password"]))
      else
        the_route = "/"
      end
      the_route = "/search" if @user.save
    end
    redirect_to the_route
  end

end
