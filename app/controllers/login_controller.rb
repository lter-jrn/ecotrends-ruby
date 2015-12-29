class LoginController < ApplicationController
  skip_before_filter :allow_only_signed_in
  def show

  end

  def create
    the_route = '/login'
    if params["uid"].present? && params["password"].present?
      @user = UserProfile.authenticate(params)

      if @user.present?
        #session stuff here
        session["current_user"] = @user["uid"]
        session["iduser"] = @user["iduser"]
        the_route = '/search'
      end
    end
    redirect_to the_route
  end
  def edit

  end
  def update
    @user = UserProfile.where(:email => params[:email], net: "ECOTRENDS").first
    if @user.present?
      #get the current datetime and update the lastupdate column and then send an email with lastupdate.to_i for the token.
      thyme = DateTime.now
      @user.update_and_send_password_reset(thyme)
    end
    redirect_to '/login', notice: "Reset instructions have been sent to that email address."
  end

  def destroy
    #destroy session here
    session["current_user"] = ""

    session["datastore_array"] = ""
    session["iduser"] = ""
    redirect_to '/'
  end

end
