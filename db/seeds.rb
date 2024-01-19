# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

require "open-uri"

  puts "Destroying tables..."
  # Unnecessary if using `rails db:seed:replant`
  User.destroy_all
  Product.destroy_all

  puts "Resetting primary keys..."
  # For easy testing, so that after seeding, the first `User` has `id` of 1
  ApplicationRecord.connection.reset_pk_sequence!('users')
  ApplicationRecord.connection.reset_pk_sequence!('products')

  puts "Creating users..."
  # Create one user with an easy to remember username, email, and password:
  User.create!(
    name: 'Demo-lition',
    email: 'demo@user.io',
    password: 'password'
  )

  # More users
  10.times do
    User.create!({
      name: Faker::Internet.unique.username(specifier: 3),
      email: Faker::Internet.unique.email,
      password: 'password'
    })
  end

  camera = Product.create!({
    name: "name",
    price: 5,
    category: "category",
    brand: "brand",
    dimensions: "32-54-1",
    weight: "40ibs",
    description: "welcome to azon * Best Place to Shop"
  })
  camera.photos.attach(io: URI.open("https://azon1-seeds.s3.amazonaws.com/CameraAmazonTest.webp"), filename: "camera.webp")

  Product.create!(
    name: "Laptop Pro",
    price: 1299.99,
    category: "Electronics",
    brand: "TechGear",
    dimensions: "13.3 x 8.9 x 0.7 inches",
    weight: "2.9 lbs",
    description: "Powerful laptop for professionals * Slim and lightweight design * High-resolution display * Enhanced performance for multitasking * Ideal for work and entertainment"
  )

  # Example 2
  Product.create!(
    name: "Coffee Station",
    price: 99.95,
    category: "Home & Kitchen",
    brand: "BrewMaster",
    dimensions: "10 x 6 x 12 inches",
    weight: "2.5 lbs",
    description: "Compact coffee station for home or office * Convenient and stylish design * Brew your favorite coffee with ease * Space-saving solution for small spaces"
  )

  Product.create!(
  name: "HD Projector",
  price: 499.99,
  category: "Electronics",
  brand: "CinemaTech",
  dimensions: "12 x 9 x 4 inches",
  weight: "5.5 lbs",
  description: "High-definition projector for immersive entertainment * Crisp and clear visuals * Versatile connectivity options * Ideal for home theaters and presentations"
)

# Example 5
Product.create!(
  name: "Smart Ceiling Fan",
  price: 149.95,
  category: "Home & Living",
  brand: "CoolBreeze",
  dimensions: "52 inches",
  weight: "15 lbs",
  description: "Smart and energy-efficient ceiling fan * Remote-controlled with smart features * Adjustable speed and LED lighting * Enhance comfort and style in any room"
)

# Example 6
Product.create!(
  name: "Premium BBQ Grill",
  price: 349.99,
  category: "Outdoor",
  brand: "GrillMaster",
  dimensions: "48 x 22 x 40 inches",
  weight: "50 lbs",
  description: "Premium BBQ grill for outdoor cooking enthusiasts * Durable construction for long-lasting use * Multiple burners for versatile cooking * Stylish design for backyard gatherings"
)

# Example 7
Product.create!(
  name: "Wireless Headphone Set",
  price: 79.99,
  category: "Electronics",
  brand: "SoundSync",
  dimensions: "7 x 6 x 3 inches",
  weight: "0.5 lbs",
  description: "Wireless headphone set for immersive audio experience * Comfortable over-ear design * Bluetooth connectivity * Long battery life for extended use"
)

# Example 8
Product.create!(
  name: "Wooden Desk",
  price: 249.95,
  category: "Furniture",
  brand: "WoodCraft",
  dimensions: "48 x 24 x 30 inches",
  weight: "35 lbs",
  description: "Stylish wooden desk for home or office * Spacious surface for work or study * Sturdy construction with natural wood finish * Enhance your workspace with a touch of elegance"
)

