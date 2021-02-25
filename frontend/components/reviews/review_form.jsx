import React from 'react';
import MainNavBar from '../navbar/main_navbar';
import ClickUserUpcomingDropdown from '../navbar/click_user_upcoming_dropdown';
import ClickGreetingDropdown from '../navbar/click_greeting_dropdown';
import { Link } from 'react-router-dom';
import Rating from 'react-rating';
import { openModal } from '../../actions/modal_actions';

class ReviewForm extends React.Component {
    constructor(props) {
        super(props)


        this.state = {
            pm: "",
            nickname: this.props.currentUser.first_name + this.props.currentUser.last_name.split("")[0],
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
        this.handleSubmit = this.handleSubmit.bind(this)
        this.nextAvail3 = this.nextAvail3.bind(this)


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

    nextAvail2() {

        const next = document.getElementById('next-btn-2')

        if (this.state.body && this.state.would_recommend !== null) {
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

    nextAvail3() {

        
        // const next = document.getElementById('next-btn-3')
        
        
        if ((this.state.nickname && this.state.nickname.length < 25)
        && (this.state.pm === "" || (this.state.pm.length > 49 && this.state.pm.length < 2001) )
        ) {
            return(
                <button id="rev-sub" onClick={this.handleSubmit}>Submit your review </button>

            )
        } else {
            return (
                <button>Submit your review </button>

            )
        }
        
    }

    handleNext(num) {

        if (this.state.overall_rating && this.state.food_rating && this.state.service_rating && this.state.ambience_rating && this.state.value_rating && num === 1) {
            this.setState({ page: 2 })
        }

        if (this.state.body && this.state.would_recommend !== null && num === 2) {
            this.setState({ page: 3 })
        }


    }

    handleBack(num) {
        this.setState({ page: num })
    }



    handleChange(type) {
        return (e) => (
            this.setState({ [type]: e.currentTarget.value })
        )
    }

    handleBool(type) {
        const yes = document.getElementById('rec-bool-y');
        const no = document.getElementById('rec-bool-n');

        if (type === 'y') {
            yes.classList.add('fa-dot-circle');
            yes.classList.add('fa-dot-circle2');
            yes.classList.add('fas');
            no.classList.remove('fa-dot-circle');
            no.classList.remove('fa-dot-circle2');
            no.classList.remove('fas');
            yes.classList.remove('fa-circle');
            yes.classList.remove('far');
            no.classList.add('fa-circle');
            no.classList.add('far');
            this.setState({ would_recommend: true });
        }

        if (type === 'n') {
            no.classList.add('fa-dot-circle');
            no.classList.add('fa-dot-circle2');
            no.classList.add('fas');
            yes.classList.remove('fa-dot-circle');
            yes.classList.remove('fa-dot-circle2');
            yes.classList.remove('fas');
            no.classList.remove('fa-circle');
            no.classList.remove('far');
            yes.classList.add('fa-circle');
            yes.classList.add('far');
            this.setState({ would_recommend: false });
        }
    }

    handlePM(type) {
        const yes = document.getElementById('pm-bool-y');
        const no = document.getElementById('pm-bool-n');
        const pm = document.getElementById('pm-text')
        const resp = document.getElementById('pm-resp')


        if (type === 'y') {
            yes.classList.add('fa-dot-circle');
            yes.classList.add('fa-dot-circle2');
            yes.classList.add('fas');
            no.classList.remove('fa-dot-circle');
            no.classList.remove('fa-dot-circle2');
            no.classList.remove('fas');
            yes.classList.remove('fa-circle');
            yes.classList.remove('far');
            no.classList.add('fa-circle');
            no.classList.add('far');
            pm.style.display = "block"
            resp.style.margin = "15px 0 0px 0"
        }

        if (type === 'n') {
            no.classList.add('fa-dot-circle');
            no.classList.add('fa-dot-circle2');
            no.classList.add('fas');
            yes.classList.remove('fa-dot-circle');
            yes.classList.remove('fa-dot-circle2');
            yes.classList.remove('fas');
            no.classList.remove('fa-circle');
            no.classList.remove('far');
            yes.classList.add('fa-circle');
            yes.classList.add('far');
            pm.style.display = "none"
            resp.style.margin = "15px 0 130px 0"
        }
    }

    handleSubmit(e){
        e.preventDefault()

        let form = {
            guest_id: this.reservation().guest_id,
            restaurant_id: this.reservation().restaurant_id,
            nickname: this.props.currentUser.first_name + this.props.currentUser.last_name.split("")[0],
            visited: this.reservation().reservation_datetime.split("T")[0],
            overall_rating: this.state.overall_rating,
            food_rating: this.state.food_rating,
            service_rating: this.state.service_rating,
            ambience_rating: this.state.ambience_rating,
            value_rating: this.state.value_rating,
            rating: (this.state.overall_rating + this.state.food_rating + this.state.service_rating + this.state.ambience_rating + this.state.value_rating) / 5,
            body: this.state.body,
            would_recommend: this.state.would_recommend
        }

        this.props.createReview(form)

    }

    navBar() {
        debugger
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
                      
                            </div>
                            <h3>
                                Write a review
                            </h3>
                            <span className="rate-exp">Help diners decide where to eat. Remember to keep it short, simple and specific.</span>
                            <div className="wr-review">
                                <span onClick={() => this.props.openModal('rev-help')}><i class="far fa-question-circle"></i> Need help?</span>
                                <textarea onChange={this.handleChange('body')} placeholder="Your review must be at least 50 characters"></textarea>
                                <div>
                                    <span>Minimum 50 characters</span>
                                    <span><p>{this.state.body.length}</p> &nbsp; / 2000 characters</span>
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
                                <button onClick={() => this.handleBack(1)}>Back</button>
                                <button id="next-btn-2" onClick={() => this.handleNext(2)}>Next{this.nextAvail2()}</button>
                            </div>
                        </div>
                    </div>
                </div>
            )

        }

        if (this.state.page === 3) {
            return (
                <div>
                    {this.navBar()}
                    <div className="review-hold-div">
                        <div className="review-main-div review-main-div2 ">
                            <div className="page-dots">
                                <div className="l-dot"></div>
                                <div className="l-dot"></div>
                                <div className="d-dot"></div>
                           
                            </div>
                            <h3>
                                What is your reviews nickname?
                            </h3>
                            <span className="rate-exp">Your nickname will be published on OpenTable alongside any reviews you create and publish.</span>
                            <span className="rate-exp">For privacy reasons, don’t use your full name or email address.</span>
                            <div className="rev-nn">
                                <span className="nn-l">Nickname</span>
                                <input onChange={this.handleChange('nickname')} defaultValue={this.state.nickname} type="text" />
                            </div>
                            <span className="nn-char-c"><p>{this.state.nickname.length}</p>&nbsp;<p>/ 24 characters</p></span>
                            <span className="pm-rest">Do you want to send a private note to {this.props.restaurant.name}?</span>
                            <div id="pm-resp" className="pm-resp">
                                <span class="pm-bool" >
                                    <span >
                                        <i id="pm-bool-y" class="far fa-circle" onClick={() => this.handlePM('y')}></i> <span>Yes</span>
                                    </span>
                                    <span >
                                        <i id="pm-bool-n" class="far fa-circle " onClick={() => this.handlePM('n')}></i> <span>No</span>
                                    </span>
                                </span>
                                <span onClick={() => this.props.openModal('private')}><i class="far fa-question-circle"></i> What is a private note?</span>
                            </div>
                            <div id="pm-text" className="pm-body">

                            <textarea onChange={this.handleChange('pm')} placeholder={`e.g. "Our server Gigi was very helpful and attentive all night. Please send her our thanks."`} >

                            </textarea>
                            <span className="pm-leng">
                                <span>Minimum 50 characters</span>
                                <span><p>{this.state.pm.length}</p>&nbsp; / 2000 characters</span>
                            </span>
                            </div>
                            <div className="rev-pg">
                                <button onClick={() => this.handleBack(2)}>Back</button>
                                {this.nextAvail3()}
                            </div>

                        </div>

                    </div>
                </div>

            )
        }
    }
}

export default ReviewForm