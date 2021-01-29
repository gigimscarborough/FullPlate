class Restaurant < ApplicationRecord
    validates :name, :address, :city, :phone_number, :description, :operation_hours, :price_range, :cuisine_type, :neighborhood, :noise_level, :dining_style, :dress_code, presence: true

    has_many_attached :photos

    has_many :favorites,
    class_name: :Favorite

    has_many :reservations,
    foreign_key: :restaurant_id,
    class_name: :Reservation



end
