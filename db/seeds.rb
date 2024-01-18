# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

ApplicationRecord.transaction do
  puts "Destroying tables..."
  # Unnecessary if using `rails db:seed:replant`
  User.destroy_all

  puts "Resetting primary keys..."
  # For easy testing, so that after seeding, the first `User` has `id` of 1
  ApplicationRecord.connection.reset_pk_sequence!('users')

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

  # Product.create!({
  #   name: "name",
  #   price: 5,
  #   category: "category",
  #   dimensions: "32-54-1",
  #   weight: "40ibs",
  #   description: "welcome to azon"
  # })

  10.times do |i|
    Product.create!(
      name: "Product #{i + 1}",
      price: rand(5..50),
      category: "Category #{i + 1}",
      dimensions: "#{rand(10..50)}-#{rand(20..70)}-#{rand(1..5)}",
      weight: "#{rand(1..50)}ibs",
      description: "Description for Product #{i + 1}"
    )
  end

  puts "Done!"
end
