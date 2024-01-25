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

  # camera = Product.create!({
  #   name: "name",
  #   price: 5,
  #   category: "category",
  #   brand: "brand",
  #   dimensions: "32-54-1",
  #   weight: "40ibs",
  #   description: "welcome to azon * Best Place to Shop"
  # })
  # camera.photos.attach(io: URI.open("https://azon1-seeds.s3.amazonaws.com/CameraAmazonTest.webp"), filename: "camera.webp")
  # puts "creating camera"

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
    weight: "50 pounds",
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
    weight: "126.7 pounds",
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
    weight: "19.23 pounds",
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
    weight: "5.3 pounds",
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
    weight: "17.9 pounds",
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
    weight: "2.12 pounds",
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
    weight: "30 pounds",
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
    brand: "livho",
    dimensions: "8 x 5.5 x 4 inches",
    weight: "0.8 ounces",
    description: "STUNNING 14K WHITE GOLD: Attract all eyes with this jaw-dropping set of round cut lab grown diamond solitaire pendant necklace made from 14K white gold. Featuring the iconic round cut, this beautiful lab grown diamond necklace is placed in prong setting for a sturdy and balanced look. The 1/2 carat lab grown diamond necklace coupled with the white gold make for a fine, ultimately timeless piece of jewelry. THE BEST QUALITY CRAFTSMANSHIP: All necklace for women at La4ve Diamonds are made only with the best quality craftsmanship that passes the test of time. From working with traditional goldsmithery to using cutting edge technology, our artisans put only love, dedication and craftsmanship into each and every piece they create, including this state of the art of diamond pendant. The perfect pendant necklace for 24/7 elegant, classy, chic looks. LAB GROWN DIAMONDS: Our lab-created diamonds dramatically reduce both the physical and carbon footprint of the diamond industry resulting in a much higher quality diamond. We provide a strong ethical alternative to mined diamonds at a significantly lower cost. THE PERFECT GIFT ON ANY OCCASION: Surprise your loved one with this beautiful solitaire diamond pendant by La4ve. A classic piece of jewelry for all women in your life, these diamond pendant are a perfect gift for any occasion such as birthdays, anniversaries, engagements, Women’s Day, Valentine’s Day or Christmas. Plus, this diamond necklace come in an elegant gift"
  )
  necklace.photos.attach(io: URI.open("https://azon1-seeds.s3.amazonaws.com/azonProject/necklace.jpg"), filename: "necklace.jpg")

  glasses = Product.create!(
    name: "livho 2 Pack Blue Light Blocking Glasses, Computer Reading/Gaming/TV/Phones Glasses for Women Men,Anti Eyestrain & UV Glare (Light Black+Clear)",
    price: 15.98,
    category: "Fashion",
    brand: "La4ve Diamonds",
    dimensions: "6.69 x 2.36 x 1.18 inches",
    weight: "5 ounces",
    description: "[Protection for Your Eyes] -Alleviates visual fatigue and discomfort from long periods of web surfing, gaming and working under fluorescent lights with UV400 protection and glare reduction. [Reduce Eyestrain] -Enjoy your digital time, NO worry about eye fatigue, blurred vision and headache. [Better Sleep] -Amber lenses block more blue rays than others and see more realistic.You'll never have trouble with sleeping again. [Excellent TR90 Material] -Ultra-lightweight and flexible TR90 nylon frame material for durability and comfortable long-term wearing. Casual frame design keeps you looking professional and stylish while working or playing video games. [Product Dimension] -Lens Width: 52mm(2.05inches), Lens Height: 42mm(1.65inches), Temple Length: 140mm(5.51inches), Nose Bridge: 14mm(0.55inches)"
  )
  glasses.photos.attach(io: URI.open("https://azon1-seeds.s3.amazonaws.com/glasses.jpg"), filename: "glasses.jpg")

  watch = Product.create!(
    name: "OLEVS Men Multifunction Watch, Multi Dial Waterproof Luminous Chronograph Men's Watch with Date Gift for Men,Stainless Steel Watches for Men,Classic Men Wrist Watch",
    price: 38.88,
    category: "Fashion",
    brand: "OLEVS",
    dimensions: "5.98 x 2.64 x 1.14 inche",
    weight: "6.38 Ounces",
    description: "⌚【WATCH DETAILS 】Case diameter:41mm. Case thickness:11mm. An adjustable 20cm silver stainless steel band fits up to 7.8-inch wrist circumference. Net weight: 0.27lb(123g). Additional free watch adjustment tool.⌚【UNIQUE ELEGANT DESIGN】Three multifunction sub-dials support second,minute and 24 chronographs and calendar,Easy to operate.high quality quartz movement and battery provide accurate time keeping,Solid Durable and comfortable stainless steel band fits to daily wear,scratch proof mineral glass dial.⌚【30M WATERPROOF/LUMINOUS】The bottom cover is made of wear-resistant stainless steel with a better waterproof effect.It is water-resistant in daily-life use and can prevent sweat and water splashes. (Please do not pull out the buttons underwater)Since it is non-self-luminous,you must illuminate it with the bright light to activate the luminous function.⌚【Premium Gifts FOR MEN】Nordic classic fashion design men's watch, clear lines draw the outline of a unique texture. This classic simple gent's wristwatch will be greatly suitable for any occasion. It is quite suitable for a present with an elegant package. This is a perfect gift for you or your friends.⌚【OLEVS AFTER-SALE SERVE】Use our chronograph watch with no risk.30 day free return and 24 month warranty for any quality-related issue.Customer satisfaction is our first priority and we don’t compromise on the quality of the material,If you have any questions, please contact us,we will help you solve the problem"
  )
  watch.photos.attach(io: URI.open("https://azon1-seeds.s3.amazonaws.com/watch.jpg"), filename: "watch.jpg")

  bracelet = Product.create!(
    name: "Femme Luxe Sara Diamond Tennis Bracelet for Women (5.00 Carats, G-H Color, I2 Clarity), 14K Gold, with Gift Box, Giftable Jewelry",
    price: 5400.00,
    category: "Fashion",
    brand: "Jewelry Forever",
    dimensions: "7 x 0.09 x 7 inches",
    weight: "5.00 carats",
    description: "FINEST QUALITY MATERIALS: Fashioned with 5.00 carat Diamonds (Color: G-H, Clarity: I2) and solid 14K Yellow Gold. Each diamond is hand-cut to perfection by master craftsmen to maximize that dazzling sparkle we love!. Elevate your style with this exquisite diamond bracelet, a true symbol of luxury and sophistication. It's a captivating masterpiece that radiates opulence and timeless beauty. Make a statement with this breathtaking piece that blends elegance, prestige, and allure. Experience the epitome of luxury jewelry. 'Joy Through Jewelry': To us, jewelry is more than a beautifully crafted ornament made of precious metal, diamonds, and gemstones. It is an expression of celebration. For centuries, people would overturn to jewelry to express their love and celebrate life. Everyday gives us reasons to celebrate, whether big or small. Be it an occasion or simply a new day. In these moments, jewelry brings a smile to our heart and soul. And at Femme Luxe, we strive to make such smiles happen"
  )
  bracelet.photos.attach(io: URI.open("https://azon1-seeds.s3.amazonaws.com/bracelet.jpg"), filename: "bracelet.jpg")

  ps5 = Product.create!(
    name: "PlayStation 5 Console (PS5)",
    price: 499.99,
    category: "Gaming",
    brand: "PlayStation",
    dimensions: "19 x 17 x 8 inches",
    weight: "12 pounds",
    description: "Model Number CFI-1215A01X. Stunning Games - Marvel at incredible graphics and experience new PS5 features. Breathtaking Immersion - Discover a deeper gaming experience with support for haptic feedback, adaptive triggers, and 3D Audio technology. Lightning Speed - Harness the power of a custom CPU, GPU, and SSD with Integrated I/O that rewrite the rules of what a PlayStation console can do"
  )
  ps5.photos.attach(io: URI.open("https://azon1-seeds.s3.amazonaws.com/ps5.jpg"), filename: "ps5.jpg")


  camera = Product.create!({
    name: "Digital Camera, 4k Cameras for Photography, 64MP WiFi Vlogging Camera for YouTube with Dual Camera, Touch Screen, Flash, 32GB SD Card, Lens Hood, 3000mAH Battery-Black1",
    price: 159.99,
    category: "Electronics",
    brand: "NIKICAM",
    dimensions: "5.63 x 3.54 x 3.86 inches",
    weight: "2.22 pounds",
    description: "📸【4K 64MP Digital Camera for Photography】With 48 megapixels and 60fps video resolution, this 4K digital camera captures stunning high-resolution photos and videos without missing all the details. The built-in flash makes this NIKICAM 4k vlogging camera suitable for beginners to take clear, vibrant photos in any lighting conditions, and the 16x zoom photography camera can also capture landscapes from a distance, clearly capturing all the moments you want!.📸【Point and Shoot Camera with Touch Screen】This camera is designed with a touchable screen, the 4-inch screen camera is silky smooth and sensitive when using, giving you a different hand feeling experience.The NIKICAM 4K camera offers a fast autofocus function to help you lock on to your target quickly and shoot perfectly. The body camera is also equipped with a 3.5mm jack for external microphone for clear audio recording.📸【Vlogging Camera for YouTube as Webcam】 This Vlogging Camera can be used as a webcam, ideal for 4K video.The camera can be connected to your computer via a USB cable, select PC Camera to use it as a PC camera, supports external 1/4 standard size of a tripod, freeing up your hands so you can easily enjoy video chatting or live streaming. (Note: When you connect this 4k small camera to your computer and use it as a webcam, you will not be able to use all the camera functions). 🏖️【4K WiFi Camera】This youtube camera can be used to connect to smart devices such as mobile phones, and use your phone to control the camera to shoot, and instantly transfer your favorite photos or videos from the compact camera to your phone, and share them to your Facebook, Tiktok and other social media platforms at any time, and share the joy with your friends at the first time without any delay. 🎁 【Ideal Gift Camera】 This body camera for travel is suitable for amateurs and beginner photographers to carry with them, fully functional, lightweight design, small size (3.9*3.9*5.0 INCH, 0.86LB), this cheap vlog camera is a perfect gift for Valentine's Day, Thanksgiving, Christmas or birthday for lovers, friends, children or parents ideal gift!"
  })
  camera.photos.attach(io: URI.open("https://azon1-seeds.s3.amazonaws.com/camera.jpg"), filename: "camera.jpg")


  notepad = Product.create!(
    name: "Amazon Basics Narrow Ruled 5 x 8-Inch Lined Writing Note Pads, 6 Count (50 Sheet Pads), Multicolor",
    price: 10.59,
    category: "Office",
    brand: "Amazon Basics",
    dimensions: "5-x-8-inch",
    weight: "1.2 pounds",
    description: "6-pack of 50-sheet note pads; 2 of each pastel color (Pink, Orchid, and Blue) for optional color coding; ideal for home, school, or office. Narrow ruled 9/32-inch line spacing for smaller handwriting or to write more notes on a single page. Sturdy chipboard backing for added writing pad support. Perforated top for easy removal of sheets from the pad Left-side margin and title space for organizing notes.Product Dimensions: 5 x 8 inches (WxL, including binding)"
  )
  notepad.photos.attach(io: URI.open("https://azon1-seeds.s3.amazonaws.com/notepad.jpg"), filename: "notepad.jpg")


  pen = Product.create!(
    name: "Amazon Basics Refillable Fountain Pen - Fine Point, Black Ink",
    price: 19.34,
    category: "Office",
    brand: "Amazon Basics",
    dimensions: "5.5 x 0.65 x 0.5 inches",
    weight: "0.96 ounces",
    description: "Refillable fountain pen combines a premium feel with smooth results for a luxurious writing experience. Water/dye-based black ink is refillable; comes with 1 ink cartridge and 2 refills Black brass-metal barrel provides a comfortable hold and ultimate control; metal clip for attaching to a notebook or pocket. Fine-sized nib for creating clean narrow lines; pen comes in an elegant black plastic case; great for gift giving. Measures 5.5 by 0.5 by 0.6 inches; backed by an Amazon Basics 1-year limited warranty"
  )
  pen.photos.attach(io: URI.open("https://azon1-seeds.s3.amazonaws.com/pen.jpg"), filename: "pen.jpg")


  pencil = Product.create!(
    name: "Amazon Basics Woodcased #2 Pencils, Pre-sharpened, HB Lead, 30 count, Orange",
    price: 5.76,
    category: "Office",
    brand: "	Amazon Basics",
    dimensions: "7.4 x 0.3 x 0.3 inches",
    weight: "0.216 ounces",
    description: "Wood-cased pencils (30-count) for writing, drawing, or sketching; ideal for home, office, or classroom. #2 HB medium-soft lead for strength, smooth writing, and versatile use. Top eraser for easily removing unwanted marks; smudge-free and latex-free. Product Dimensions: 7.4 x 0.3 x 0.3 inches (LxWxH)"
  )
  pencil.photos.attach(io: URI.open("https://azon1-seeds.s3.amazonaws.com/pencil.jpg"), filename: "pencil.jpg")


  stapler = Product.create!(
    name: "Roll over image to zoom in Craftinova Stapler, Metal Desktop Stapler, 25 Sheet Capacity Desktop Stapler, with 2000 Staples & Stapler Remover, Office Stapler, 6 Pack",
    price: 23.99,
    category: "Office",
    brand: "craftinova",
    dimensions: "4.9L x 2.51W",
    weight: "2.28 pounds",
    description: "👍【Metal Heavy Stapler】 - The stapler uses an all-metal body with a smooth and black anti-rust coating. It can be used 10,000 times, and the metal stapler is more durable than ordinary stapler and is not easily damaged. 👍【Complete Accessories】-The package covers all of your stapling essentials.Includes 2000 standard staples and a stapler remover.Provide the perfect complement to your stapler. 👍【25-sheet capacity stapler】-You can staple up to 25 sheets with 26/6 staples, or up to 20 sheets with 24/6 staples.Maximum capacity 0.14 inch.Maximum stapling distance: 3.54 inches. 👍【Flexible wit】- No-Jam technology for smooth stapling,rotating top plate meet different stapling needs 180 degree rotation,degrees for easy Temporary Stapling and Permanent Stapling.All rubber base, so that the stapler firmly in place in the use of the process, not slippery. 👍【QUALITY SERVICE】: We provide 120 days after-sales service. If you have any problems during use, please feel free to contact us, we will be happy to provide you with after-sales support"
  )
  stapler.photos.attach(io: URI.open("https://azon1-seeds.s3.amazonaws.com/stapler.jpg"), filename: "stapler.jpg")


  file_folder = Product.create!(
    name: "File Folder, HERKKA 120 Pack 1/3 Cut Tab File Folders, Colored File Folders Designed for Office and Classroom Use, Letter Size, Assorted 6 Colors",
    price: 26.99,
    category: "Office",
    brand: "HERKKA",
    dimensions: "12.24 x 10.71 x 3.03 inches",
    weight: "6.76 pounds",
    description: "FILE FOLDERS SET: Contains 120 pack folders in 6 assorted primary colors (off-white, red, blue, yellow, orange and green) to make color-coded filing categories. Organize different types of documents for classification and storage. 1/3 CUT TOP TABS: The 3 tabs are designed for easy and quick retrieval of documents. Assorted tab positions allow you to customize your own cover for different topics. Ideal for managing and classifying academic papers, working documents, contract documents, etc. DIFFERENT EXPANSION CAPACITY: Made of high quality paper, not easy to break and deformation. Designed with 3 expansion crease at bottom, the folder will provide different options for expanding capacity to meet your different capacity needs. KEEP YOUR DOCUMENTS TIDY: Organize different types of files by color-coding for quick and easy identification with these 3 tab file folders, helps you avoid filing mistakes, improve efficiency, and create neat, professional custom files. ECONOMICAL & ECO-CONSCIOUS: Protect the environment by using tabs made with recyclable paper. Recyclable colorful filing folders (120-count) for neatly storing and organizing documents"
  )
  file_folder.photos.attach(io: URI.open("https://azon1-seeds.s3.amazonaws.com/file_folder.jpg"), filename: "file_folder.jpg")


  soccerball = Product.create!(
    name: "adidas MLS 24 Club Soccer Ball",
    price: 19.98,
    category: "Sports & Outdoors",
    brand: "adidas",
    dimensions: "7.6 x 7.4 x 7.4 inches",
    weight: "16 Ounces",
    description: "100% Thermoplastic Polyurethane. Imported. A durable ball with an important message. SIZED FOR 12+ . Size 5 ball (official size) suggested for ages 12+ . REQUIRES INFLATION: Ships flat, pump not included. MLS GRAPHIC: MLS printed graphic. DURABILITY: Machine-stitched surface for high quality"
  )
  soccerball.photos.attach(io: URI.open("https://azon1-seeds.s3.amazonaws.com/soccerball.jpg"), filename: "soccerball.jpg")


  basketball = Product.create!(
    name: "WILSON NBA DRV Series Indoor/Outdoor Basketballs",
    price: 55.19,
    category: "Sports & Outdoors",
    brand: "WILSON",
    dimensions: "7.22 x 8.52 x 8.16 inches",
    weight: "16 Ounces",
    description: "Wilson NBA DRV Plus Vibe Outdoor Basketball - Size 5 - 27.5, Black/Blue. PERFORMANCE COVER: Unique outdoor cover designed for elevated grip on rougher surfaces. OUTDOOR DURABILITY: Designed for ultimate domination on outdoor playing surfaces. AIR RETENTION: Long-lasting air retention provided by a specialized inflation-retention lining. NBA PRO SEAMS: Suited to player preference with a new channel construction; NBA OFFICIAL: Features official NBA branding and Wilson script. Wilson provides the official basketball of the NBA"
  )
  basketball.photos.attach(io: URI.open("https://azon1-seeds.s3.amazonaws.com/basketball.jpg"), filename: "basketball.jpg")


  tennis = Product.create!(
    name: "Teloon Recreational Adult Tennis Rackets-27 inch Tennis Racquet for Men and Women College Students Beginner Tennis Racket.",
    price: 33.99,
    category: "Sports & Outdoors",
    brand: "Teloon",
    dimensions: "28 x 12 x 0.5 inches",
    weight: "280 Grams",
    description: "🎾【Tennis Racquets Specifications】： Length: 27 inches(68.5-69cm)/Head size: mid+ (102 inch2) / Grip size: Size 2 (4-1/4 inch)/ Balance(unstrung):335±7 mm/string tensions: 50±5 lbs/string pattern:16x19/unstring weight:280±10 g.🎾【Tennis Racket Handle Description】：The racket grip size is #2 (4 1/4 inch). The handle is made of wood and there is grip outside. As usual,we will not use this grip directly. We will offer you a roll of over grip,you need to wrap overgrip before you using it. Please see our product vedio to wrap the grip. 🎾【Suitable For】：Beginner or recreational teenager/adult player.Our X-BLADE collection has 10 colours for your choice ensures the needs of every men and women. 🎾【Tennis Racket Design】：All of our racket are made with string,the tension of the string is about 50 lbs. the structure of our racket is one-piece molded and the face size is 102 inch square. with the weight of 280gram,the racekt is light but also heavy enough to hit the tennis"
  )
  tennis.photos.attach(io: URI.open("https://azon1-seeds.s3.amazonaws.com/tennis.jpg"), filename: "tennis.jpg")


  bicycle = Product.create!(
    name: "Huffy Stone Mountain Bike, 20-24 Inch Wheels and 13-17 Inch Frame, Multiple Colors",
    price: 229.99,
    category: "Sports & Outdoors",
    brand: "Huffy",
    dimensions: "54.75 x 26.75 x 8.25 inches",
    weight: "37.04 Pounds",
    description: "Frame: The durable steel dual suspension frame comes in striking grey with red accents and features dual suspension to smooth out the bumps along the way. Speeds: 21-speeds help you find the perfect cadence to navigate your path ahead; equipped with a Shimano rear derailleur. Control: Front and rear linear pull brakes provide control and strong stopping power. Tires: The 26-inch all-terrain bike tires are great for various terrains. Ideal Rider: The ideal rider for this bike is a man aged 13 and up"
  )
  bicycle.photos.attach(io: URI.open("https://azon1-seeds.s3.amazonaws.com/bicycle.jpg"), filename: "bicycle.jpg")


  bottle = Product.create!(
    name: "Gatorade Gx Plastic Squeeze Bottle, Light Blue, 30oz",
    price: 23.03,
    category: "Sports & Outdoors",
    brand: "Gatorade",
    dimensions: "5.35W x 4.21H",
    weight: "5.3 ounces",
    description: "Includes (1) 30oz Gatorade Gx Refillable Squeeze Bottle. Fuel your game with Gatorade’s new customizable hydration platform. Add water to your custom Gx bottle, empty a formula pod and start fueling wherever you go. Make it your own with customizable ID ring. Represent your team’s colors. Gator-Skin Form for Grip – Contour silhouette provides maximum control and Gator-Skin exterior provides superior grip and comfort. Compatible with Gx formula pods that allow you to fuel wherever you go. All components of the Gx bottle are top-rack dishwasher safe. We recommend hand washing between uses if you’re using it throughout the day – please let the cap air dry. Lifespan can depend on the frequency of use, washes, and how the bottles are handled"
  )
  bottle.photos.attach(io: URI.open("https://azon1-seeds.s3.amazonaws.com/bottle.jpg"), filename: "bottle.jpg")


  # glasses = Product.create!(
  #   name: "",
  #   price: 15.98,
  #   category: "Office",
  #   brand: "",
  #   dimensions: "",
  #   weight: "",
  #   description: ""
  # )


  puts "Done!"
