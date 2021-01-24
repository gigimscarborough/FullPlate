import { connect } from 'react-redux'
import RestaurantIndex from './restaurant_index'
import {fetchRestaurants} from '../../actions/restaurant_actions'


const mSTP = (state) => {
    
    return  {
     restaurants: Object.values(state.entities.restaurants)

    }
}

const mDTP = (dispatch) => ({
    fetchRestaurants: () => dispatch(fetchRestaurants())

})

export default connect(mSTP, mDTP)(RestaurantIndex)