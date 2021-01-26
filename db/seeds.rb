# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

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

f1 = open('../restaurant_photos/buddakan/1.jpg')
f2 = open('../restaurant_photos/buddakan/2.jpg')
f3 = open('../restaurant_photos/buddakan/3.jpg')
f4 = open('../restaurant_photos/buddakan/4.jpg')
f5 = open('../restaurant_photos/buddakan/5.jpg')
r2.photos.attach(io: f1, filename: '1.jpg')
r2.photos.attach(io: f2, filename: '2.jpg')
r2.photos.attach(io: f3, filename: '3.jpg')
r2.photos.attach(io: f4, filename: '4.jpg')
r2.photos.attach(io: f5, filename: '5.jpg')
