import { connect } from 'react-redux'
import { updateReservation } from '../../actions/reservation_actions'
import { openModal } from '../../actions/modal_actions'
import UpdateReservation from './update_reservation'
import { fetchRestaurants } from '../../actions/restaurant_actions'
import { logout, fetchUser } from '../../actions/session_actions'



const mSTP = (state, ownProps) => {

    return {
        restaurants: Object.values(state.entities.restaurants),
        currentUser: state.entities.users[state.session.id],
        reservations: state.entities.users[state.session.id].reservations,
        // reservation: state.entities.users[state.session.id].reservations[ownProps.match.params.reservationId],

    }
}

const mDTP = (dispatch) => ({
    updateReservation: (reservation) => dispatch(updateReservation(reservation)),
    fetchRestaurants: (restaurantId) => dispatch(fetchRestaurants(restaurantId)),
    openModal: modal => dispatch(openModal(modal)),
    logout: () => dispatch(logout()),
    fetchUser: userId => dispatch(fetchUser(userId))

})


export default connect(mSTP, mDTP)(UpdateReservation)