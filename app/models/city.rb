class City < ApplicationRecord

    has_many :users,
    primary_key: :id,
    foreign_key: :dining_city_id,
    class_name: :User

    has_many :restaurants,
    class_name: :Restaurant
end
