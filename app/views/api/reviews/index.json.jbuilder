@reviews.each do |review|
  json.set! review.id do
    json.extract! review, :id, :restaurant_id, :guest_id, :reservation_id, :nickname, :body, :visited, :food_rating, :service_rating, :ambience_rating, :value_rating, :overall_rating, :rating, :would_recommend, :created_at 
    end
end