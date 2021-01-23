@restaurants.each do |restaurant|
  json.set! restaurant.id do
    json.extract! restaurant, :id, :name, :address, :phone_number, 
    :description, :opening_time, :closing_time, :price_range, 
    :cuisine_type, :website_url, :city
  end
end

