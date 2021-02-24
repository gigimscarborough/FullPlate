import React from 'react';
import MainNavBar from '../navbar/main_navbar';
import ClickUserUpcomingDropdown from '../navbar/click_user_upcoming_dropdown';
import ClickGreetingDropdown from '../navbar/click_greeting_dropdown';
import { Link } from 'react-router-dom';
import Rating from 'react-rating';

class ReviewForm extends React.Component {
    constructor(props) {
        super(props)

        this.page = 1

        this.state = {
            overall_rating: null,
        }


    }

    componentDidMount() {

        this.props.fetchRestaurants();

    }

    reservation() {
        const res = this.props.reservations.filter(reserve => reserve.id === parseInt(this.props.match.params.reservationId))
        debugger

        return res[0]
    }

    navBar() {
        if (this.props.currentUser) {
            return (
                <div>
                    <div>
                        <MainNavBar />
                        <div className="logo-nav">
                            <div className='logo-div'>
                                <Link className="logo" to="/"><img src={window.logo} /></Link>
                                <div className="copy-r">&copy;</div>
                                <div className="logo-border2"></div>
                            </div>
                            <ul className="user-link-list">
                                <ClickUserUpcomingDropdown />
                                <ClickGreetingDropdown logout={this.props.logout} currentUser={this.props.currentUser} />
                                <li onClick={() => this.props.openModal('search')} className="search-icon rsearch"><img src={window.search_icon} /></li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                    <MainNavBar />
                    <div className="logo-nav">
                        <div className='logo-div'>
                            <Link className="logo" to="/"><img src={window.logo} /></Link>
                            <div className="copy-r">&copy;</div>
                            <div className="logo-border2"></div>
                        </div>
                        <div className="not-logged-links">
                            <button className="sign-up-btn" onClick={() => this.props.openModal('signup')}> Sign up</button>
                            <button className="log-in-btn" onClick={() => this.props.openModal('login')}> Sign in </button>
                            <Link className="search-icon" to="/"><img src={window.search_icon} /></Link>
                        </div>
                    </div>
                </div>
            )

        }
    }



    render() {
        debugger

        let resDate = new Date(this.reservation().reservation_datetime)
        resDate = new Date(resDate.getTime() + resDate.getTimezoneOffset() * 60000)

        if (typeof this.props.restaurant === 'undefined') {
            return null
        }

        if (this.page === 1) {

            return (

                <div>
                    {this.navBar()}
                    <div className="review-hold-div">
                        <div className="review-main-div">
                            <div className="page-dots">
                                <div className="d-dot"></div>
                                <div className="l-dot"></div>
                                <div className="l-dot"></div>
                                <div className="l-dot"></div>
                                <div className="l-dot"></div>
                            </div>
                            <h3>
                                {this.props.currentUser.first_name}, how was your experience at {this.props.restaurant.name}
                            </h3>

                            <span className="rate-exp">Rate your dining experience (required)</span>
                            <span className="rate-exp">Reservation made on {resDate.toLocaleDateString()}</span>
                            <div className="rate-sel-div">
                                <div className="rate-overall">
                                    <span>Overall</span> 
                                    <Rating
                                        emptySymbol="fa fa-star-o fa-2x"
                                        fullSymbol="fa fa-star fa-2x"
                                    />

                                </div>

                            </div>
                        </div>
                    </div>

                </div>



            )
        }
    }
}

export default ReviewForm