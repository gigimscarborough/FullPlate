@reviews.each do |review|
  json.set! review.id do
    json.extract! review, :id, :restaurant_id, :guest_id, :body, :visited, :food_rating, :service_rating, :ambience_rating, :value_rating, :overall_rating, :rating, :would_recommend  
    end
end