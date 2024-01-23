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
  puts "creating camera"

  amazon_fire_stick = Product.create!(
    name: "All-new Amazon Fire TV Stick 4K streaming device, more than 1.5 million movies and TV episodes, supports Wi-Fi 6, watch free & live TV",
    price: 34.99,
    category: "Electronics",
    brand: "Amazon",
    dimensions: "38 mm x 142 mm x 16 mm",
    weight: "43.5 g",
    description: "Advanced 4K streaming - Elevate your entertainment with the next generation of our best-selling 4K stick, with improved streaming performance. Wi-Fi 6 support - Enjoy smooth 4K streaming, even when other devices are connected to your router. Cinematic experience - Watch in vibrant 4K Ultra HD with support for Dolby Vision, HDR10+, and immersive Dolby Atmos audio. Endless entertainment - Stream more than 1.5 million movies and TV episodes. Watch favorites from Netflix, Prime Video, Disney+, Max, and more. Subscription fees may apply"
  )
  # amazon_fire_stick.photos.attach(io: URI.open("https://azon1-seeds.s3.amazonaws.com/amazon_fire_stick.jpg"), filename: "fire_stick.jpg")
  amazon_fire_stick.photos.attach(io: URI.open("https://azon1-seeds.s3.amazonaws.com/fireStick.jpg"), filename: "fire_stick.jpg")
  # amazon_fire_stick.photos.attach(io: URI.open("https://azon1-seeds.s3.amazonaws.com/azonProject/tozo.jpg"), filename: "fire_stick1.jpg")
  # amazon_fire_stick.photos.attach(io: URI.open("https://azon1-seeds.s3.amazonaws.com/azonProject/exho_show.jpg"), filename: "fire_stick2.jpg")

  # Example 2
  echo_show = Product.create!(
    name: "All-new Echo Show 8 (3rd Gen, 2023 release) | With Spatial Audio, Smart Home Hub, and Alexa | Charcoal",
    price: 89.99,
    category: "Electronics",
    brand: "Amazon",
    dimensions: "7.9” x 5.5” x 4.2” (200mm x 139mm x 106mm)",
    weight: "36.6 oz",
    description: "BETTER INSIDE AND OUT - Entertainment is more immersive with spatial audio and an 8 HD touchscreen. Video calling is crisper with high-quality sound and a 13 MP camera. And your home is more connected than ever with the built-in smart home hub. VIBRANT SIGHTS, FULL SOUND - Content on Prime Video, Netflix, Fire TV Channels, and more comes to life with an HD display and room-filling spatial audio. Ask Alexa to stream Amazon Music, Apple Music, or Spotify. Subscriptions for some services required. SMART HOME, SIMPLIFIED – Pair and control devices compatible with Zigbee, Matter, and Thread without a separate smart home hub. Manage cameras, lights, and more using the display or your voice, or activate routines via motion. Also supports connectivity via Bluetooth and wifi"
  )

  echo_show.photos.attach(io: URI.open("https://azon1-seeds.s3.amazonaws.com/azonProject/exho_show.jpg"), filename: "echo_show.jpg")

  tozo = Product.create!(
    name: "TOZO A1 Mini Wireless Earbuds Bluetooth 5.3 in Ear Light-Weight Headphones Built-in Microphone, IPX5 Waterproof, Immersive Premium Sound Long Distance Connection Headset with Charging Case, Black",
    price: 19.99,
    category: "Electronics",
    brand: "TOZO",
    dimensions: "0.88 x 0.85 x 0.85 inches",
    weight: "	2.8 ounces",
    description: "[Ultra Lightweight and Compatible for Small Ear] The surface and Angle of A1 earbuds in-ear part have been polished and refined repeatedly to achieve a balance between beauty and comfort and make it comfortable to wear. Likewise, a single earbud weighs only 3.7g, making it as light as a feather and discreet in the ear. Ergonomic design provides a comfortable and secure fit that doesn’t protrude from your ears especially for sports, workout, gym. [Stereo Sound Quality] TOZO A1 earbuds’6mm diameter speaker presents a powerful and wide sound range, which makes the treble full of dynamics, and the bass powerful.Adopt advanced Bluetooth chip makes the sound played by the earphones much more beautiful and pleasant, suitable for sports or home work"
  )

  tozo.photos.attach(io: URI.open("https://azon1-seeds.s3.amazonaws.com/azonProject/tozo.jpg"), filename: "tozo.jpg")

