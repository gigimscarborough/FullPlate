import React from 'react'
import MainNavBar from '../navbar/main_navbar';
import ClickUserUpcomingDropdown from '../navbar/click_user_upcoming_dropdown';
import ClickGreetingDropdown from '../navbar/click_greeting_dropdown';
import { Link } from 'react-router-dom'
import UpdateReservationNext from './update_reservation_next'


class UpdateReservation extends React.Component {
    constructor(props) {
        super(props)

        // this.resId = this.props.match.params.reservationId;
        this.reservation = this.reservation.bind(this)
        this.restaurant = this.restaurant.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.modified = false



        this.state = {
            email: this.reservation().email,
            first_name: this.reservation().first_name,
            guest_count: this.reservation().guest_count,
            guest_id: this.reservation().guest_id,
            id: this.reservation().id,
            last_name: this.reservation().last_name,
            occasion: this.reservation().occasion,
            phone_number: this.reservation().guest_name,
            restaurant_id: this.reservation().restaurant_id,
            special_request: this.reservation().special_request,
            time: new Date(this.reservation().reservation_datetime).toTimeString(),
            date: this.reservation().reservation_datetime.split("T")[0],
            reservation_datetime: this.reservation().reservation_datetime.split("T")[0] + " " + new Date(this.reservation().reservation_datetime).toTimeString(),
        }

    }

