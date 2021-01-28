import {connect} from 'react-redux'
import { fetchRestaurant } from '../../actions/restaurant_actions'
import RestaurantShow from './restaurant_show'
import {logout} from '../../actions/session_actions'
import {openModal} from '../../actions/modal_actions'


const mSTP = (state, ownProps) => {
    return{
    restaurant: state.entities.restaurants[ownProps.match.params.restaurantId],
    currentUser: state.entities.users[state.session.id],
    search: state.ui.search
}}


const mDTP = (dispatch) => ({
    fetchRestaurant: (restaurantId) => dispatch(fetchRestaurant(restaurantId)),
    logout: () => dispatch(logout()),
    openModal: (modal) => dispatch(openModal(modal))
})

export default connect(mSTP, mDTP)(RestaurantShow) 