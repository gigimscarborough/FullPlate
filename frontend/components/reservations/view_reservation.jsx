import React from 'react'
import MainNavBar from '../navbar/main_navbar';
import ClickUserUpcomingDropdown from '../navbar/click_user_upcoming_dropdown';
import ClickGreetingDropdown from '../navbar/click_greeting_dropdown';
import { Link } from 'react-router-dom'

class ViewReservation extends React.Component {
    constructor(props) {
        super(props)
        this.resId = this.props.match.params.reservationId;
        this.reservation = this.reservation.bind(this)
        this.restaurant = this.restaurant.bind(this)
        // this.reservation = this.props.reservations.filter(reservation => reservation.id === this.resId)[0];
        // this.format = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        // this.resId = props.match.params.reservationId;
        // this.restPhoto = Object.values(this.props.restaurants).filter(rest => (rest.id === this.reservation.restaurant_id))[0].photoUrls[0]

        // this.state = {
        //     restaurant_id: this.props.restaurant.id,
        //     guest_id: this.props.currentUser.id,
        //     guest_count: this.props.search.guest_count,
        //     reservation_datetime: this.dateTime,
        //     email: this.props.currentUser.email,
        //     first_name: this.props.currentUser.first_name,
        //     last_name: this.props.currentUser.last_name,
        //     phone_number: "",
        //     special_request: "",
        //     occasion: "",
        // }
        this.textarea = this.textarea.bind(this)
        // this.closeTA = this.closeTA.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.confirmBtn = this.confirmBtn.bind(this)


        this.state ={
            email: this.reservation().email,
            first_name: this.reservation().first_name,
            guest_count: this.reservation().guest_name,
            guest_id: this.reservation().guest_id,
            id: this.reservation().id,
            last_name: this.reservation().last_name,
            occasion: this.reservation().occasion,
            phone_number: this.reservation().guest_name,
            reservation_datetime: this.reservation().reservation_datetime,
            restaurant_id: this.reservation().restaurant_id,
            special_request: this.reservation().special_request,
        }
    }

