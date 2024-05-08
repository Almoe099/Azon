json.reviews do
  json.extract! @review, :id, :title, :rating, :review, :user_id, :product_id
  json.extract! @review.user, :name
  json.product do
    json.extract! @review.product, :name, :price, :category, :description
  end
end
