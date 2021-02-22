class Review < ApplicationRecord
    validates :restaurant_id, :guest_id, :body, :visited, :food_rating, :service_rating, :ambience_rating, :value_rating, :overall_rating, :rating, :would_recommend, presence:true
    
    
    belongs_to :user,
    foreign_key: :guest_id,
    class_name: :User
    
    belongs_to :restaurant,
    foreign_key: :restaurant_id,
    class_name: :Restaurant
    
end