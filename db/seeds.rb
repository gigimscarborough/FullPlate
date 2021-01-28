# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

Restaurant.destroy_all
User.destroy_all

User.create({email: "demo@demo.com", password: "demo1234", first_name: "Demo", last_name: "User", dining_city: "New York"})

r2 = Restaurant.create(
    name: 'Buddakan NY',
    address: '75 9th Ave New York, NY 10011',
    phone_number: '(212) 989-2245',
    description: 'The surreal atmosphere of this awe-inspiring restaurant in the Meatpacking district of Manhattan combines the serenity of Asia with the flamboyance of 16th century Paris. The menu features fanciful interpretations of Chinese dishes and delights even the most discriminating palates.',
    operation_hours: "09:00-22:00",
    price_range: '$$$$',
    cuisine_type: 'Chinese',
    city: 'New York',
    dining_style: "Casual Elegant",
    dress_code: "Smart Casual",
    noise_level: "Moderate",
    neighborhood: "Meatpacking District",
    website_url: "http://www.buddakannyc.com/"
)

f1 = URI.open('https://fullplate-aa-dev.s3.amazonaws.com/buddakan/1.jpg')
f2 = URI.open('https://fullplate-aa-dev.s3.amazonaws.com/buddakan/2.jpg')
f3 = URI.open('https://fullplate-aa-dev.s3.amazonaws.com/buddakan/3.jpg')
f4 = URI.open('https://fullplate-aa-dev.s3.amazonaws.com/buddakan/4.jpg')
f5 = URI.open('https://fullplate-aa-dev.s3.amazonaws.com/buddakan/5.jpg')
r2.photos.attach(io: f1, filename: '1.jpg')
r2.photos.attach(io: f2, filename: '2.jpg')
r2.photos.attach(io: f3, filename: '3.jpg')
r2.photos.attach(io: f4, filename: '4.jpg')
r2.photos.attach(io: f5, filename: '5.jpg')


r3 = Restaurant.create(
    name: 'Tao Downtown',
    address: '92 9th Avenue New York, NY 10011',
    phone_number: '(212) 888-2724',
    description: "Designed by Rockwell Group, TAO Downtown offers a distinct sense of arrival and discovery and is the first TAO venue where guests descend into a multi-level space. The subterranean restaurant, located in the heart of Chelsea, is intended to look and feel as if it has been there for decades and only unearthed recently to reveal the artifacts within. Upon arrival, guests immediately encounter a long corridor with a dragon scale patterned screen and Chinese calligraphy murals mounted on weathered brick walls.",
    operation_hours: "17:00-22:00",
    price_range: '$$',
    cuisine_type: 'Fusion / Eclectic',
    city: 'New York',
    dining_style: "Casual Dining",
    dress_code: "Business Casual",
    noise_level: "Moderate",
    neighborhood: "Chelsea",
    website_url: "https://taogroup.com/venues/tao-downtown-new-york/"
)

f6 = URI.open('https://fullplate-aa-dev.s3.amazonaws.com/taodowntown/1.jpg')
f7 = URI.open('https://fullplate-aa-dev.s3.amazonaws.com/taodowntown/2.jpg')
f8 = URI.open('https://fullplate-aa-dev.s3.amazonaws.com/taodowntown/3.jpg')
f9 = URI.open('https://fullplate-aa-dev.s3.amazonaws.com/taodowntown/4.jpg')
f10 = URI.open('https://fullplate-aa-dev.s3.amazonaws.com/taodowntown/5.jpg')
r3.photos.attach(io: f6, filename: '1.jpg')
r3.photos.attach(io: f7, filename: '2.jpg')
r3.photos.attach(io: f8, filename: '3.jpg')
r3.photos.attach(io: f9, filename: '4.jpg')
r3.photos.attach(io: f10, filename: '5.jpg')




r4 = Restaurant.create(
    name: 'La Grande Boucherie',
    address: '145 W 53rd St New York, NY 10019',
    phone_number: '(212) 510-7714',
    description: "With a dazzling, heated outdoor dining gallery featuring 40’ glass ceilings, this one-of-a-kind brasserie is built in the tradition of the Belle Epoque, inspired by elegant and ornamental Art Nouveau style. The menu features French classics and timeless bistro favorites, with a focus on prime cuts and an in-house meat program. In addition to an extensive wine list and classic cocktails, La Grande Boucherie also features an inspired menu of absinthe-driven signature drinks.",
    operation_hours: "11:00-22:00",
    price_range: '$$$$',
    cuisine_type: 'French',
    city: 'New York',
    dining_style: "Casual Dining",
    dress_code: "Smart Casual",
    noise_level: "Moderate",
    neighborhood: "Rockefeller Center Midtown",
    website_url: "https://boucherie.nyc/"
)

f11 = URI.open('https://fullplate-aa-dev.s3.amazonaws.com/lagrandeboucherie/1.jpg')
f12 = URI.open('https://fullplate-aa-dev.s3.amazonaws.com/lagrandeboucherie/2.jpg')
f13 = URI.open('https://fullplate-aa-dev.s3.amazonaws.com/lagrandeboucherie/3.jpg')
f14 = URI.open('https://fullplate-aa-dev.s3.amazonaws.com/lagrandeboucherie/4.jpg')
f15 = URI.open('https://fullplate-aa-dev.s3.amazonaws.com/lagrandeboucherie/5.jpg')
r4.photos.attach(io: f11, filename: '1.jpg')
r4.photos.attach(io: f12, filename: '2.jpg')
r4.photos.attach(io: f13, filename: '3.jpg')
r4.photos.attach(io: f14, filename: '4.jpg')
r4.photos.attach(io: f15, filename: '5.jpg')

