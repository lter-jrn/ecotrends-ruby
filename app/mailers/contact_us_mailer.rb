class ContactUsMailer < ActionMailer::Base

  default from: "Your Mailer <mswallace.com@gmail.com>"
  default to: "Someone Else <mswallace.com@gmail.com>"

  def new_contact(contact)
    @contact = contact

    mail subject: "Ecotrends Contact - #{contact.subject}"
  end

end