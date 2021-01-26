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