r5 = Restaurant.create(
    name: "NOMO Kitchen",
    address: '9 Crosby Street New York, NY 10013',
    phone_number: '(646) 218-6449',
    description: "NoMo Kitchen serves New American Cuisine with an Eclectic Vibe of Global Influences.",
    price_range: '$$$',
    cuisine_type: 'American',
    city: 'New York',
    dining_style: "Casual Elegant",
    dress_code: "Smart Casual",
    noise_level: "Moderate",
    neighborhood: "SoHo",
    website_url: "http://www.nomosoho.com/"
)

f26 = URI.open('https://fullplate-aa-dev.s3.amazonaws.com/nomokitchen/1.jpg')
f27 = URI.open('https://fullplate-aa-dev.s3.amazonaws.com/nomokitchen/2.jpg')
f28 = URI.open('https://fullplate-aa-dev.s3.amazonaws.com/nomokitchen/3.jpg')
f29 = URI.open('https://fullplate-aa-dev.s3.amazonaws.com/nomokitchen/4.jpg')
f30 = URI.open('https://fullplate-aa-dev.s3.amazonaws.com/nomokitchen/5.jpg')
r5.photos.attach(io: f26, filename: '1.jpg')
r5.photos.attach(io: f27, filename: '2.jpg')
r5.photos.attach(io: f28, filename: '3.jpg')
r5.photos.attach(io: f29, filename: '4.jpg')
r5.photos.attach(io: f30, filename: '5.jpg')



r6 = Restaurant.create(
    name: "GAONNURI",
    address: '1250 Broadway 39th Floor New York, NY 10001',
    phone_number: '(212) 971-9045',
    description: "The name GAONNURI represents our placement in what we believe is the center of the world, both physically and figuratively. Located in the heart of New York City, a city that represents the intersection of the finest cuisines and eclectic cultures, GAONNURI seeks to gather people of all backgrounds to share in a traditional Korean dining experience. We hope that the authenticity of the food
    and the enjoyment of the dining experience will invite patrons for generations to come. Thank you for allowing us to invite and serve you in our own culinary center.",
    price_range: '$$$$',
    cuisine_type: 'American',
    city: 'New York',
    dining_style: "Elegant Dining",
    dress_code: "Business Casual",
    noise_level: "Moderate",
    neighborhood: "Midtown West",
    website_url: "http://www.gaonnurinyc.com/"
)

f21 = URI.open('https://fullplate-aa-dev.s3.amazonaws.com/gaonnuri/1.jpg')
f22 = URI.open('https://fullplate-aa-dev.s3.amazonaws.com/gaonnuri/2.jpg')
f23 = URI.open('https://fullplate-aa-dev.s3.amazonaws.com/gaonnuri/3.jpg')
f24 = URI.open('https://fullplate-aa-dev.s3.amazonaws.com/gaonnuri/4.jpg')
f25 = URI.open('https://fullplate-aa-dev.s3.amazonaws.com/gaonnuri/5.jpg')
r6.photos.attach(io: f21, filename: '1.jpg')
r6.photos.attach(io: f22, filename: '2.jpg')
r6.photos.attach(io: f23, filename: '3.jpg')
r6.photos.attach(io: f24, filename: '4.jpg')
r6.photos.attach(io: f25, filename: '5.jpg')



r7 = Restaurant.create(
    name: "Lamia's Fish Market",
    address: '145 W 53rd St New York, NY 10019',
    phone_number: '(212) 777-3650',
    description: "Lamia’s Fish Market, a Fresh New Mediterranean Restaurant and Raw Bar from Lamia Funti, Ready to Lure You to the Heart of the East Village.Restaurateur Lamia Funti will pay homage to her coastal Mediterranean roots with the opening of Lamia’s Fish Market, a seafood-centric eatery dishing out a menu of fresh offerings in a playful yet refined space that immerses diners in the indulgent depths below. Lamia is achieving her long-time dream by creating this new restaurant in a seductive setting, designed with women in mind. Lamia's Fish Market takes the feminine allure of seafood and gives it that Lower East Side edge. Each of the seven different dining experiences achieved a unique identity and feel which is ideal for a romantic dinner for two, birthday parties or large private events.",
    price_range: '$$$',
    cuisine_type: 'Seafood',
    city: 'New York',
    dining_style: "Casual Elegant",
    dress_code: "Smart Casual",
    noise_level: "Moderate",
    neighborhood: "East Village",
    website_url: "http://www.lamiasfishmarket.com/"
)

f16 = URI.open('https://fullplate-aa-dev.s3.amazonaws.com/lamiasfishmarket/1.jpg')
f17 = URI.open('https://fullplate-aa-dev.s3.amazonaws.com/lamiasfishmarket/2.jpg')
f18 = URI.open('https://fullplate-aa-dev.s3.amazonaws.com/lamiasfishmarket/3.jpg')
f19 = URI.open('https://fullplate-aa-dev.s3.amazonaws.com/lamiasfishmarket/4.jpg')
f20 = URI.open('https://fullplate-aa-dev.s3.amazonaws.com/lamiasfishmarket/5.jpg')
r7.photos.attach(io: f16, filename: '1.jpg')
r7.photos.attach(io: f17, filename: '2.jpg')
r7.photos.attach(io: f18, filename: '3.jpg')
r7.photos.attach(io: f19, filename: '4.jpg')
r7.photos.attach(io: f20, filename: '5.jpg')