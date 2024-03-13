@reviews.each do |review|
  json.set! review.id do
    json.extract! review, :id, :review, :rating, :user_id, :product_id
    json.extract! review.user, :name
  end
end
