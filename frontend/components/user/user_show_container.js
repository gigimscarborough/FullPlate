import { connect } from 'react-redux'
import UserShow from './user_show'
import { logout } from '../../actions/session_actions'
import {fetchReservations, deleteReservation} from '../../actions/reservation_actions'
import { fetchRestaurant, fetchRestaurants } from '../../actions/restaurant_actions'
import { createFavorite, deleteFavorite } from '../../actions/favorite_actions'
import { fetchUser } from '../../actions/session_actions'



const mSTP = (state, ownProps) => {

    return { currentUser: state.entities.users[state.session.id],
            reservations: Object.values(state.entities.reservations),
            restaurants: state.entities.restaurants
    }
}

const mDTP = (dispatch) => ({
    logout: () => dispatch(logout()),
    fetchReservations: () => dispatch(fetchReservations()),
    fetchRestaurants: () => dispatch(fetchRestaurants()),
    fetchRestaurant: (restaurantId) => dispatch(fetchRestaurant(restaurantId)),
    deleteReservation: (reservationId) => dispatch(deleteReservation(reservationId)),
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    createFavorite: favorite => dispatch(createFavorite(favorite)),
    deleteFavorite: favoriteId => dispatch(deleteFavorite(favoriteId))
    

})



export default connect(mSTP, mDTP)(UserShow)