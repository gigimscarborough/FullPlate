import {connect} from 'react-redux'
import SearchPage from './search_page'
import { searchRestaurants } from '../../actions/restaurant_actions'
import { sendForm, clearForm } from '../../actions/search_actions'
import {fetchReviews} from '../../actions/review_actions'


const mSTP = (state) => {

    return { 
    restaurants: Object.values(state.entities.restaurants),
    search: state.ui.search,
    currentUser: state.entities.users[state.session.id],
    reviews: Object.values(state.entities.reviews)
}}


const mDTP = (dispatch) => ({
    searchRestaurants: (keyword) => dispatch(searchRestaurants(keyword)),
    sendForm: (form) => dispatch(sendForm(form)),
    fetchReviews: () => dispatch(fetchReviews()),

})

export default connect(mSTP, mDTP)(SearchPage)