    componentDidMount() {
        this.props.fetchRestaurants()
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

    reservation() {
        const reservations = this.props.reservations
        const resId = this.props.match.params.reservationId
        const res = []


        for (let i = 0; i < reservations.length; i++) {
            if (reservations[i].id === parseInt(resId)) {
                res.push(reservations[i])
            }
        }

        return res[0]
    }

    restaurant() {
        const restaurants = this.props.restaurants
        const resId = this.reservation().restaurant_id
        const res = []


        for (let i = 0; i < restaurants.length; i++) {

            if (restaurants[i].id === resId) {
                res.push(restaurants[i])
            }
        }

        return res[0]

    }

    textarea() {
        const div = document.getElementById('restext')
        const textarea = document.getElementById('text-a')
        const btn = document.getElementById('restext-btn')

        div.style.height = "130px"
        btn.style.display = "flex"
        textarea.style.height = "80px"
    }

    // closeTA(){
    //     const div = document.getElementById('restext')
    //     const textarea = document.getElementById('text-a')
    //     const btn = document.getElementById('restext-btn')

    //     if (btn.style.display === "flex"){

    //         div.style.height = "50px"
    //         btn.style.display = "none"
    //         textarea.style.height = "50px"
    //     }
    // }
    handleChange(type){
       
        return (e) => {
            this.setState({ [type]: e.currentTarget.value });
            document.getElementById('sub-btn').innerHTML = 'Submit'
        }
    }

    handleSubmit(e){
        e.preventDefault()
        this.props.updateReservation(this.state).then(() => this.confirmBtn())
    }

    confirmBtn(){
        const btn = document.getElementById('sub-btn')

        btn.innerHTML = '<i class=" btn-spin fas fa-spinner"></i>'
        setTimeout(() => {
            btn.innerHTML = '<i class="btn-check fas fa-check"></i>'
        },2000)
    }

    render() {


        // const resId = this.props.match.params.reservationId
        const format = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
        // const that = this
        // const reservation = this.props.reservations.filter(reservation => reservation.id === that.resId)[0]
        // const restPhoto = this.props.restaurants.filter(rest => (rest.id === reservation.restaurant_id))[0].photoUrls[0]
        const dateJ = new Date(this.props.currentUser.created_at)

        if (Object.values(this.props.restaurants).length <= 0) {
            return null
        } else{

            return (
                <div onClick={this.closeTA}>
                    {this.navBar()}
                    <div className="up-res-hold">
                        <div className="up-res-r">
                            <div className="up-res-conf">
                                <div className="res-conf-head">
                                    <div className="res-check">
                                        <i className="fas fa-circle"></i>
                                        <i className="fas fa-check"></i>
                                    </div>
                                    <div className="res-check-i">
                                        <p>Thanks! Your reservation is confirmed.</p>
                                        <p>Confirmation #{this.props.match.params.reservationId}</p>
                                    </div>
                                </div>
                                <div className="res-conf-inf">
                                    <div className="conf-rest">
                                        <img id="u-conf-pic" src={this.restaurant().photoUrls[0]} alt="" />
                                        <div className="conf-rest-inf">
                                            <h3>{this.restaurant().name} </h3>
                                            <span><img id="conf-cal" src={window.rescal} /><p>{new Date(this.reservation().reservation_datetime).toLocaleDateString(undefined, format)}, {new Date(this.reservation().reservation_datetime).toLocaleTimeString().split(":").slice(0, 2).join(":")} {new Date(this.reservation().reservation_datetime).toLocaleTimeString().split(" ")[1]} </p> </span>
                                            <span><img id="conf-ppl" src={window.resppl} /><p>{this.reservation().guest_count > 1 ? `${this.reservation().guest_count} people` : `${this.reservation().guest_count} person`}</p></span>
                                            <div class="conf-links">
                                                <Link to={{pathname: `/reservations/${this.reservation().id}/update`}}>Modify</Link>
                                                <div></div>
                                                <Link to={{ pathname: `/reservations/${this.reservation().id}/delete` }}><a>Cancel</a></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="going">
                                        <p>Who's going?</p>
                                        <div className="going-t">
                                            <div className="going-g">
                                                <div className="going-c">
                                                    <i class="fas fa-circle"></i>
                                                    <span>{this.props.currentUser.first_name.split("")[0]}{this.props.currentUser.last_name.split("")[0]}</span>
                                                </div>
                                                <span>{this.props.currentUser.first_name} {this.props.currentUser.last_name.split("")[0]}</span>
                                                <span>Host</span>
                                            </div>
                                        </div>
                                    </div>
                                </div >

                                <div className="res-conf-btm">

                                </div>
                            </div>
                            <div className="res-conf-updt">
                                <div className="res-conf-head2">
                                    <img src={window.redpad} />
                                    <h2>Reservation details</h2>
                                </div>
                                <form onSubmit={this.handleSubmit}>
                                <select onChange={this.handleChange('occasion')}>
                                    <option value="" selected>Select an occasion (optional)</option>
                                    <option value="Birthday">Birthday</option>
                                    <option value="Annniversary">Anniversary</option>
                                    <option value="Date Night">Date Night</option>
                                    <option value="Business Meal">Business Meal</option>
                                    <option value="Celebration">Celebration</option>
                                </select>
                                <div onClick={() => this.textarea()} id="restext">
                                        <textarea id="text-a" onChange={this.handleChange('special_request')} defaultValue={this.reservation().special_request ? this.reservation().special_request : null} placeholder={!this.reservation().special_request ? `Add a special request (optional)` : null}></textarea>
                                    <div id="restext-btn"><button id="sub-btn" >Submit</button></div>
                                </div>
                                </form>
                                <p>What to know before you go</p>
                                <span >Important dining information</span>
                                <p id="imp-inf">We have a 15 minute grace period. Please call us if you are running later than 15 minutes after your reservation time.</p>
                                <p>We may contact you about this reservation, so please ensure your email and phone number are up to date.</p>
                                <p> Your table will be reserved for 1 hour 30 minutes.</p>
                                <span >A note from the restaurant</span>
                                <p id="imp-inf">due to limited seating, all parties are reserved for 90 minutes dining time</p>
                            </div>
                        </div>
                        <div className="up-res-l">
                            <div className="member-sin">
                                <div className="mem-c">
                                    <i class="fas fa-circle"></i>
                                    <span>{this.props.currentUser.first_name.split("")[0]}{this.props.currentUser.last_name.split("")[0]}</span>
                                </div>
                                <div className="mem-inf">
                                    <span>{this.props.currentUser.first_name} {this.props.currentUser.last_name}</span>
                                    <span>Joined in {dateJ.toLocaleDateString(undefined, format).split(" ")[1]} {dateJ.toLocaleDateString(undefined, format).split(" ")[3]}</span>
                                    <span><img src={window.loc} />{this.props.currentUser.dining_city} Area</span>
                                    <span><i class="far fa-comment-alt"></i> 0 reviews</span>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            )

        }
    }

}

export default ViewReservation;
