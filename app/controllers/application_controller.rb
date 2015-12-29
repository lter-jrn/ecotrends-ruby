class ApplicationController < ActionController::Base
  protect_from_forgery

  before_filter :allow_only_signed_in

  helper_method :current_user, :current_user_id, :is_signed_in, :datastore_array

  def allow_only_signed_in
    unless is_signed_in
      redirect_to '/login'
    end
  end
  def is_signed_in
    session["current_user"].present?
  end
  def current_user
    session["current_user"]
  end
  def current_user_id
    session["iduser"].to_i
  end
  def datastore_array
    session["datastore_ids"]
  end
end
