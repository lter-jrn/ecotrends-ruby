class RegistrationController < ApplicationController
    skip_before_filter :allow_only_signed_in
  #u= UserProfile.new(uid: "pjamm", regdate: DateTime.now, status:1, gname: "Philip", sname: "Test", net:"ECOTRENDS", org: "NSMU Test", email: "philip@ingram.com", phone: "212-555-1212")
  def new
    @user = UserProfile.new
  end
  def edit
    ss = Time.at(params[:token].gsub("_", ".").to_f + 0.000001).to_datetime
    @user = UserProfile.where(lastupdate: ss).first
    if @user.blank?
      redirect_to '/', notice: "You are unable to view that page."
    end
  end
  def update
    ss = Time.at(params[:token].gsub("_", ".").to_f + 0.000001).to_datetime
    @user = UserProfile.where(lastupdate: ss).first
    if @user.present? && (params[:password] == params[:password_confirmation])
      @user.update_attributes(passphrase: UserProfile.encrypt_password(params["password"]), lastupdate: "")
      redirect_to "/login", notice: "Password Reset. Thank You. Now please log in."
    else
      render :edit, notice: "Make both passwords match"
    end
  end
  def create
    the_route = "/signup"
    msg = "You were not logged into your Network."
    if params["password"].present? && (params["password"] == params["password_confirmation"])
      network = "ECOTRENDS"
      if params["network"].present?

        if muck = UserProfile.ldap_authenticate(params["network"], params["uid"], params["password"])
          network = params["network"]
        else
          network = ""
        end
      end
      if network.present?
        @user = UserProfile.new(regdate: DateTime.now, uid: params["uid"], status: 1, gname: params["gname"], sname: params["sname"], net: network, org: params["org"], email: params["email"], phone: params["phone"], passphrase: UserProfile.encrypt_password(params["password"]))
        if @user.save
          the_route = "/search"
          msg = "Successfully signed up"

          #session stuff here
          set_session_variables
        end

      end
      redirect_to the_route, notice: msg
    end

  end
end
