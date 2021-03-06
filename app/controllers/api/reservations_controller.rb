class Api::ReservationsController < ApplicationController
    def index
        @reservations = Reservation.all

        render 'api/reservations/index'
    end

    def show
        @reservation = Reservation.find(params[:id])

        render 'api/reservations/show'

    end
    
    def create

     
        @reservation = Reservation.new(reservation_params)
            

        if @reservation.save
            render 'api/reservations/show'
        else
            render json: ['Reservation unable to be created'], status: 404
        end 
    end

    def update
        @reservation = Reservation.find(params[:id])

        if @reservation && @reservation.update(reservation_params)
            render 'api/reservations/show'
        else
            render json: ['Reservation did not update'], status: 404
        end 

    end

    def destroy
       @reservation = Reservation.find_by(id: params[:id])

      if @reservation && @reservation.destroy 
        end
    end


    private 
    def reservation_params
        params.require(:reservation).permit(:guest_id, :restaurant_id, :guest_count, :reservation_datetime, :email, :first_name, :last_name, :phone_number, :special_request, :occasion)
    end
end
