class ContactUs
  include ActiveModel::Model
  include ActiveModel::Conversion
  include ActiveModel::Validations

  attr_accessor :subject, :email, :content

  validates :subject,
            presence: true

  validates :email,
            presence: true

  validates :content,
            presence: true
end