import {connect} from 'react-redux'
import {createReservation} from '../../actions/reservation_actions'
import {openModal} from '../../actions/modal_actions'
import ReservationForm from './reservation_form'
import {logout} from '../../actions/session_actions'
import {fetchRestaurant} from '../../actions/restaurant_actions'


const mSTP = (state, ownProps) => {
    return {restaurant: state.entities.restaurants[ownProps.match.params.restaurantId],
        currentUser: state.entities.users[state.session.id],
        search: state.ui.search
}
}

const mDTP = (dispatch) => ({
    openModal: (modal) => dispatch(openModal(modal)),
    createReservation: (reservation) => dispatch(createReservation(reservation)),
    logout: () => dispatch(logout()),
    fetchRestaurant: (restaurantId) => dispatch(fetchRestaurant(restaurantId))
})


export default connect(mSTP, mDTP)(ReservationForm)