import { updateReview, fetchReviews } from '../../actions/review_actions';
import { logout, fetchUser } from '../../actions/session_actions';
import { fetchRestaurants } from '../../actions/restaurant_actions';
import EditReviewForm from './edit_review_form';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';

const mSTP = (state, ownProps) => {

    return {
        restaurant: state.entities.restaurants[ownProps.match.params.restaurantId],
        currentUser: state.entities.users[state.session.id],
        reservations: state.entities.users[state.session.id].reservations,
        reviews: state.entities.users[state.session.id].reviews,
        formType: 'update'
    };
}


const mDTP = (dispatch) => ({
    // fetchRestaurant: (restaurantId) => dispatch(fetchRestaurant(restaurantId)),
    fetchRestaurants: () => dispatch(fetchRestaurants()),
    fetchReviews: () => dispatch(fetchReviews()),
    logout: () => dispatch(logout()),
    openModal: (modal) => dispatch(openModal(modal)),
    fetchUser: userId => dispatch(fetchUser(userId)),
    action: review => dispatch(updateReview(review))
})

export default connect(mSTP, mDTP)(EditReviewForm);