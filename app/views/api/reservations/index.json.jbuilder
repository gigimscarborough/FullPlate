@reservations.each do |reservation|
  json.set! reservation.id do
    json.extract! reservation, :id :guest_id, :restaurant_id, :guest_count, :reservation_datetime
  end
end