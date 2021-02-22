import React from 'react';
import {Link} from 'react-router-dom';

class UpdateReservationNext extends React.Component {
    constructor(props) {
        super(props)
        // this.search = this.props.search
        this.time = 300
        this.setTimer = this.setTimer.bind(this)
        this.thisTime = setInterval(this.setTimer, 1000)
        // this.handleSubmit = this.handleSubmit.bind(this)

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
            restaurant_id: this.props.reservation.restaurant_id,
            guest_id: this.props.reservation.guest_id,
            guest_count: this.props.reservation.guest_count,
            reservation_datetime: this.props.reservation.reservation_datetime,
            email: this.props.reservation.email,
            phone_number: this.props.reservation.phone_number ? this.props.reservation.phone_number : "",
            special_request: this.props.reservation.special_request ? this.props.reservation.special_request : "",
            occasion: this.props.reservation.occasion ? this.props.reservation.occasion : "",
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

    render() {
        let resDate = new Date(this.props.reservation.reservation_datetime)
        // let resDate = new Date(this.props.search.date)
        resDate = new Date(resDate.getTime() + resDate.getTimezoneOffset() * 60000)


        return (
            <div className="up-next-hold">
                <h4>Modify your reservation</h4>
                <div className="mod-div-c">
                    <div className="reserve-div-l">
                        <div className="rdiv-img">
                            <div className="rdiv-a">
                                <img src={this.props.restaurant.photoUrls[0]} />
                            </div>
                            <div className="rdiv-b">
                                <Link to={`/restaurants/${this.props.restaurant.id}`}></Link><h2>{this.props.restaurant.name}</h2>
                                <div className="rdiv-dets">
                                    <p><i class="far fa-calendar"></i>{resDate.toDateString()}</p>
                                    <p><i class="far fa-clock"></i>{resDate.toLocaleTimeString().split(":").slice(0, 2).join(":")} {resDate.toLocaleTimeString().split(" ")[1] === 'AM' ? 'am' : 'pm'}</p>
                                    <p><i class="far fa-user"></i>{this.state.guest_count === 1 ? "1 person" : `${this.state.guest_count} people`}</p>
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
                            <span>{this.props.currentUser.first_name}  {this.props.currentUser.last_name}</span >
                        </div>
                        <form >
                            <div className="c-dd-input">
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


export default UpdateReservationNext;
