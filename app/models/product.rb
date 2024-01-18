class Product < ApplicationRecord

  validates :name, presence: true, uniqueness: true
  validates :description, :price, :category,  presence: true

  # belongs_to :cart
  # has_many :reviews

end
