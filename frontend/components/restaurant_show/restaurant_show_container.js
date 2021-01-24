import {connect} from 'react-redux'
import { fetchRestaurant } from '../../util/restaurant_util'
import RestaurantShow from './restaurant_show'
import {logout} from '../../actions/session_actions'
import {openModal} from '../../actions/modal_actions'


const mSTP = (state, ownProps) => ({
    restaurant: state.entities.restaurants[ownProps.match.params.id],
    currentUser: state.entities.users[state.session.id]
})

const mDTP = (state) => ({
    fetchRestaurant: (restaurantId) => dispatch(fetchRestaurant(restaurantId)),
    logout: () => dispatch(logout()),
    openModal: (modal) => dispatch(openModal(modal))
})

export default connect(mSTP, mDTP)(RestaurantShow) 