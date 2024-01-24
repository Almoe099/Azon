json.cartItem do
  json.extract! @cart_item, :id, :quantity, :product_id, :user_id
end

json.product do
  json.extract! @cart_item.product, :id, :name, :price, :category, :brand, :dimensions, :weight, :description, :created_at, :updated_at

end
