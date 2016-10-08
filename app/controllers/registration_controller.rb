class RegistrationController < ApplicationController
  require 'resolv'
    skip_before_filter :allow_only_signed_in
  #u= UserProfile.new(uid: "pjamm", regdate: DateTime.now, status:1, gname: "Philip", sname: "Test", net:"ECOTRENDS", org: "NSMU Test", email: "philip@ingram.com", phone: "212-555-1212")
  def show
    @user = UserProfile.new
  end
  def edit
    ss = Time.at(params[:token].gsub("_", ".").to_f + 0.000001).to_datetime.utc
    kk = Time.at(params[:token].gsub("_", ".").to_f - 0.000001).to_datetime.utc
    yy = Time.at(params[:token].gsub("_", ".").to_f).to_datetime.utc
    @user = UserProfile.where(lastupdate: [ss, kk, yy]).first
    if @user.blank?
      redirect_to '/', notice: "You are unable to view that page."
    end
  end
  def update
    # for some reason there is a minus whatever 1 microsecond on server, dev has +1.. putting all 3 in.
    ss = Time.at(params[:token].gsub("_", ".").to_f + 0.000001).to_datetime.utc
    kk = Time.at(params[:token].gsub("_", ".").to_f - 0.000001).to_datetime.utc
    yy = Time.at(params[:token].gsub("_", ".").to_f).to_datetime.utc
    @user = UserProfile.where(lastupdate: [ss, kk, yy]).first
    if @user.present? && (params[:password] == params[:password_confirmation])
      @user.update_attributes(passphrase: UserProfile.encrypt_password(params["password"]), lastupdate: "")
      redirect_to "/login", notice: "Password Reset. Thank You. Now please log in."
    else
      render :edit, notice: "Make both passwords match"
    end
  end

  def form_is_valid(params)
    if !params['uid'].present? or !params['gname'].present? or !params['sname'].present? or !params['email'].present? or params['email'].empty? or !params['password'].present? or !params['password_confirmation'].present? or params['password'].empty? or params['password_confirmation'].empty?
      return false
    else
      return true
    end
  end

  def create
    the_route = "/signup"
    msg = nil

    if !form_is_valid(params)
      msg = "Missing required fields or check to make sure your passwords match"
    end

    if verify_recaptcha && params["password"].present? && (params["password"] == params["password_confirmation"])
      network = "ECOTRENDS"
      if params["network"].present?
        binding.pry
        if muck = UserProfile.ldap_authenticate(params["network"], params["uid"], params["password"])
          network = params["network"]
        else
          network = ""
          msg = "You were not logged into your Network."
        end
      end



      if network.present? 
        @user = UserProfile.new(regdate: DateTime.now, uid: params["uid"], status: 1, gname: params["gname"], sname: params["sname"], net: network, org: params["org"], email: params["email"], phone: params["phone"], passphrase: UserProfile.encrypt_password(params["password"]))
        if @user.save
          the_route = "/search"
          msg = "Successfully signed up"

          #session stuff here
          set_session_variables
        else
          msg = "Your account was not created please check the form fields and try again."
        end

      end

    end

    if the_route == "/signup"
      if !params["errors"].nil?
        msg  << params["errors"]
      end

      redirect_to the_route, notice: msg, action: 'show'
    else
      redirect_to the_route, notice: msg
    end

  end
end
