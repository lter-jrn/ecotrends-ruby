class ResetPassword < ApplicationMailer
  def reset_password_mail(user)
    @user = user
    @token_link = "http://128.123.177.92/reset/#{user.lastupdate.to_f.round(6).to_s.gsub(".", "_")}"
    mail(to: @user.email, subject: 'Reset Password Instructions')
  end
end
