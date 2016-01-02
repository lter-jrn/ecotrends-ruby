class ContactUsController < ApplicationController

  def new
    @message = ContactUs.new
  end

  def create
    @message = ContactUs.new(params[:contact_us])

    if @message.valid?
      ContactUsMailer.new_contact(@message).deliver
      redirect_to "/home/about", notice: "Your messages has been sent."
    else
      flash[:alert] = "An error occurred while delivering this message."
      redirect_to("/home/about")
    end
  end

  private

  def message_params
    params.require(params[:contact_us]).permit(params[:contact_us][:subject], params[:contact_us][:email], params[:contact_us][:content])
  end

end