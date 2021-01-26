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
    name: 'Hunan Counter',
    address: '96 3rd Ave',
    phone_number: '(718) 567-8765',
    description: 'A wide selection of spicy dishes sure to make you sweat',
    operation_hours: "09:00-22:00",
    price_range: '$$',
    cuisine_type: 'Chinese',
    city: 'New York',
    dining_style: "Casual Dining",
    dress_code: "Casual Dress",
    noise_level: "Moderate",
    neighborhood: "Flushing"
)

f1 = open('../restaurant_photos/1.jpg')
r2.photos.attach(io: f1, filename: '1.jpg')
