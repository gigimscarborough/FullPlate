import {connect} from 'react-redux'
import RestaurantDisplay from './restaurant_display'


const mSTP = (state) => {

    return { currentUser: state.entities.users[state.session.id] }
}

const mDTP = (dispatch) => ({

})

export default connect(mSTP, mDTP)(RestaurantDisplay)