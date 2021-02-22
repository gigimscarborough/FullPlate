import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class UpdateReservationNext extends React.Component {
    constructor(props) {
        super(props)
        // this.search = this.props.search
        this.time = 300
        this.setTimer = this.setTimer.bind(this)
        this.thisTime = setInterval(this.setTimer, 1000)
        this.handleSubmit = this.handleSubmit.bind(this)

        // this.dateTime = this.props.search.date + " " + this.props.search.time
        if (this.time === 0) {
            clearInterval(this.thisTime)
        }

        // this.state = {
        //     restaurant_id: this.props.restaurant ? this.props.restaurant.id : null,
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
        this.state = {
            id: this.props.reservation.id,
            restaurant_id: this.props.reservation.restaurant_id,
            guest_id: this.props.reservation.guest_id,
            guest_count: this.props.reservation.guest_count,
            reservation_datetime: this.props.reservation.reservation_datetime,
            email: this.props.reservation.email,
            phone_number: this.props.reservation.phone_number ? this.props.reservation.phone_number : "",
            special_request: this.props.reservation.special_request ? this.props.reservation.special_request : "",
            occasion: this.props.reservation.occasion ? this.props.reservation.occasion : "",
            date: this.props.reservation.date,
            time: this.props.reservation.time
        }
    }

    componentDidMount() {
        // this.props.fetchRestaurant(this.props.match.params.restaurantId)

        // if (Object.values(this.props.search).length) {
        //     window.localStorage.setItem('savedSearch', JSON.stringify(this.props.search))

        // } else {
        //     this.search = JSON.parse(window.localStorage.getItem('savedSearch'))
        // }

        //   thi
        this.thisTime
    }

    componentWillUnmount(){
        clearInterval(this.thisTime)
    }


    setTimer() {

        let minutes;
        let seconds;
        const timer = document.getElementById('timer');
        if (timer === null) return null;
        seconds = this.time % 60 < 10 ? `0` + this.time % 60 : this.time % 60;
        minutes = Math.floor(this.time / 60);

        // for (let i = this.time; i >= 0; i--){
        timer.innerHTML = `We're holding this table for you for <span id="tb">${minutes}:${seconds} minutes</span> `
        this.time -= 1
        if (this.time === 0) {
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

    handleSubmit(e){
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
            reservation_datetime: this.state.date + " " + this.state.time,
            restaurant_id: this.state.restaurant_id,
            special_request: this.state.special_request,
        }
        this.props.updateReservation(form)
            .then(() => this.props.fetchUser(this.props.currentUser.id))
            .then(() => this.props.history.push(`/reservations/${this.props.reservation.id}/view`))
    }

    render() {
        debugger
        let resDate = new Date(this.props.reservation.reservation_datetime)
        // let resDate = new Date(this.props.search.date)
        resDate = new Date(resDate.getTime() + resDate.getTimezoneOffset() * 60000)

        let resTime = new Date(this.state.date + " " + this.state.time)
        // let resDate = new Date(this.props.search.date)
        // resTime = new Date(resTime.getTime() + resTime.getTimezoneOffset() * 60000)


        const format = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' }

        return (
            <div className="up-next-hold">
                <h4>Modify your reservation</h4>
                <div className="mod-div-c">
                    <div className="mod-div-l">
                        <div className="rdiv-img">
                            <div className="mdiv-a">
                                {/* <img src={this.props.restaurant.photoUrls[0]} /> */}
                                <img src={window.salmonplate} />
                            </div>
                            <div className="rdiv-b">
                                <Link to={`/restaurants/${this.props.restaurant.id}`}></Link><h2>{this.props.restaurant.name}</h2>
                                <div className="rdiv-dets">
                                    <p><i class="far fa-calendar"></i>{resDate.toLocaleDateString(undefined, format).split(", ").slice(0, 2).join(", ")}</p>
                                    <p><i class="far fa-clock"></i>{resTime.toLocaleTimeString().split(":").slice(0, 2).join(":")} {resTime.toLocaleTimeString().split(" ")[1] === 'AM' ? 'am' : 'pm'}</p>
                                    <p><i class="far fa-user"></i>{this.props.reservation.guest_count === 1 ? "1 person" : `${this.props.reservation.guest_count} people`}</p>
                                </div>
                            </div>
                        </div>
                        <div className="timer">
                            <span id="timer" className="time-up time "></span>
                        </div>
                        <div className="dd">
                            <p>Diner details</p>
                        </div>
                        <div className="det-cu">
                            <span>{this.props.currentUser.first_name}  {this.props.currentUser.last_name}</span >
                        </div>
                        <form onSubmit={this.handleSubmit}>
                            <div className="c-dd-input">
                                <input onChange={this.handleChange('phone_number')} type="text" placeholder="Phone Number" />
                                <input type="text" placeholder="Email" value={this.props.currentUser.email} disabled />
                            </div>
                            <div className="c-dd-select">
                                <div className="c-dd-sel-cont">
                                    <select onChange={this.handleChange('occasion')}>
                                        {this.state.occasion === "" ? <option value="" disabled selected>Select an occasion (optional)</option> : <option value="" disabled>Select an occasion (optional)</option>}
                                        {this.state.occasion === "Birthday" ? <option selected value="Birthday">Birthday</option> : <option value="Birthday">Birthday</option>}
                                        {this.state.occasion === "Annniversary" ? <option selected value="Annniversary">Annniversary</option> : <option value="Annniversary">Annniversary</option>}
                                        {this.state.occasion === "Date Night" ? <option selected value="Date Night">Date Night</option> : <option value="Date Night">Date Night</option>}
                                        {this.state.occasion === "Business Meal" ? <option selected value="Business Meal">Business Meal</option> : <option value="Business Meal">Business Meal</option>}
                                        {this.state.occasion === "Celebration" ? <option selected value="Celebration">Celebration</option> : <option value="Celebration">Celebration</option>}
                                    </select>
                                </div>
                                <input onChange={this.handleChange('special_request')} type="text" defaultValue={this.state.special_request ? this.state.special_request : null} placeholder="Add a special request (optional)" />
                            </div>
                            <div className="chk-bx">
                                <input type="checkbox" id="signup" />
                                <label for="signup">Sign me up to receive dining offers and news from this restaurant by email.</label>
                                <br />
                            </div>
                            <button className="comp-btn">Complete Reservation</button>
                        </form>
                        <div className="t-o-s">

                            <span>By clicking “Complete reservation” you agree to the &nbsp;</span >
                            <span className="det-si2"> FullPlate Terms of Use &nbsp;</span><span>and &nbsp; </span><span className="det-si2"> Privacy Policy.</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


// export default UpdateReservationNext;

const mSTP = (state, ownProps) => {

    return {

    }
}

const mDTP = (dispatch) => ({

})

export default withRouter(connect(mSTP, mDTP)(UpdateReservationNext))
