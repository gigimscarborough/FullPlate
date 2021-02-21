import { connect } from 'react-redux'
import { deleteReservation } from '../../actions/reservation_actions'
import { openModal } from '../../actions/modal_actions'
import DeleteReservation from './delete_reservation'
import { fetchRestaurants } from '../../actions/restaurant_actions'
import { logout } from '../../actions/session_actions'
import { fetchUser } from '../../actions/session_actions'
import {sendForm} from '../../actions/search_actions'


const mSTP = (state, ownProps) => {

    return {
        restaurants: Object.values(state.entities.restaurants),
        currentUser: state.entities.users[state.session.id],
        reservations: state.entities.users[state.session.id].reservations,
        // reservation: state.entities.users[state.session.id].reservations[ownProps.match.params.reservationId],

    }
}

const mDTP = (dispatch) => ({
    deleteReservation: (reservationId) => dispatch(deleteReservation(reservationId)),
    fetchRestaurants: (restaurantId) => dispatch(fetchRestaurants(restaurantId)),
    openModal: modal => dispatch(openModal(modal)),
    logout: () => dispatch(logout()),
    fetchUser: userId => dispatch(fetchUser(userId)),
    sendForm: search => dispatch(sendForm(search))

})


export default connect(mSTP, mDTP)(DeleteReservation)