class Cart < ApplicationRecord
  validates :quantity, presence: true
  validates :user, presence: true
  validates :product, presence: true

  belongs_to :user

  belongs_to :product

end
