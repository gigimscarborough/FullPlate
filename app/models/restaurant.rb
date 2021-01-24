class Restaurant < ApplicationRecord
    validates :name, :address, :city, :phone_number, :description, :operation_hours, :price_range, :cuisine_type, presence: true

    has_many_attached :photos

    has_many :favorites,
    class_name: :Favorite

end
