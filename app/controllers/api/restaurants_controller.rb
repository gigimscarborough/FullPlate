class Api::RestaurantsController < ApplicationController

def index
    @restaurants = Restaurant.all

    render 'api/restaurants/index'
end

def show
    @restaurant = Restaurant.find(params[:id])

    render 'api/restaurants/show'
end

# def search

#     search = params[:search][:search]
  

#     @restaurants = Restaurant.where('name ILIKE :search OR cuisine_type ILIKE :search OR city ILIKE :search', {search: "%#{search}%"})

#     render 'api/restaurants/index'
# end

def search

    search = params[:search]
    
    
    @restaurants = Restaurant.where('neighborhood ILIKE :search OR name ILIKE :search OR cuisine_type ILIKE :search OR city ILIKE :search', {search: "%#{search}%"})

    render 'api/restaurants/index'
end

end