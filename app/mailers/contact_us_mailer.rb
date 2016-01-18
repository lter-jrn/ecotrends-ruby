class ContactUsMailer < ActionMailer::Base

  default from: "Ecotrends <ecotrend@nmsu.edu>"
  default to: "Ecotrends <ecotrend@nmsu.edu>"

  def new_contact(contact)
    @contact = contact

    mail subject: "Ecotrends Contact Form - #{contact.subject}"
  end

end