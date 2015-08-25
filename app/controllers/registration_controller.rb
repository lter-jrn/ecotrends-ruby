class RegistrationController < ApplicationController
   #u= UserProfile.new(uid: "pjamm", regdate: DateTime.now, status:1, gname: "Philip", sname: "Test", net:"ECOTRENDS", org: "NSMU Test", email: "philip@ingram.com", phone: "212-555-1212")
  def new
    @user = UserProfile.new
  end

  def create
    the_route = "/signup"
    if params["password"].present? && (params["password"] == params["password_confirmation"])
      @user = UserProfile.new(regdate: DateTime.now, uid: params["uid"], status: 1, gname: params["gname"], sname: params["sname"], net: "ECOTRENDS", org: params["org"], email: params["email"], phone: params["phone"], passphrase: UserProfile.encrypt_password(params["password"]))
      binding.pry
      the_route = "/search" if @user.save
    end
    redirect_to the_route
  end

end
