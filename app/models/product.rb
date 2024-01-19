class Product < ApplicationRecord

  validates :name, presence: true, uniqueness: true
  validates :description, :price, :category,  presence: true

  has_many_attached :photos

  # belongs_to :cart
  # has_many :reviews

end
