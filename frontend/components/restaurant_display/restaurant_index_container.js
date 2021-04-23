import { connect } from 'react-redux';
import RestaurantIndex from './restaurant_index';
import {fetchRestaurants} from '../../actions/restaurant_actions';
import {fetchReviews} from '../../actions/review_actions';


const mSTP = (state) => {
    
    return  {
     restaurants: Object.values(state.entities.restaurants),
     reviews: Object.values(state.entities.reviews)
    };
}

const mDTP = (dispatch) => ({
    fetchRestaurants: () => dispatch(fetchRestaurants()),
    fetchReviews: () => dispatch(fetchReviews())

})

export default connect(mSTP, mDTP)(RestaurantIndex);