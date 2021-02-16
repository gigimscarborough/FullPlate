import React from 'react'
import MainNavBar from '../navbar/main_navbar';
import ClickUserUpcomingDropdown from '../navbar/click_user_upcoming_dropdown';
import ClickGreetingDropdown from '../navbar/click_greeting_dropdown';
import { Link } from 'react-router-dom'

class UpdateReservation extends React.Component {
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
    render() {


        // const resId = this.props.match.params.reservationId
        const format = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
        // const that = this
        // const reservation = this.props.reservations.filter(reservation => reservation.id === that.resId)[0]
        // const restPhoto = this.props.restaurants.filter(rest => (rest.id === reservation.restaurant_id))[0].photoUrls[0]

        if (Object.values(this.props.restaurants).length <= 0) {
            return null
        } else {

            return (
                <div>
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
                                            <span><img id="conf-cal" src={window.rescal} /><p>{new Date(this.reservation().reservation_datetime).toLocaleDateString(undefined, format)}</p> </span>
                                            <span><img id="conf-ppl" src={window.resppl} /><p>{this.reservation().guest_count > 1 ? `${this.reservation().guest_count} people` : `${this.reservation().guest_count} person`}</p></span>
                                            <div class="conf-links">
                                                <a>Modify</a>
                                                <div></div>
                                                <a>Cancel</a>
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
                            <div className="up-res-l"></div>
                        </div>
                    </div>
                </div>
            )

        }
    }

}

export default UpdateReservation;
