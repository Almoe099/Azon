json.reviews do
  if @reviews
    @reviews.each do |review|
      json.set! review.id do
        json.extract! review, :id, :title, :review, :rating, :user_id, :product_id
        json.extract! review.user, :name
      end
    end
  end
end
