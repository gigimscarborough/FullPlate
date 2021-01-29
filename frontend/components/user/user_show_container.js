import { connect } from 'react-redux'
import UserShow from './user_show'
import { logout } from '../../actions/session_actions'
import {fetchReservations, deleteReservation} from '../../actions/reservation_actions'
import { fetchRestaurant, fetchRestaurants } from '../../actions/restaurant_actions'


const mSTP = (state, ownProps) => {

    return { currentUser: state.entities.users[state.session.id],
            reservations: Object.values(state.entities.reservations),
    }
}

const mDTP = (dispatch) => ({
    logout: () => dispatch(logout()),
    fetchReservations: () => dispatch(fetchReservations()),
    fetchRestaurants: () => dispatch(fetchRestaurants()),
    fetchRestaurant: (restaurantId) => dispatch(fetchRestaurant(restaurantId)),
    deleteReservation: (reservationId) => dispatch(deleteReservation(reservationId))
})



export default connect(mSTP, mDTP)(UserShow)