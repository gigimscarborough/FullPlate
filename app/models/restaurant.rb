class Restaurant < ApplicationRecord
    validates :name, :address, :phone_number, :description, :opening_time, :closing_time, :price_range, :cuisine_type, presence: true

    has_many_attached :images
end