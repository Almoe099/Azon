json.array! @products do |product|
  json.extract! product, :id, :name, :price, :category, :brand, :dimensions, :weight, :description, :created_at, :updated_at
end
