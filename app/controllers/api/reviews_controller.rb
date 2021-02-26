class Api::ReviewsController < ApplicationController

    def index
        @reviews = Review.all

        render 'api/reviews/index'
    end

    def show
        @review = Review.find(params[:id])

        render 'api/reviews/show'

    end
    
    def create

        @review = Review.new(review_params)
        
            

        if @review.save
            render 'api/reviews/show'
        else
            render json: ['Review unable to be created'], status: 404
        end 
    end

    def update
        @review = Review.find(params[:id])

        if @review && @review.update(review_params)
            render 'api/reviews/show'
        else
            render json: ['Review did not update'], status: 404
        end 

    end

    def destroy
       @review = Review.find_by(id: params[:id])

      if @review && @review.destroy 
        end
    end


    private 
    def review_params
        params.require(:review).permit(:restaurant_id, :guest_id, :reservation_id, :body, :visited, :food_rating, :service_rating, :ambience_rating, :value_rating, :overall_rating, :rating, :would_recommend, :nickname)
    end
end
