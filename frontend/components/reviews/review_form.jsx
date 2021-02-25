import React from 'react';
import MainNavBar from '../navbar/main_navbar';
import ClickUserUpcomingDropdown from '../navbar/click_user_upcoming_dropdown';
import ClickGreetingDropdown from '../navbar/click_greeting_dropdown';
import { Link } from 'react-router-dom';
import Rating from 'react-rating';

class ReviewForm extends React.Component {
    constructor(props) {
        super(props)


        this.state = {
            would_recommend: null,
            overall_rating: null,
            food_rating: null,
            service_rating: null,
            ambience_rating: null,
            value_rating: null,
            body: "",
            visited: this.reservation().reservation_datetime.split("T")[0],
            restaurant_id: this.reservation().restaurant_id,
            guest_id: this.reservation().guest_id,
            page: 2
        }
        this.handleRating = this.handleRating.bind(this)
        this.handleNext = this.handleNext.bind(this)


    }

    componentDidMount() {

        this.props.fetchRestaurants();

    }

    reservation() {
        const res = this.props.reservations.filter(reserve => reserve.id === parseInt(this.props.match.params.reservationId));


        return res[0];
    }

    handleRating(type) {
        return (rating) => {
            this.setState({ [type]: rating });
        }
    }

    ratingDes(type) {

        // if (this.state[type] === 5){
        //     return "Outstanding"
        // } 
        return this.state[type] === 5 ? "Outstanding" : this.state[type] === 4 ? "Very Good" : this.state[type] === 3 ? "Good" : this.state[type] === 3 ? "Fair" : this.state[type] === 3 ? "Poor" : " "

    }

    nextAvail() {
        const next = document.getElementById('next-btn-1')

        if (this.state.overall_rating && this.state.food_rating && this.state.service_rating && this.state.ambience_rating && this.state.value_rating) {
            next.style.cursor = "pointer";
            next.style.backgroundColor = "#B22222";
            // next.classList.add('next-btn-1-hov')
            next.addEventListener("mouseenter", (e) => {
                next.style.backgroundColor = "#8d1b1b";
                next.style.transition = "0.4s";
            })
            next.addEventListener("mouseleave", (e) => {
                next.style.backgroundColor = "#B22222";
                next.style.transition = "0.4s";
            })
        }
    }

    handleNext(num) {
        
        if (this.state.overall_rating && this.state.food_rating && this.state.service_rating && this.state.ambience_rating && this.state.value_rating && num === 1) {
            this.state.page = 2
        }

        debugger

    }

    handleChange(type) {
        return (e) => (
            this.setState({ [type]: e.currentTarget.value })
        )
    }

