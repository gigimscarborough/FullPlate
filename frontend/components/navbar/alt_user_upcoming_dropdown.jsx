import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class AltUserUpcomingDropdown extends React.Component {

    constructor(props) {
        super(props)
    }


    reservations() {
        const today = new Date()


        let reservations = this.props.reservations.filter(function (res) {
            let resTime = new Date(res.reservation_datetime)
            resTime = new Date(resTime.getTime() + resTime.getTimezoneOffset() * 60000)
            debugger
            return resTime > today
        })

        reservations.sort((a, b) => {
            return new Date(a.reservation_datetime) - new Date(b.reservation_datetime)
        })
        debugger
        return reservations.map((reservation, i) => {

            const restaurant = this.props.restaurants.filter(rest => rest.id === reservation.restaurant_id)[0]

            let resDate = new Date(reservation.reservation_datetime)
            resDate = new Date(resDate.getTime() + resDate.getTimezoneOffset() * 60000)
            const format = { year: 'numeric', month: 'short', day: 'numeric' }
            return (
                <div key={i} className="dd-res2">
                    <div className="dd-res-r2">
                        <h4 className="dd-res-name2">
                            <Link to={`restaurants/${restaurant.id}`}>{restaurant.name}</Link>
                        </h4 >
                        <div className="dd-res-inf2">
                            <span className="dd-res-gc">{reservation.guest_count > 1 ? `Table for ${reservation.guest_count} people` : `Table for ${reservation.guest_count} person`}</span>
                            <span className="dd-res-time">{resDate.toLocaleDateString(undefined, format)} {resDate.toLocaleTimeString().split(":").slice(0, 2).join(":")} {resDate.toLocaleTimeString().split(" ")[1]}</span>
                        </div>
                        <div className="dd-res-links2">
                            <Link to={{ pathname: `/reservations/${reservation.id}/view` }}>View</Link>
                            <Link to={{ pathname: `reservations/${reservation.id}/update` }}>Modify</Link>
                            <Link to={{ pathname: `reservations/${reservation.id}/delete` }}>Cancel</Link>
                        </div>
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
                    <div className="alt-uu-dropdown">
                        <div className="pointer3"></div>
                        <h2>UPCOMING</h2>
                        <p>You have no upcoming reservations</p>
                    </div>
                </div>

            )

        }
        return (
            <div>
                <div className="alt-uu-dropdown2">
                    <div className="pointer3-2"></div>
                    <h2>UPCOMING</h2>
                    <div className="uu-over2">
                        {this.reservations().slice(0, 4)}
                        <Link to={`/users/${this.props.currentUser.id}`}>View All</Link>
                    </div>
                </div>
            </div>
        )
    }
}

// export default UserUpcomingDropdown;

const mSTP = (state) => {
    return {
        currentUser: state.entities.users[state.session.id],
        reservations: state.entities.users[state.session.id].reservations,
        restaurants: state.entities.users[state.session.id].reserved_restaurants
    }
}

const mDTP = (dispatch) => ({

})

export default connect(mSTP, mDTP)(AltUserUpcomingDropdown)