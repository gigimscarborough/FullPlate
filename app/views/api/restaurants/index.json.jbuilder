@restaurants.each do |restaurant|
  json.set! restaurant.id do
    json.extract! restaurant, :id, :name, :address, :phone_number, 
    :description, :operation_hours, :price_range, 
    :cuisine_type, :website_url, :city, :neighborhood, :dining_style, :dress_code, :noise_level
    json.photoUrls restaurant.photos.map { |file| url_for(file) }
  end
end

