class AccountsController < ApplicationController
  def index
    @user = UserProfile.where(uid: current_user).first
  end

  def update
    @user = UserProfile.where(uid: current_user).first
    if @user.present?
      @user.update_attributes(user_params)
    end
    redirect_to :back, notice: "Account Updated"
  end

  private
  def user_params
    params.permit(:uid, :gname, :sname, :org, :email, :phone)
  end
end
