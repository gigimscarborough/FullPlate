import {connect} from 'react-redux'
import SearchPage from './search_page'
import { searchRestaurants } from '../../actions/restaurant_actions'
import { sendForm, clearForm } from '../../actions/search_actions'


const mSTP = (state) => {

    return { 
    restaurants: Object.values(state.entities.restaurants),
    search: state.ui.search,
    currentUser: state.entities.users[state.session.id]
}}


const mDTP = (dispatch) => ({
    searchRestaurants: (keyword) => dispatch(searchRestaurants(keyword)),
    sendForm: (form) => dispatch(sendForm(form)),

})

export default connect(mSTP, mDTP)(SearchPage)