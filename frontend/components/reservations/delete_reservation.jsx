import React from 'react'
import MainNavBar from '../navbar/main_navbar'
import {Link} from 'react-router-dom'
import ClickUserUpcomingDropdown from '../navbar/click_user_upcoming_dropdown';
import ClickGreetingDropdown from '../navbar/click_greeting_dropdown';
import CancelConf from './cancel_conf'

class DeleteReservation extends React.Component {
    constructor(props) {
        super(props)
        this.reservation = this.reservation.bind(this)
        this.restaurant = this.restaurant.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.deleted = false
        this.res = this.restaurant()
        this.reserve = this.reservation()
    }

    componentDidMount() {
        this.props.fetchRestaurants()

        if (this.restaurant()) {
            window.localStorage.setItem('savedRest', JSON.stringify(this.restaurant()))
            window.localStorage.setItem('savedReserve', JSON.stringify(this.reservation()))

        } else {
            this.res = JSON.parse(window.localStorage.getItem('savedRest'))
            this.reserve = JSON.parse(window.localStorage.getItem('savedReserve'))
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
        if (!this.reservation()){
            return null
        }
        const restaurants = this.props.restaurants
        const resId = this.reservation().restaurant_id
        const res = []


        for (let i = 0; i < restaurants.length; i++) {

            if (restaurants[i].id === resId) {
                res.push(restaurants[i])
            }
        }

        

        // this.res = res[0]
        return res[0]

    }

    handleSubmit(e){
        e.preventDefault()

        this.props.deleteReservation(this.reservation().id)
        .then(() => this.props.fetchUser(this.props.currentUser.id))
           this.deleted = true;
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

    render(){
        
       
        const format = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' }

     
            let resDate = this.reservation() ? new Date(this.reservation().reservation_datetime) : null
        resDate = resDate ? new Date(resDate.getTime() + resDate.getTimezoneOffset() * 60000) :null
   
    
        // if (this.props.restaurants.length <= 0) {
        if (Object.values(this.props.restaurants).length <= 0) {
        return null
        } else if (!this.reservation()){
            return(
                <div>
                    {this.navBar()}
                    <CancelConf sendForm={this.props.sendForm} currentUser={this.props.currentUser} reservation={this.reserve} restaurant={this.res} restaurants={this.props.restaurants}/>
                </div>
            )
        } else {
        return(
            <div>
                {this.navBar()}
                <div className="cancel-head">
                    <div>
                        Cancel Your Reservation
                    </div>
                </div>
                <div className="cancel-body">
                    <div className="c-body-div">
                        <div className="c-div-top">
                            {/* <img src={this.restaurant().photoUrls[0]} alt=""/> */}
                            <img src={window.salmonplate} alt=""/>
                            <div className="c-div-inf">
                                <div>
                                    <span>GUESTS</span>
                                    <span>{this.reservation().guest_count > 1 ? `${this.reservation().guest_count} people` : `${this.reservation().guest_count} person`}</span>
                                </div>
                                <div>
                                    <span>DATE</span>
                                    <span>{resDate.toLocaleDateString(undefined, format)}</span>
                                </div>
                                <div>
                                    <span>TIME</span>
                                    <span>{resDate.toLocaleTimeString().split(":").slice(0, 2).join(":")} {resDate.toLocaleTimeString().split(" ")[1]}</span>
                                </div>
                                <div>
                                    <span>RESTAURANT</span>
                                    <Link to={{ pathname: `/restaurants/${this.restaurant().id}`}}>{this.restaurant().name}</Link>
                                </div>
                            </div>
                        </div>
                        <div className="c-div-btm">
                            <button onClick={this.handleSubmit}>Cancel Reservation</button>
                        </div>
                    </div>
                </div>

            </div>
        )
        }
    }
}
export default DeleteReservation