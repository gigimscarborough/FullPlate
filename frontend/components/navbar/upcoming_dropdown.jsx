import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'


class UpcomingDropdown extends React.Component {

    constructor(props) {
        super(props)
    }

    reservations() {
        const today = new Date()


        let reservations = this.props.reservations.filter(function (res) {
            let resTime = new Date(res.reservation_datetime)
            resTime = new Date(resTime.getTime() + resTime.getTimezoneOffset() * 60000)
            
            return resTime > today
        })

        reservations.sort((a, b) => {
            return new Date(a.reservation_datetime) - new Date(b.reservation_datetime)
        })
        
        return reservations.map(reservation => {

            const restaurant = this.props.restaurants.filter(rest => rest.id === reservation.restaurant_id)[0]

            let resDate = new Date(reservation.reservation_datetime)
            resDate = new Date(resDate.getTime() + resDate.getTimezoneOffset() * 60000)
            const format = { year: 'numeric', month: 'short', day: 'numeric' }
            return (
                <div className="dd-res">
                    <div className="dd-res-l">
                        <div>
                            <img src={window.resdd_icon} />
                        </div>
                    </div>
                    <div className="dd-res-r">
                        <h4 className="dd-res-name">
                            <Link to={`restaurants/${restaurant.id}`}>{restaurant.name}</Link>
                        </h4 >
                        <div className="dd-res-inf">
                            <span className="dd-res-gc"><img src={window.pplsvg} alt="" />{reservation.guest_count > 1 ? `Table for ${reservation.guest_count} people` : `Table for ${reservation.guest_count} person`}</span>
                            <span className="dd-res-time"><i class="far fa-clock"></i>{resDate.toLocaleTimeString().split(":").slice(0, 2).join(":")} {resDate.toLocaleTimeString().split(" ")[1]}</span>
                            <span className="dd-res-date"><img src={window.calsvg} alt="" />{resDate.toLocaleDateString(undefined, format)}</span>
                        </div>
                        <div className="dd-res-links">
                            <Link to={{ pathname:`/reservations/${reservation.id}/view`}}>View</Link>
                            <i class="fas fa-circle"></i>
                            <Link to={{ pathname:`reservations/${reservation.id}/update`}}>Modify</Link>
                        </div>
                        <Link to={{ pathname:`reservations/${reservation.id}/delete`}}>Cancel</Link>
                    </div>

                </div>
            )
        }
        )
    }


    render() {
        if (!this.props.currentUser || !this.props.reservations || this.reservations().length <= 0) {

            return (
                <div>
                    <div id="upcoming-dropdown" className="upcoming-dropdown">
                        <div id="pointer"></div>
                        <h2>Upcoming Reservations</h2>
                        <p>You have no upcoming reservations!</p>
                    </div>
                </div>
            )
        }

        return (
            <div>
                <div id="alt-upcoming-dropdown" className="alt-upcoming-dropdown">
                    <div id="pointer"></div>
                    <h2>Upcoming Reservations</h2>
                    <div className="uu-over">
                    {this.reservations().slice(0,4)}
                    <Link to={`/users/${this.props.currentUser.id}`}>View all reservations</Link>
                    </div>
                </div>
            </div>
        )

    }
}

// export default UpcomingDropdown;

const mSTP = (state) => {
    return {
        currentUser: state.entities.users[state.session.id],
        reservations: state.entities.users[state.session.id].reservations,
        restaurants: state.entities.users[state.session.id].reserved_restaurants
    }
}

const mDTP = (dispatch) => ({

})

export default connect(mSTP, mDTP)(UpcomingDropdown)