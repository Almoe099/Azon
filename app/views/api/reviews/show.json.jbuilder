json.review do
  json.extract! @review, :id, :review, :rating, :user_id, :product_id
end
