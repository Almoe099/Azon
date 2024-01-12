class User < ApplicationRecord
  validates :name, presence: true, length: { in: 3..40 }, format: { without: URI::MailTo::EMAIL_REGEXP, message:  "can't be an email" }
  validates :email, uniqueness: true, length: { in: 3..100 }, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :session_token, presence: true, uniqueness: true
  validates :password, length: { in: 6..40 }, allow_nil: true

  before_validation :ensure_session_token

  has_secure_password

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    # has_secure_password gives us the authenticate method
    if user&.authenticate(password)
      return user
    else
      nil
    end
  end


  def ensure_session_token
    self.session_token ||= generate_unique_session_token
  end

  def reset_session_token!
    self.session_token = generate_unique_session_token
    self.save!
    self.session_token
  end

  private

  def generate_unique_session_token
    while true
      token = SecureRandom.urlsafe_base64
      return token unless User.exists?(session_token: token)
    end
  end




end
