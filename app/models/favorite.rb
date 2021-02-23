class Favorite < ApplicationRecord

    validates :user_id, :restaurant_id, presence: true
    validates :restaurant_id, uniqueness: { scope: :user_id }

    belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

    belongs_to :restaurant,
    foreign_key: :restaurant_id,
    class_name: :Restaurant
end