    handleBool(type){
        const yes = document.getElementById('rec-bool-y');
        const no = document.getElementById('rec-bool-n');

        if(type === 'y'){
            yes.classList.add('fa-dot-circle');
            yes.classList.add('fas');
            no.classList.remove('fa-dot-circle');
            no.classList.remove('fas');
            yes.classList.remove('fa-circle');
            yes.classList.remove('far');
            no.classList.add('fa-circle');
            no.classList.add('far');
            this.setState({ [type]: e.currentTarget.value });
        }
    
        if (type === 'n') {
            no.classList.add('fa-dot-circle');
            no.classList.add('fas');
            yes.classList.remove('fa-dot-circle');
            yes.classList.remove('fas');
            no.classList.remove('fa-circle');
            no.classList.remove('far');
            yes.classList.add('fa-circle');
            yes.classList.add('far');
            this.setState({ [type]: e.currentTarget.value });
        }
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


        let resDate = new Date(this.reservation().reservation_datetime)
        resDate = new Date(resDate.getTime() + resDate.getTimezoneOffset() * 60000)

        if (typeof this.props.restaurant === 'undefined') {
            return null
        }

        if (this.state.page === 1) {

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
                                <div className="rate-type">
                                    <span className="rate-cat">Overall</span>
                                    <span className="rate-cat">Food</span>
                                    <span className="rate-cat">Service</span>
                                    <span className="rate-cat">Ambience</span>
                                    <span className="rate-cat">Value</span>
                                </div>
                                <div className="rate-str">
                                    <div className="rate-pick">
                                        <Rating

                                            emptySymbol="fa fa-star fa-2x un-stars"
                                            initialRating={this.state.overall_rating}
                                            onChange={this.handleRating('overall_rating')}
                                            fullSymbol="fa fa-star fa-2x fill-stars"
                                        />
                                    </div>
                                    <div className="rate-pick">
                                        <Rating

                                            emptySymbol="fa fa-star fa-2x un-stars"
                                            initialRating={this.state.food_rating}
                                            onChange={this.handleRating('food_rating')}
                                            fullSymbol="fa fa-star fa-2x fill-stars"
                                        />
                                    </div>
                                    <div className="rate-pick">
                                        <Rating

                                            emptySymbol="fa fa-star fa-2x un-stars"
                                            initialRating={this.state.service_rating}
                                            onChange={this.handleRating('service_rating')}
                                            fullSymbol="fa fa-star fa-2x fill-stars"
                                        />
                                    </div>
                                    <div className="rate-pick">
                                        <Rating
                                            emptySymbol="fa fa-star fa-2x un-stars"
                                            initialRating={this.state.ambience_rating}
                                            onChange={this.handleRating('ambience_rating')}
                                            fullSymbol="fa fa-star fa-2x fill-stars"
                                        />
                                    </div>
                                    <div className="rate-pick">
                                        <Rating

                                            emptySymbol="fa fa-star fa-2x un-stars"
                                            initialRating={this.state.value_rating}
                                            onChange={this.handleRating('value_rating')}
                                            fullSymbol="fa fa-star fa-2x fill-stars"
                                        />
                                    </div>
                                </div>
                                <div className="rate-desc">
                                    <span className="rate-val">{this.ratingDes('overall_rating')}</span>
                                    <span className="rate-val">{this.ratingDes('food_rating')}</span>
                                    <span className="rate-val">{this.ratingDes('service_rating')}</span>
                                    <span className="rate-val">{this.ratingDes('ambience_rating')}</span>
                                    <span className="rate-val">{this.ratingDes('value_rating')}</span>
                                </div>

                            </div>
                            <button id="next-btn-1" className="" onClick={() => this.handleNext(1)}>Next{this.nextAvail()}</button>
                        </div>
                    </div>

                </div>



            )
        }

        if (this.state.page === 2) {
            return (
                <div>
                    {this.navBar()}
                    <div className="review-hold-div">
                        <div className="review-main-div">
                            <div className="page-dots">
                                <div className="l-dot"></div>
                                <div className="d-dot"></div>
                                <div className="l-dot"></div>
                                <div className="l-dot"></div>
                                <div className="l-dot"></div>
                            </div>
                            <h3>
                                Write a review
                            </h3>
                            <span className="rate-exp">Help diners decide where to eat. Remember to keep it short, simple and specific.</span>
                            <div className="wr-review">
                                <span><i class="far fa-question-circle"></i> Need help?</span>
                                <textarea onChange={this.handleChange('body')} placeholder="Your review must be at least 50 characters"></textarea>
                                <div>
                                    <span>Minimum 50 characters</span>
                                    <span><p>{this.state.body.split("").length}</p> &nbsp; / 2000 characters</span>
                                </div>
                            </div>
                            <div className="rec-bool">
                                <span>Would you recommend {this.props.restaurant.name} to a friend?</span>
                                <span>
                                    <span class="r-bool" >
                                        <i id="rec-bool-y" class="far fa-circle" onClick={() => this.handleBool('y')}></i> <span>Yes</span>
                                    </span>
                                    <span>
                                        <i id="rec-bool-n" class="far fa-circle " onClick={() => this.handleBool('n')}></i> <span>No</span>
                                    </span>
                                </span>
                            </div>
                            <div className="rev-pg">
                                <button>Back</button>
                                <button>Next</button>
                            </div>
                        </div>
                    </div>
                </div>
            )

        }
    }
}

export default ReviewForm