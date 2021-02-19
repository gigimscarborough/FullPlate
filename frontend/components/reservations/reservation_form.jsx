import React from 'react'
import MainNavBar from '../navbar/main_navbar'
import ClickUserUpcomingDropdown from '../navbar/click_greeting_dropdown'
import ClickGreetingDropdown from '../navbar/click_greeting_dropdown'
import { Link } from 'react-router-dom'
import { openModal } from '../../actions/modal_actions'
import { timers } from 'jquery'


class ReservationForm extends React.Component {
    constructor(props) {
        super(props)
        this.time = 300
        this.setTimer = this.setTimer.bind(this)
        this.thisTime = setInterval(this.setTimer, 1000)
        this.handleSubmit = this.handleSubmit.bind(this)

        this.dateTime = this.props.search.date + " " + this.props.search.time
        if (this.time === 0){
            clearInterval(this.thisTime)
        }

        this.state = {
            restaurant_id: this.props.restaurant.id,
            guest_id: this.props.currentUser.id,
            guest_count: this.props.search.guest_count,
            reservation_datetime: this.dateTime,
            email: this.props.currentUser.email,
            first_name: this.props.currentUser.first_name,
            last_name: this.props.currentUser.last_name,
            phone_number: "",
            special_request: "",
            occasion: "",
        }
        
    }

    componentDidMount() {
        this.props.fetchRestaurant(this.props.match.params.restaurantId)


    //   thi
    this.thisTime
    }

    // componentDidUpdate(prevProps){
    //     
    //     if (prevProps.restaurant !== this.props.restaurant){

    //         this.props.fetchRestaurant(this.props.match.params.restaurantId)
    //         this.thisTime
    //     }
    // }


    setTimer(){
        
        let minutes;
        let seconds;
        const timer =  document.getElementById('timer');
        if (timer === null) return null;
        seconds = this.time % 60 < 10 ? `0` + this.time % 60 : this.time % 60;
        minutes = Math.floor(this.time / 60);
        
        // for (let i = this.time; i >= 0; i--){
        timer.innerHTML = `We're holding this table for you for <span id="tb">${minutes}:${seconds} minutes</span> `
        this.time -= 1
            if (this.time === 0 ){
                timer.innerHTML = `You can still try to complete your reservation, but this table may no longer be available.`
                
                clearInterval(this.thisTime);
                
                this.time = 300;
                timer.classList.remove('time');
            }
        // }
    }

    handleChange(type) {
        return (e) => (
            this.setState({ [type]: e.currentTarget.value })
        )

    }

    handleSubmit(e) {

        e.preventDefault()
        this.props.createReservation(this.state)
        .then(() => this.props.history.push(`/users/${this.props.currentUser.id}`))
        // .then(() => window.location.reload())
        
    }



    render() {

        const restaurant = this.props.restaurant;
        if (typeof restaurant === "undefined") {

            return null;

        }
        
        const resSearch = this.props.search

        if (typeof resSearch === "undefined") {

            return null;

        }
        const first = 0

        // const currentUser = this.props.currentUser;
        // if (typeof currentUser === "undefined") {

        //     return null;

        // }
    
        const currentHour = this.props.search.time.split(":")

        const normalHour = parseInt(currentHour[0]) === 0 || parseInt(currentHour[0]) === 12 ? 12 : (parseInt(currentHour[0]) + 12) % 12

        let currentOption = `${normalHour}:${currentHour.slice(1, 2)} ${((currentHour[0]) / 12) >= 1 ? `pm` : `am`}`


        return (
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
                <div className="res-loc-nav">
                    <Link to="/">Home</Link>
                    <div className="arrow"></div>
                    <p>United States</p>
                    <div className="arrow"></div>
                    <p>{this.props.restaurant.city}</p>
                </div>
                <div className="reserve-div-c">
                    <div className="reserve-div-l">
                        <div className="rdiv-l">
                            <h2>You're almost done!</h2>
                        </div>
                        <div className="rdiv-img">
                            <div className="rdiv-a">
                                <img src={this.props.restaurant.photoUrls[first]} />
                            </div>
                            <div className="rdiv-b">
                                <Link to={`/restaurants/${this.props.restaurant.id}`}></Link><h2>{this.props.restaurant.name}</h2>
                                <div className="rdiv-dets">
                                    <p><i class="far fa-calendar"></i>{new Date(this.props.search.date).toDateString()}</p>
                                    <p><i class="far fa-clock"></i>{currentOption}</p>
                                    <p><i class="far fa-user"></i>{this.props.search.guest_count === 1 ? "1 person" : `${this.props.search.guest_count} people`}</p>
                                </div>
                            </div>
                        </div>
                        <div className="timer">
                            <span id="timer" className="time-up time "></span>
                        </div>
                        <div className="dd">
                            <p>Diner Details</p>
                        </div>
                        <div className="det-cu">
                            <span>{this.props.currentUser.first_name}  {this.props.currentUser.last_name}(</span >
                            <span className="det-si" onClick={() => this.props.openModal('login')}> Not {this.props.currentUser.first_name}?</span><span>)</span>
                        </div>
                        <form onSubmit={this.handleSubmit} >
                            <div className="dd-input">
                                <input onChange={this.handleChange('phone_number')} type="text" placeholder="Phone Number" />
                                <input type="text" placeholder="Email" value={this.props.currentUser.email} disabled />
                            </div>
                            <div className="dd-select">
                                <div className="dd-sel-cont">
                                    <select onChange={this.handleChange('occasion')}>
                                        <option value="" disabled selected>Select an occasion (optional)</option>
                                        <option value="Birthday">Birthday</option>
                                        <option value="Annniversary">Anniversary</option>
                                        <option value="Date Night">Date Night</option>
                                        <option value="Business Meal">Business Meal</option>
                                        <option value="Celebration">Celebration</option>
                                    </select>
                                </div>
                                <input onChange={this.handleChange('special_request')} type="text" placeholder="Add a special request (optional)" />
                            </div>
                            <div className="chk-bx">
                                <input type="checkbox" id="signup" />
                                <label for="signup">Sign me up to receive dining offers and news from this restaurant by email.</label>
                                <br/>
                                <input type="checkbox" id="points" />
                                <label for="points">Yes, I want to be updated when your points program becomes available.</label>
                            </div>
                            <button className="comp-btn">Complete Reservation</button>
                        </form>
                        
                        <div className="t-o-s">

                            <span>By clicking “Complete reservation” you agree to the &nbsp;</span >
                            <span className="det-si2"> FullPlate Terms of Use &nbsp;</span><span>and &nbsp; </span><span className="det-si2"> Privacy Policy.</span>
                        </div>



                    </div>
                    <div className="reserve-div-r">
                        <h2>What to know before you go</h2>
                        <div className="rdiv-inf">
                            <p>Important dining information</p>
                            <p>We have a 15 minute grace period. Please call us if you are running later than 15 minutes after your reservation time.</p>
                            <p>We may contact you about this reservation, so please ensure your email and phone number are up to date.</p>
                        </div>
                        <div className="rdiv-inf">
                            <p>A note from the restaurant</p>
                            <p>Please let us know of any changes and we will do our best to accommodate you.</p>
                        </div>
                        <div className="rdiv-inf">
                            <p>Points</p>
                            <p>Our points program is coming soon. Please keep an eye out for new oppotunities to earn special perks as we expand our features.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ReservationForm