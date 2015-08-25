class LoginController < ApplicationController
  def show

  end

  def create
    the_route = '/login'
    if params["uid"].present? && params["password"].present?
      @user = UserProfile.authenticate(params["uid"], params["password"])
       if @user.present?
         #session stuff here
         session["current_user"] = @user["uid"]
         the_route = '/search'
       end
    end
    redirect_to the_route
  end

  def destroy
    #destroy session here
    session["current_user"] = ""
    redirect_to '/login'
  end

end
