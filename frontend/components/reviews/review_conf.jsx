import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import MainNavBar from '../navbar/main_navbar';
import ClickUserUpcomingDropdown from '../navbar/click_user_upcoming_dropdown';
import ClickGreetingDropdown from '../navbar/click_greeting_dropdown';
import {fetchReviews} from '../../actions/review_actions';
import AlsoRests from './also_rests';

class ReviewConf extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchRestaurants();
    }

    navBar() {
        return (
            <div>
                <MainNavBar />
                <div className="logo-nav">
                    <div className='logo-div'>
                        <Link className="logo" to="/"><img src={window.logo} /></Link>
                        <div className="copy-r">&copy;</div>
                    </div>
                    <ul className="user-link-list">
                        <ClickUserUpcomingDropdown />
                        <ClickGreetingDropdown logout={this.props.logout} currentUser={this.props.currentUser} />
                    </ul>
                </div>
            </div>
        );
    }

    render() {
 
        return (
            <div>
                {this.navBar()}
                <div className="rev-conf-hold">
                    <div className="rev-conf-main">
                        <div className="rev-conf-thanks">
                            <img src={window.raterev} />
                            <div>
                                <h2>
                                    Thanks for your review!
                                </h2>
                                <span>
                                    Sharing your feedback helps other diners.
                                </span>
                            </div>
                        </div>
                        <div className="rev-conf-rests">
                            <h2>
                                Restaurants you may also like
                            </h2>
                            <AlsoRests reviews={this.props.reviews} fetchReviews={this.props.fetchReviews} restaurants={this.props.restaurants} restaurantId={this.props.match.params.restaurantId}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}



const mSTP = (state, ownProps) => {

    return {
        restaurants: state.entities.restaurants,
        currentUser: state.entities.users[state.session.id],
        reviews: Object.values(state.entities.reviews)

    };
}


const mDTP = (dispatch) => ({
    fetchReviews: () => dispatch(fetchReviews()),
    fetchRestaurants: () => dispatch(fetchRestaurants()),
    logout: () => dispatch(logout()),
    openModal: (modal) => dispatch(openModal(modal)),
})

export default connect(mSTP, mDTP)(ReviewConf);