    componentDidMount() {
        this.props.fetchRestaurants()
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
                        <div className="res-loc-nav">
                            <Link to="/">Home</Link>
                            <div className="arrow"></div>
                            <p>United States</p>
                            <div className="arrow"></div>
                            <p>{this.props.currentUser.dining_city}</p>

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
                    <div className="res-loc-nav">
                        <Link to="/">Home</Link>
                        <div className="arrow"></div>
                        <p>United States</p>
                        <div className="arrow"></div>
                        <p>{this.props.currentUser.dining_city}</p>
                    </div>
                </div>
            )

        }
    }

    handleChange(type) {
        return (e) => {
            if (type === "date"){
                this.setState({ reservation_datetime: e.currentTarget.value + " " + this.state.time })
            }
            this.setState({ [type]: e.currentTarget.value })
    }

    }

    handleSubmit(e) {
        e.preventDefault()
        
        let form = {
            email: this.state.email,
            first_name: this.state.first_name,
            guest_count: this.state.guest_count,
            guest_id: this.state.guest_id,
            id: this.state.id,
            last_name: this.state.last_name,
            occasion: this.state.occasion,
            phone_number: this.state.guest_name,
            reservation_datetime: this.state.date + " " + this.state.time.split(" ")[0],
            restaurant_id: this.state.restaurant_id,
            special_request: this.state.special_request,
        }
        
        this.props.updateReservation(form)
        .then(() => this.props.fetchUser(this.props.currentUser.id))
        // .then(() => 
        this.modified = true
        // )
    }


    render() {
        
        let options = []
        
        for (let i = 1; i <= 20; i++) {
            options.push(this.reservation().guest_count === i ? <option selected key={i} value={i} >{i < 2 ? `${i} person` : `${i} people`}</option> : <option key={i} value={i} >{i < 2 ? `${i} Person` : `${i} People`}</option>)
        }
        
        const format = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' }
        
        let resDate = new Date(this.reservation().reservation_datetime)
        // let resDate = new Date(this.props.search.date)
        resDate = new Date(resDate.getTime() + resDate.getTimezoneOffset() * 60000)
        
        let resState = new Date(this.state.reservation_datetime)
        // let resDate = new Date(this.props.search.date)
        resState = new Date(resState.getTime() + resState.getTimezoneOffset() * 60000)
        
        // let sDate = new Date(this.state.date)
        // // let resDate = new Date(this.props.search.date)
        // sDate = new Date(resState.getTime() + resState.getTimezoneOffset() * 60000)
        
 

        if (Object.values(this.props.restaurants).length <= 0) {
            return null
        } 
        if(this.modified === true){
            return (
                <div>
                    {this.navBar()}
                    <UpdateReservationNext currentUser={this.props.currentUser} openModal={this.props.openModal} restaurant={this.restaurant()} reservation={this.state} updateReservation={this.props.updateReservation} fetchUser={this.props.fetchUser}/>
                </div>
                )
        }else {

            return (
                <div>
                    {this.navBar()}
                    <div className="res-mod-hold">
                        <div className="res-mod-div">
                            <span className="your-res">Your current reservation</span>
                            <div className="your-res-inf">
                                {/* <img src={this.restaurant().photoUrls[0]} alt="" /> */}
                                <img src={window.salmonplate} alt="" />
                                <div className="your-res-icn">
                                    <span>{this.restaurant().name}</span>
                                    <div>
                                        <div className="mod-icn">
                                            <i className="far fa-calendar"></i>
                                            <span>{resDate.toLocaleDateString(undefined, format).split(", ").slice(0, 2).join(", ")} </span>
                                        </div>
                                        <div className="mod-icn">
                                            <i className="far fa-clock"></i>
                                            <span>{resDate.toLocaleTimeString().split(":").slice(0, 2).join(":")} {resDate.toLocaleTimeString().split(" ")[1] === 'AM' ? 'am' : 'pm'}</span>
                                        </div>
                                        <div className="mod-icn">
                                            <i className="far fa-user"></i>
                                            <span>{this.reservation().guest_count > 1 ? `${this.reservation().guest_count} people` : `${this.reservation().guest_count} person`}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <span className="mod-res">Modify your reservation</span>
                            <form onSubmit={this.handleSubmit} >
                                <div className="mod-res-div">
                                    <div className="mod-res-sel">
                                        <div className="mod-date">
                                            <input type="date"  onChange={this.handleChange('date')} />
                                            <div className="mod-date-s">{new Date(this.state.reservation_datetime).toLocaleDateString(undefined, format).split(", ").slice(1).join(", ")}</div>
                                        </div>
                                        <div className="g-bord"></div>
                                        <div className="mod-time">
                                            <select onChange={this.handleChange('time')} >
                                                {`${resState.toLocaleTimeString().split(":").slice(0, 2).join(":")} ${resState.toLocaleTimeString().split(" ").slice(1)}` === `12:00 AM` ? < option selected value={`00:00:00`}> 12:00 AM</option > : < option value={`00:00:00`}> 12:00 AM</option >}
                                                {`${resState.toLocaleTimeString().split(":").slice(0, 2).join(":")} ${resState.toLocaleTimeString().split(" ").slice(1)}` === `12:30 AM` ? < option selected value={`00:00:30`}> 12:30 AM</option > : < option value={`00:00:30`}> 12:30 AM</option >}
                                                {`${resState.toLocaleTimeString().split(":").slice(0, 2).join(":")} ${resState.toLocaleTimeString().split(" ").slice(1)}` === `1:00 AM` ? < option selected value={`01:00:00`}> 1:00 AM</option > : < option value={`01:00:00`}> 1:00 AM</option >}
                                                {`${resState.toLocaleTimeString().split(":").slice(0, 2).join(":")} ${resState.toLocaleTimeString().split(" ").slice(1)}` === `1:30 AM` ? < option selected value={`01:30:00`}> 1:30 AM</option > : < option value={`01:30:00`}> 1:30 AM</option >}
                                                {`${resState.toLocaleTimeString().split(":").slice(0, 2).join(":")} ${resState.toLocaleTimeString().split(" ").slice(1)}` === `2:00 AM` ? < option selected value={`02:00:00`}> 2:00 AM</option > : < option value={`02:00:00`}> 2:00 AM</option >}
                                                {`${resState.toLocaleTimeString().split(":").slice(0, 2).join(":")} ${resState.toLocaleTimeString().split(" ").slice(1)}` === `2:30 AM` ? < option selected value={`02:30:00`}> 2:30 AM</option > : < option value={`02:30:00`}> 2:30 AM</option >}
                                                {`${resState.toLocaleTimeString().split(":").slice(0, 2).join(":")} ${resState.toLocaleTimeString().split(" ").slice(1)}` === `3:00 AM` ? < option selected value={`03:00:00`}> 3:00 AM</option > : < option value={`03:00:00`}> 3:00 AM</option >}
                                                {`${resState.toLocaleTimeString().split(":").slice(0, 2).join(":")} ${resState.toLocaleTimeString().split(" ").slice(1)}` === `3:30 AM` ? < option selected value={`03:30:00`}> 3:30 AM</option > : < option value={`03:30:00`}> 3:30 AM</option >}
                                                {`${resState.toLocaleTimeString().split(":").slice(0, 2).join(":")} ${resState.toLocaleTimeString().split(" ").slice(1)}` === `4:00 AM` ? < option selected value={`04:00:00`}> 4:00 AM</option > : < option value={`04:00:00`}> 4:00 AM</option >}
                                                {`${resState.toLocaleTimeString().split(":").slice(0, 2).join(":")} ${resState.toLocaleTimeString().split(" ").slice(1)}` === `4:30 AM` ? < option selected value={`04:30:00`}> 4:30 AM</option > : < option value={`04:30:00`}> 4:30 AM</option >}
                                                {`${resState.toLocaleTimeString().split(":").slice(0, 2).join(":")} ${resState.toLocaleTimeString().split(" ").slice(1)}` === `5:00 AM` ? < option selected value={`05:00:00`}> 5:00 AM</option > : < option value={`05:00:00`}> 5:00 AM</option >}
                                                {`${resState.toLocaleTimeString().split(":").slice(0, 2).join(":")} ${resState.toLocaleTimeString().split(" ").slice(1)}` === `5:30 AM` ? < option selected value={`05:30:00`}> 5:30 AM</option > : < option value={`05:30:00`}> 5:30 AM</option >}
                                                {`${resState.toLocaleTimeString().split(":").slice(0, 2).join(":")} ${resState.toLocaleTimeString().split(" ").slice(1)}` === `6:00 AM` ? < option selected value={`06:00:00`}> 6:00 AM</option > : < option value={`06:00:00`}> 6:00 AM</option >}
                                                {`${resState.toLocaleTimeString().split(":").slice(0, 2).join(":")} ${resState.toLocaleTimeString().split(" ").slice(1)}` === `6:30 AM` ? < option selected value={`06:30:00`}> 6:30 AM</option > : < option value={`06:30:00`}> 6:30 AM</option >}
                                                {`${resState.toLocaleTimeString().split(":").slice(0, 2).join(":")} ${resState.toLocaleTimeString().split(" ").slice(1)}` === `7:00 AM` ? < option selected value={`07:00:00`}> 7:00 AM</option > : < option value={`07:00:00`}> 7:00 AM</option >}
                                                {`${resState.toLocaleTimeString().split(":").slice(0, 2).join(":")} ${resState.toLocaleTimeString().split(" ").slice(1)}` === `7:30 AM` ? < option selected value={`07:30:00`}> 7:30 AM</option > : < option value={`07:30:00`}> 7:30 AM</option >}
                                                {`${resState.toLocaleTimeString().split(":").slice(0, 2).join(":")} ${resState.toLocaleTimeString().split(" ").slice(1)}` === `8:00 AM` ? < option selected value={`08:00:00`}> 8:00 AM</option > : < option value={`08:00:00`}> 8:00 AM</option >}
                                                {`${resState.toLocaleTimeString().split(":").slice(0, 2).join(":")} ${resState.toLocaleTimeString().split(" ").slice(1)}` === `8:30 AM` ? < option selected value={`08:30:00`}> 8:30 AM</option > : < option value={`08:30:00`}> 8:30 AM</option >}
                                                {`${resState.toLocaleTimeString().split(":").slice(0, 2).join(":")} ${resState.toLocaleTimeString().split(" ").slice(1)}` === `9:00 AM` ? < option selected value={`09:00:00`}> 9:00 AM</option > : < option value={`09:00:00`}> 9:00 AM</option >}
                                                {`${resState.toLocaleTimeString().split(":").slice(0, 2).join(":")} ${resState.toLocaleTimeString().split(" ").slice(1)}` === `9:30 AM` ? < option selected value={`09:30:00`}> 9:30 AM</option > : < option value={`09:30:00`}> 9:30 AM</option >}
                                                {`${resState.toLocaleTimeString().split(":").slice(0, 2).join(":")} ${resState.toLocaleTimeString().split(" ").slice(1)}` === `10:00 AM` ? < option selected value={`10:00:00`}> 10:00 AM</option > : < option value={`10:00:00`}> 10:00 AM</option >}
                                                {`${resState.toLocaleTimeString().split(":").slice(0, 2).join(":")} ${resState.toLocaleTimeString().split(" ").slice(1)}` === `10:30 AM` ? < option selected value={`10:30:00`}> 10:30 AM</option > : < option value={`10:30:00`}> 10:30 AM</option >}
                                                {`${resState.toLocaleTimeString().split(":").slice(0, 2).join(":")} ${resState.toLocaleTimeString().split(" ").slice(1)}` === `11:00 AM` ? < option selected value={`11:00:00`}> 11:00 AM</option > : < option value={`11:00:00`}> 11:00 AM</option >}
                                                {`${resState.toLocaleTimeString().split(":").slice(0, 2).join(":")} ${resState.toLocaleTimeString().split(" ").slice(1)}` === `11:30 AM` ? < option selected value={`11:30:00`}> 11:30 AM</option > : < option value={`11:30:00`}> 11:30 AM</option >}
                                                {`${resState.toLocaleTimeString().split(":").slice(0, 2).join(":")} ${resState.toLocaleTimeString().split(" ").slice(1)}` === `12:00 PM` ? < option selected value={`12:00:00`}> 12:00 PM</option > : < option value={`12:00:00`}> 12:00 PM</option >}
                                                {`${resState.toLocaleTimeString().split(":").slice(0, 2).join(":")} ${resState.toLocaleTimeString().split(" ").slice(1)}` === `12:30 PM` ? < option selected value={`12:30:00`}> 12:30 PM</option > : < option value={`12:30:00`}> 12:30 PM</option >}
                                                {`${resState.toLocaleTimeString().split(":").slice(0, 2).join(":")} ${resState.toLocaleTimeString().split(" ").slice(1)}` === `1:00 PM` ? < option selected value={`13:00:00`}> 1:00 PM</option > : < option value={`13:00:00`}> 1:00 PM</option >}
                                                {`${resState.toLocaleTimeString().split(":").slice(0, 2).join(":")} ${resState.toLocaleTimeString().split(" ").slice(1)}` === `1:30 PM` ? < option selected value={`13:30:00`}> 1:30 PM</option > : < option value={`13:30:00`}> 1:30 PM</option >}
                                                {`${resState.toLocaleTimeString().split(":").slice(0, 2).join(":")} ${resState.toLocaleTimeString().split(" ").slice(1)}` === `2:00 PM` ? < option selected value={`14:00:00`}> 2:00 PM</option > : < option value={`14:00:00`}> 2:00 PM</option >}
                                                {`${resState.toLocaleTimeString().split(":").slice(0, 2).join(":")} ${resState.toLocaleTimeString().split(" ").slice(1)}` === `2:30 PM` ? < option selected value={`14:30:00`}> 2:30 PM</option > : < option value={`14:30:00`}> 2:30 PM</option >}
                                                {`${resState.toLocaleTimeString().split(":").slice(0, 2).join(":")} ${resState.toLocaleTimeString().split(" ").slice(1)}` === `3:00 PM` ? < option selected value={`15:00:00`}> 3:00 PM</option > : < option value={`15:00:00`}> 3:00 PM</option >}
                                                {`${resState.toLocaleTimeString().split(":").slice(0, 2).join(":")} ${resState.toLocaleTimeString().split(" ").slice(1)}` === `3:30 PM` ? < option selected value={`15:30:00`}> 3:30 PM</option > : < option value={`15:30:00`}> 3:30 PM</option >}
                                                {`${resState.toLocaleTimeString().split(":").slice(0, 2).join(":")} ${resState.toLocaleTimeString().split(" ").slice(1)}` === `4:00 PM` ? < option selected value={`16:00:00`}> 4:00 PM</option > : < option value={`16:00:00`}> 4:00 PM</option >}
                                                {`${resState.toLocaleTimeString().split(":").slice(0, 2).join(":")} ${resState.toLocaleTimeString().split(" ").slice(1)}` === `4:30 PM` ? < option selected value={`16:30:00`}> 4:30 PM</option > : < option value={`16:30:00`}> 4:30 PM</option >}
                                                {`${resState.toLocaleTimeString().split(":").slice(0, 2).join(":")} ${resState.toLocaleTimeString().split(" ").slice(1)}` === `5:00 PM` ? < option selected value={`17:00:00`}> 5:00 PM</option > : < option value={`17:00:00`}> 5:00 PM</option >}
                                                {`${resState.toLocaleTimeString().split(":").slice(0, 2).join(":")} ${resState.toLocaleTimeString().split(" ").slice(1)}` === `5:30 PM` ? < option selected value={`17:30:00`}> 5:30 PM</option > : < option value={`17:30:00`}> 5:30 PM</option >}
                                                {`${resState.toLocaleTimeString().split(":").slice(0, 2).join(":")} ${resState.toLocaleTimeString().split(" ").slice(1)}` === `6:00 PM` ? < option selected value={`18:00:00`}> 6:00 PM</option > : < option value={`18:00:00`}> 6:00 PM</option >}
                                                {`${resState.toLocaleTimeString().split(":").slice(0, 2).join(":")} ${resState.toLocaleTimeString().split(" ").slice(1)}` === `6:30 PM` ? < option selected value={`18:30:00`}> 6:30 PM</option > : < option value={`18:30:00`}> 6:30 PM</option >}
                                                {`${resState.toLocaleTimeString().split(":").slice(0, 2).join(":")} ${resState.toLocaleTimeString().split(" ").slice(1)}` === `7:00 PM` ? < option selected value={`19:00:00`}> 7:00 PM</option > : < option value={`19:00:00`}> 7:00 PM</option >}
                                                {`${resState.toLocaleTimeString().split(":").slice(0, 2).join(":")} ${resState.toLocaleTimeString().split(" ").slice(1)}` === `7:30 PM` ? < option selected value={`19:30:00`}> 7:30 PM</option > : < option value={`19:30:00`}> 7:30 PM</option >}   
                                                {`${resState.toLocaleTimeString().split(":").slice(0, 2).join(":")} ${resState.toLocaleTimeString().split(" ").slice(1)}` === `8:00 PM` ? < option selected value={`20:00:00`}> 8:00 PM</option > : < option value={`20:00:00`}> 8:00 PM</option >}   
                                                {`${resState.toLocaleTimeString().split(":").slice(0, 2).join(":")} ${resState.toLocaleTimeString().split(" ").slice(1)}` === `8:30 PM` ? < option selected value={`20:30:00`}> 8:30 PM</option > : < option value={`20:30:00`}> 8:30 PM</option >}
                                                {`${resState.toLocaleTimeString().split(":").slice(0, 2).join(":")} ${resState.toLocaleTimeString().split(" ").slice(1)}` === `9:00 PM` ? < option selected value={`21:00:00`}> 9:00 PM</option > : < option value={`21:00:00`}> 9:00 PM</option >}
                                                {`${resState.toLocaleTimeString().split(":").slice(0, 2).join(":")} ${resState.toLocaleTimeString().split(" ").slice(1)}` === `9:30 PM` ? < option selected value={`21:30:00`}> 9:30 PM</option > : < option value={`21:30:00`}> 9:30 PM</option >}
                                                {`${resState.toLocaleTimeString().split(":").slice(0, 2).join(":")} ${resState.toLocaleTimeString().split(" ").slice(1)}` === `10:00 PM` ? < option selected value={`22:00:00`}> 10:00 PM</option > : < option value={`22:00:00`}> 10:00 PM</option >}
                                                {`${resState.toLocaleTimeString().split(":").slice(0, 2).join(":")} ${resState.toLocaleTimeString().split(" ").slice(1)}` === `10:30 PM` ? < option selected value={`22:30:00`}> 10:30 PM</option > : < option value={`22:30:00`}> 10:30 PM</option >}
                                                {`${resState.toLocaleTimeString().split(":").slice(0, 2).join(":")} ${resState.toLocaleTimeString().split(" ").slice(1)}` === `11:00 PM` ? < option selected value={`23:00:00`}> 11:00 PM</option > : < option value={`23:00:00`}> 11:00 PM</option >}
                                                {`${resState.toLocaleTimeString().split(":").slice(0, 2).join(":")} ${resState.toLocaleTimeString().split(" ").slice(1)}` === `11:30 PM` ? < option selected value={`23:30:00`}> 11:30 PM</option > : < option value={`23:30:00`}> 11:30 PM</option >}
                                            </select>
                                            <i className="far fa-clock"></i>
                                        </div>
                                        <div className="g-bord"></div>
                                        <div className="mod-guest">
                                            <select onChange={this.handleChange('guest_count')}>
                                            {options}
                                            </select>
                                            <i className="far fa-user"></i>
                                        </div>
                                    </div>
                                    <button>Find a new table</button>
                                </div>
                            </form>

                        </div>

                    </div>
                </div>
            )
        }
    }


}

export default UpdateReservation