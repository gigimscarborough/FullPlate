class FavoritesController < ApplicationController


    def create

        @favorite = Favorite.new(favorite_params)

            

        if @favorite.save
            
        else
            render json: ['Favorite unable to be created'], status: 404
        end 
    end

    def destroy
       @favorite = current_user.favorites.find_by(id: params[:id])

      if @favorite && @favorite.destroy 
        end
    end


    private 
    def favorite_params
        params.require(:favorites).permit(:user_id, :restaurant_id)
    end
end


