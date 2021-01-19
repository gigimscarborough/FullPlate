class Restaurant < ApplicationRecord
    validates presence: :name, :city_id, :address, :phone_number, :description, :opening_time, :closing_time, :price_range, :cuisine_type

    has_many_attached: :images
end
