class Review < ApplicationRecord

  validates :user_id, :product_id, :review, :rating, :title, presence: true
  validates :rating, inclusion: {in: 1..5, message: "must be selected"}

  belongs_to :user,
  foreign_key: :user_id,
  class_name: :User

  belongs_to :product,
  foreign_key: :product_id,
  class_name: :Product

end
