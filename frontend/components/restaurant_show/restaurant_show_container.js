import {connect} from 'react-redux'
import { fetchRestaurant } from '../../actions/restaurant_actions'
import RestaurantShow from './restaurant_show'
import {logout, fetchUser} from '../../actions/session_actions'
import {openModal} from '../../actions/modal_actions'
import {createFavorite, deleteFavorite} from '../../actions/favorite_actions'


const mSTP = (state, ownProps) => {

    return{
    restaurant: state.entities.restaurants[ownProps.match.params.restaurantId],
    currentUser: state.entities.users[state.session.id],
    search: state.ui.search
}}


const mDTP = (dispatch) => ({
    fetchRestaurant: (restaurantId) => dispatch(fetchRestaurant(restaurantId)),
    logout: () => dispatch(logout()),
    openModal: (modal) => dispatch(openModal(modal)),
    createFavorite: favorite => dispatch(createFavorite(favorite)),
    deleteFavorite: favoriteId => dispatch(deleteFavorite(favoriteId)),
    fetchUser: userId => dispatch(fetchUser(userId))
})

export default connect(mSTP, mDTP)(RestaurantShow) 