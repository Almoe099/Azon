class Product < ApplicationRecord

  validates :name, presence: true, uniqueness: true
  validates :description, :price, :category,  presence: true

  has_many_attached :photos

  has_many :carts,
  foreign_key: :product_id,
  class_name: :Cart,
  dependent: :destroy

  # has_many :reviews

end

# Furniture
# Appliances
# Art & Craft