# Example 9
Product.create!(
  name: "Digital Camera Package",
  price: 699.99,
  category: "Electronics",
  brand: "CapturePro",
  dimensions: "5 x 4 x 3 inches",
  weight: "1.2 lbs",
  description: "Complete digital camera package for photography enthusiasts * High-resolution sensor for stunning images * Interchangeable lenses and accessories * Capture and share your moments with ease"
)

# Example 10
Product.create!(
  name: "Smart Thermostat",
  price: 129.99,
  category: "Home & Living",
  brand: "ClimateControl",
  dimensions: "3 x 3 x 1 inches",
  weight: "0.2 lbs",
  description: "Smart thermostat for efficient home climate control * Programmable settings for energy savings * Remote access via mobile app * Create a comfortable environment while reducing energy costs"
)

# Example 11
Product.create!(
  name: "Travel Backpack",
  price: 79.95,
  category: "Fashion",
  brand: "ExploreGear",
  dimensions: "18 x 12 x 8 inches",
  weight: "2 lbs",
  description: "Versatile travel backpack for adventurers * Durable and water-resistant material * Multiple compartments for organized packing * Comfortable and stylish design for travel enthusiasts"
)

# Example 12
Product.create!(
  name: "Wireless Soundbar",
  price: 199.99,
  category: "Electronics",
  brand: "AudioBliss",
  dimensions: "36 x 3 x 2 inches",
  weight: "5 lbs",
  description: "Enhance your audio experience with a wireless soundbar * Crisp and clear sound for immersive entertainment * Easy connectivity with TV and other devices * Sleek design complements any home theater setup"
)

# Example 13
Product.create!(
  name: "Modern Dining Room Set",
  price: 899.95,
  category: "Furniture",
  brand: "ElegantLiving",
  dimensions: "Table: 60 x 36 x 30 inches, Chairs: 18 x 20 x 36 inches",
  weight: "Table: 80 lbs, Chairs: 15 lbs each",
  description: "Upgrade your dining space with this modern dining room set * Elegant table design with sturdy construction * Comfortable chairs for enjoyable meals * Create a stylish and inviting dining area"
)

# Example 14
Product.create!(
  name: "Smart Washing Machine",
  price: 499.99,
  category: "Appliances",
  brand: "SmartClean",
  dimensions: "24 x 24 x 36 inches",
  weight: "150 lbs",
  description: "Make laundry effortless with a smart washing machine * Advanced features for efficient cleaning * Multiple wash cycles for different fabrics * Smart connectivity for remote monitoring and control"
)

# Example 15
Product.create!(
  name: "Trekking Shoes",
  price: 129.95,
  category: "Sports & Outdoors",
  brand: "TrailBlazer",
  dimensions: "Available in various sizes",
  weight: "Varies by size",
  description: "Trekking shoes for outdoor enthusiasts * Durable and comfortable design * Suitable for various terrains * Explore nature with confidence and comfort"
)

# Example 16
Product.create!(
  name: "Gaming Console Bundle",
  price: 399.99,
  category: "Gaming",
  brand: "GameMaster",
  dimensions: "Console: 12 x 8 x 2 inches, Controller: 6 x 4 x 1 inches",
  weight: "Console: 4 lbs, Controller: 0.5 lbs",
  description: "Elevate your gaming experience with this console bundle * High-performance gaming console * Responsive controllers for precise gameplay * Bundled with popular games for endless entertainment"
)

# Example 17
Product.create!(
  name: "Artistic Paint Set",
  price: 59.95,
  category: "Art & Craft",
  brand: "CreativePalette",
  dimensions: "Various paint tube sizes",
  weight: "Varies by paint tube",
  description: "Unleash your creativity with this artistic paint set * High-quality paint for vibrant colors * Assorted tube sizes for different projects * Ideal for artists of all levels"
)

# Example 18
Product.create!(
  name: "Standing Desk Converter",
  price: 149.99,
  category: "Office",
  brand: "ErgoLife",
  dimensions: "35 x 20 x 16 inches",
  weight: "20 lbs",
  description: "Transform your workspace with a standing desk converter * Adjustable height for ergonomic comfort * Easy setup on existing desks * Boost productivity and support a healthy work routine"
)

  puts "Done!"
