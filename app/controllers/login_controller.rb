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

  def destroy
    #destroy session here
    session["current_user"] = ""

    session["iduser"] = ""
    redirect_to '/'
  end

end
