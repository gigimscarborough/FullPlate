import { connect } from 'react-redux';
import { createReservation, fetchReservations } from '../../actions/reservation_actions';
import { openModal } from '../../actions/modal_actions';
import ReservationForm from './reservation_form';
import { logout } from '../../actions/session_actions';
import { fetchRestaurant } from '../../actions/restaurant_actions';
import { fetchUser } from '../../actions/session_actions';



const mSTP = (state, ownProps) => {

    return {
        restaurant: state.entities.restaurants[ownProps.match.params.restaurantId],
        currentUser: state.entities.users[state.session.id],
        search: state.ui.search,

    };
}

const mDTP = (dispatch) => ({
    openModal: (modal) => dispatch(openModal(modal)),
    createReservation: (reservation) => dispatch(createReservation(reservation)),
    logout: () => dispatch(logout()),
    fetchRestaurant: (restaurantId) => dispatch(fetchRestaurant(restaurantId)),
    fetchRestaurants: () => dispatch(fetchRestaurants()),
    fetchReservations: () => dispatch(fetchReservations()),
    fetchUser: (userId) => dispatch(fetchUser(userId)),



})


export default connect(mSTP, mDTP)(ReservationForm);