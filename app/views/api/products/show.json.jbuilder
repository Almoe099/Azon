json.product do
  json.extract! @product, :id, :name, :price, :category, :brand, :dimensions, :weight, :description, :created_at, :updated_at
end

