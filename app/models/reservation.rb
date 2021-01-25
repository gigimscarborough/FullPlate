class Reservation < ApplicationRecord

    validates :guest_id, :restaurant_id, :guest_count, presence: true



    belongs_to :user,
    foreign_key: :guest_id,
    class_name: :User

    belongs_to :restaurant,
    foreign_key: :restaurant_id,
    class_name: :Restaurant



end
