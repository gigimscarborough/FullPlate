
json.extract! user, :email, :id, :first_name, :last_name, :dining_city, :reservations, :reserved_restaurants, :created_at, :favorites, :reviews
# json.reviews do
#     json.array! user.reviews do |review|
#         review.id
#     end
# end
# json.favorites do
#     json.array! user.favorites do |favorite|
#         favorite.id
#     end
# end