# Example 5
  echo_dot = Product.create!(
    name: "Echo Dot (5th Gen, 2022 release) | With bigger vibrant sound, helpful routines and Alexa | Charcoal",
    price: 49.99,
    category: "Electronics",
    brand: "Amazon",
    dimensions: "3.9” x 3.9” x 3.5” (100mm x 100mm x 89 mm)",
    weight: "10.7 oz",
    description: "OUR BEST SOUNDING ECHO DOT YET – Enjoy an improved audio experience compared to any previous Echo Dot with Alexa for clearer vocals, deeper bass and vibrant sound in any room.* Remote-controlled with smart features *YOUR FAVORITE MUSIC AND CONTENT – Play music, audiobooks, and podcasts from Amazon Music, Apple Music, Spotify and others or via Bluetooth throughout your home. ALEXA IS HAPPY TO HELP – Ask Alexa for weather updates and to set hands-free timers, get answers to your questions and even hear jokes. Need a few extra minutes in the morning? Just tap your Echo Dot to snooze your alarm"
  )
  echo_dot.photos.attach(io: URI.open("https://azon1-seeds.s3.amazonaws.com/azonProject/echo_dot.jpg"), filename: "echo_dot.jpg")

  # Example 6
  wyze = Product.create!(
    name: "WYZE Cam OG 1080p HD Wi-Fi Security Camera - Indoor/Outdoor, Color Night Vision, Spotlight, 2-Way Audio, Cloud & Local storage- Ideal for Home Security, Baby, Pet Monitoring Alexa Google Assistant",
    price: 23.99,
    category: "Electronics",
    brand: "WYZE",
    dimensions: "48 x 22 x 40 inches",
    weight: "50 lbs",
    description: "Livestream with Color Night Vision - Monitor your home day or night with 1080P HD video & color night vision..Power Adaptor Input : Input - 110-240V(AC/DC), Output - 5V/1A. Indoor/Outdoor - Wyze Cam OG is a wired security camera with an IP65 rating so you can confidently install it outside in the rain or inside in the kids’ room. Wyze Outdoor Power Adapter (sold separately) required for outdoor use.Deter Intruders - A 40lm built in spotlight and mini-siren ward off would-be package thiefs. Weather Resistance: Indoor and Outdoor (IP65)"
  )
  wyze.photos.attach(io: URI.open("https://azon1-seeds.s3.amazonaws.com/azonProject/wyze.jpg"), filename: "wyze.jpg")

  # Example 7
  amazon_fire_max = Product.create!(
    name: "Amazon Fire Max 11 tablet productivity bundle with Keyboard Case, Stylus Pen, octa-core processor, 4 GB RAM to do more throughout your day, 128 GB, Gray, without lockscreen ads",
    price: 294.99,
    category: "Electronics",
    brand: "Amazon",
    dimensions: "10.2” x 6.44” x 0.3” (259.1mm x 163.7mm x 7.5mm)",
    weight: "17.28 oz",
    description: "MADE FOR WORK & PLAY — Fire Max 11 with included Keyboard Case and Made for Amazon Stylus Pen are bundled together to help you get more done, create, and relax throughout your day. BIGGER, BRILLIANT, BEAUTIFUL — Vivid 11 screen with 2.4 million pixels (2000 x 1200 resolution) lets you see every detail of your favorite movies, TV shows, and games. Certified for low blue light. MAX PERFORMANCE — Built with a powerful octa-core processor, 4 GB memory, and Wi-Fi 6 for fast streaming, responsive gaming, and quick multitasking"
  )
  amazon_fire_max.photos.attach(io: URI.open("https://azon1-seeds.s3.amazonaws.com/azonProject/amazon_fire_max.jpg"), filename: "amazon_fire_max.jpg")

  # Example 8
  tv = Product.create!(
    name: "LG 97-Inch Class OLED M3 Signature Series, 4K Processor, Smart Flat Screen TV, with Wireless 4K Connectivity, Alexa Built-in (OLED97M3PUA, 2023 Model), Light Satin Silver",
    price: 29996.99,
    category: "Electronics",
    brand: "LG",
    dimensions: "1.11 x 84.8 x 48.2 inches",
    weight: "126.7 lbs",
    description: "LG OLED EVO: The LG OLED evo M3 features the exclusive a9 AI Processor Gen6, optimized for LG OLED, delivering enhanced picture and performance. Brightness Booster Max adapts images for vivid visuals, revealing vibrant colors and strong contrast in well-lit spaces. AI technology and deep learning detect your content, optimizing picture and sound for an immersive viewing experience. ZERO CONNECT BOX: Simplifies TV setup by eliminating the need for multiple cables, reducing wire clutter, and enabling flexible TV positioning. It centralizes your media devices, wirelessly transmitting a 4K 120Hz signal to your OLED TV from up to 30 feet away. WEBOS 23: Stream more, search less with advanced AI tech. Dive into fitness, sports, entertainment, and more. Quick Cards organize apps on the Magic Remote for easy browsing. Enjoy 300+ free channels on LG Channels instantly"
  )
  tv.photos.attach(io: URI.open("https://azon1-seeds.s3.amazonaws.com/azonProject/lg_tv.jpg"), filename: "tv.jpg")

  # Example 9
  cookware = Product.create!(
    name: "Amazon Basics Stainless Steel 11-Piece Cookware Set, Pots and Pans, Silver",
    price: 129.95,
    category: "Home & Kitchen",
    brand: "Amazon Basics",
    dimensions: "23.82 x 13.39 x 11.03 inches",
    weight: "19.23 lbs",
    description: "11-piece set includes an 8-inch frypan, 10-inch frypan, 1.5 quart saucepan with lid, 2.5 quart saucepan, steamer with lid, 3 quart sauté pan with lid, and an 8 quart stock pot with lid. Heavy-gauge 18/8 stainless steel construction with aluminum core bottoms that distribute heat evenly and quickly; mirror finish; made without BPA. Suitable for use on stovetops and induction tops; oven safe up to 500°F (260°C). Riveted stainless steel handles stay cool to the touch during stovetop preparations. Transparent tempered glass lids with steam escape holes"
  )
  cookware.photos.attach(io: URI.open("https://azon1-seeds.s3.amazonaws.com/azonProject/cookware.jpg"), filename: "cookware.jpg")

  # Example 10
  blender = Product.create!(
    name: "Sangcon Blenders and Food Processor Combo for Kitchen, Blender for Shakes and Smoothies, Grinding & more, 40 oz Jar & 17oz Cup with To-Go Lid, Stainless Steel Silver",
    price: 59.99,
    category: "Home & Kitchen",
    brand: "	sangcon",
    dimensions: "14 x 5 x 5",
    weight: "5.3 lbs",
    description: "👍[Enhanced Safety Features]: Our desktop blender prioritizes safety with its food-grade materials, ensuring that your food remains uncontaminated. The stainless steel blades provide long-lasting performance and exceptional blending results. With overheating protection and suction cup base for stability, our blender guarantees reliable and safe operation. 👍[Sleek and Upgraded Stainless Steel Design]: Elevate your kitchen aesthetics with our premium desktop blender. Featuring a sleek stainless steel exterior, it adds a touch of modern elegance to your countertop. Not only does it look stylish, but it also showcases the durability and high-quality craftsmanship that our blender offers. 👍[3 Containers & 2 Blade Attachments]: Our Blender & Food Processor Combo offers versatility with 3 containers and 2 blade attachments. From smoothies to sauces, this compact design can handle a variety of tasks. With two speed settings and a pulse mode, you can easily achieve your desired blending results"
  )
  blender.photos.attach(io: URI.open("https://azon1-seeds.s3.amazonaws.com/azonProject/blender.jpg"), filename: "blender.jpg")

  # Example 11
  robot_vacuum = Product.create!(
    name: "roborock Q8 Max+ Robot Vacuum and Mop, Self-Emptying, Hands-Free Cleaning for up to 7 Weeks, Reactive Tech Obstacle Avoidance, 5500 Pa Suction, DuoRoller Brush, APP-Controlled Mopping, White",
    price: 599.97,
    category: "Home & Kitchen",
    brand: "roborock",
    dimensions: "19.17 x 14.92 x 14.45",
    weight: "17.9 lbs",
    description: "[Automatic Self-Emptying]: Experience unparalleled convenience with the Q8 Max+ Self-Emptying feature, boasting a 2.5L dust bag that allows for up to 7 weeks of continuous cleaning without the need for manual dustbin changes. [Tailor your Mopping]: Different foors and different rooms need different cleaning intensities. Choose how much mopping you want to use in-app, and even define how much to use in specific rooms around your home, from low-flow on stone, to high-flow for grimy kitchens.[Reactive Tech Obstacle Avoidance]: The robot vacuum navigates through your home effortlessly, employing Reactive Technology Obstacle Avoidance, ensuring a seamless and uninterrupted cleaning experience."
  )
  robot_vacuum.photos.attach(io: URI.open("https://azon1-seeds.s3.amazonaws.com/azonProject/robot_vacuum.jpg"), filename: "robot_vacuum.jpg")

  # Example 12
  instant_pot = Product.create!(
    name: "Instant Pot Pro 10-in-1 Pressure Cooker, Slow Cooker, Rice/Grain Cooker, Steamer, Sauté, Sous Vide, Yogurt Maker, Sterilizer, and Warmer, Includes App With Over 800 Recipes, Black, 6 Quart",
    price: 119.95,
    category: "Home & Kitchen",
    brand: "Instant Pot",
    dimensions: "13 x 12.7 x 12.8",
    weight: "6 Kilograms",
    description: "10-IN-1 FUNCTIONALITY: Pressure cook, slow cook, sous vide, sauté pan, rice, sterilizer, yogurt maker, food warmer, cake baker and steamer..Special Features: ‎Programmable. THE MOST VERSITILE: The ONLY Multi-Cooker with a Premium Cookware Grade Inner Pot with Stay-Cool Silicone Handles. - Meaning you can take it from your Insta Pot to your stove top!. CONVENIENT FAVORITES: 5 programmable settings for your own special recipes. FAST OR SLOW: Pressure cook to save time and retain more flavor, or slow cook for traditional recipes"
  )
  instant_pot.photos.attach(io: URI.open("https://azon1-seeds.s3.amazonaws.com/azonProject/instant_pot.jpg"), filename: "instant_pot.jpg")

  # Example 13
  keyboard = Product.create!(
    name: "Logitech G713 Wired Mechanical Gaming Keyboard with LIGHTSYNC RGB Lighting, Tactile Switches (GX Brown), and Keyboard Palm Rest, PC and Mac Compatible - White Mist",
    price: 149.99,
    category: "Gaming",
    brand: "Logitech G",
    dimensions: "14.59 x 6.18 x 1.46 inches",
    weight: "2.12 lbs",
    description: "Cloud-soft Comfort: Float away with G713’s dreamy white design and comfy, cloud-shaped palm rest; compact mechanical TKL keyboard layout and adjustable height give that good game feeling, all-day long. Lovely Lighting: Per key and perimeter Logitech LIGHTSYNC RGB with preloaded Play Mood animations, the Aurora Collection signature lighting; customize your RGB gaming keyboard’s lighting on G HUB. Always On: You’re always ready to play, simple and worry-free, with wired USB-C keyboard connectivity"
  )
  keyboard.photos.attach(io: URI.open("https://azon1-seeds.s3.amazonaws.com/azonProject/keyboard.jpg"), filename: "keyboard.jpg")

  # Example 14
  headset = Product.create!(
    name: "Logitech G733 Lightspeed Wireless Gaming Headset with Suspension Headband, Lightsync RGB, Blue VO!CE mic technology and PRO-G audio drivers - Black",
    price: 119.99,
    category: "Gaming",
    brand: "Logitech G",
    dimensions: "8.5 x 8.3 x 4.1 inches",
    weight: "9.8 ounces",
    description: "Total freedom with up to 20 meter wireless range and Lightspeed wireless audio transmission. Keep playing for up to 29 hours of battery life. Play in stereo on PlayStation(R) 4.Note : If the size of the earbud tips does not match the size of your ear canals or the headset is not worn properly in your ears, you may not obtain the correct sound qualities or call performance. Change the earbud tips to ones that fit more snugly in your ear.Specific uses for product : Gaming,Personal,Streaming. Personalize your headset lighting across the full spectrum, 16.8 M colors. Play in colors with front-facing, dual-zone Lightsync RGB lighting and choose from preset animations or create your own with G HUB software. Colorful, reversible suspension headbands are designed for comfort during long play sessions"
  )
  headset.photos.attach(io: URI.open("https://azon1-seeds.s3.amazonaws.com/azonProject/headset.jpg"), filename: "headset.jpg")

  # Example 15
  chair = Product.create!(
    name: "GTRACING Gaming Chair with Footrest, Ergonomic Computer Game Desk, Reclining Gamer Chair Seat Height Adjustment, Swivel Rocker with Headrest and Lumbar Blue",
    price: 129.99,
    category: "Gaming",
    brand: "GTRACING",
    dimensions: "22 x 22 x 47",
    weight: "30 lbs",
    description: "Perfect for Gaming: Gtracing gaming chair for pro gamers.Aiming to improve your gaming experience. Multi Function: Armrest and seat height adjustable;large reclining and rocking; 360 degree swivel. High Quality:Pu leather, added seat cushion,lumbar headrest pillow offer added support and comfort. Wide Applications: Gtracing gaming chair is an ideal seat of choice for working,studying and gaming"
  )
  chair.photos.attach(io: URI.open("https://azon1-seeds.s3.amazonaws.com/azonProject/chair.jpg"), filename: "chair.jpg")

  # Example 16
  nike_shoe = Product.create!(
    name: "Nike mens Air Jordan 1 Mid",
    price: 255.00,
    category: "Fashion",
    brand: "sike",
    dimensions: "M 10",
    weight: "20 ounces",
    description: "Limited Jordan Release. Soft Leather. Sports Shoes"
  )
  nike_shoe.photos.attach(io: URI.open("https://azon1-seeds.s3.amazonaws.com/azonProject/nike_shoe.jpg"), filename: "nike_shoe.jpg")

  # Example 17
  bag = Product.create!(
    name: "Liselle Kiss Women's Meli Bag",
    price: 315.00,
    category: "Fashion",
    brand: "Liselle Kiss",
    dimensions: " 7 x 2.5 x 6 inches",
    weight: "8 ounces",
    description: "Gold-tone chain handle. Length: 7in / 17.5cm, Height: 5.5in / 14cm, Handle drop: 3.25in / 8cm, Strap drop: 21.25in / 54cm, Depth: 2in / 5cm. Fold-over flap with magnetic snap. Card slot at interior. Removable strap"
  )
  bag.photos.attach(io: URI.open("https://azon1-seeds.s3.amazonaws.com/azonProject/bag.jpg"), filename: "bag.jpg")

  # Example 18
  necklace = Product.create!(
    name: "1/2-3.00 CT Diamond, 14k White Gold 4 Prong Set Round-cut Lab Grown Diamond Solitaire Stud Pendant Necklace (J, VS-SI) Jewelry for Women",
    price: 219.99,
    category: "Fashion",
    brand: "La4ve Diamonds",
    dimensions: " 8 x 5.5 x 4 inches",
    weight: "5 ounces",
    description: "STUNNING 14K WHITE GOLD: Attract all eyes with this jaw-dropping set of round cut lab grown diamond solitaire pendant necklace made from 14K white gold. Featuring the iconic round cut, this beautiful lab grown diamond necklace is placed in prong setting for a sturdy and balanced look. The 1/2 carat lab grown diamond necklace coupled with the white gold make for a fine, ultimately timeless piece of jewelry. THE BEST QUALITY CRAFTSMANSHIP: All necklace for women at La4ve Diamonds are made only with the best quality craftsmanship that passes the test of time. From working with traditional goldsmithery to using cutting edge technology, our artisans put only love, dedication and craftsmanship into each and every piece they create, including this state of the art of diamond pendant. The perfect pendant necklace for 24/7 elegant, classy, chic looks. LAB GROWN DIAMONDS: Our lab-created diamonds dramatically reduce both the physical and carbon footprint of the diamond industry resulting in a much higher quality diamond. We provide a strong ethical alternative to mined diamonds at a significantly lower cost. THE PERFECT GIFT ON ANY OCCASION: Surprise your loved one with this beautiful solitaire diamond pendant by La4ve. A classic piece of jewelry for all women in your life, these diamond pendant are a perfect gift for any occasion such as birthdays, anniversaries, engagements, Women’s Day, Valentine’s Day or Christmas. Plus, this diamond necklace come in an elegant gift"
  )
  necklace.photos.attach(io: URI.open("https://azon1-seeds.s3.amazonaws.com/azonProject/necklace.jpg"), filename: "necklace.jpg")

  puts "Done!"
