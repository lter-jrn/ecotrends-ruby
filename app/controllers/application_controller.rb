class ApplicationController < ActionController::Base
  protect_from_forgery
  helper_method :current_user, :current_user_id
  def current_user
    session["current_user"]
  end
  def current_user_id
    session["iduser"].to_i
  end
end
