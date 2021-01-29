import React from 'react'
import UserNavBar from '../navbar/user_navbar'
import { HashLink as Link } from 'react-router-hash-link'

class UserShow extends React.Component {

    componentDidMount() {
        this.props.fetchReservations()
        
    }





    render() {
            
            const reservations = this.props.currentUser.reservations.map( reservation => (
                <div className="reservation-it">
                    <div>
                        <p>
                        {new Date(reservation.reservation_datetime).toDateString()} at {new Date(reservation.reservation_datetime).toLocaleTimeString()}
                        </p>

                    </div>
                     <div>
                        <p>{reservation.guest_count === 1 ? "Table for 1 person" : `Table for ${reservation.guest_count} people`}</p>
                    </div >
                    <div>
                       
                    </div>
               
                </div>
            ))
            
        
        
        return (
            <div>
                <UserNavBar logout={this.props.logout} currentUser={this.props.currentUser} />
                <div className="show-cntnt">
                    <div className="inner-shw-cntnt">

                        <div className="show-u-links">
                            <Link to={`/users/${this.props.currentUser.id}/#reserv`}><p>Reservations</p></Link>
                            <Link to={`/users/${this.props.currentUser.id}/#savres`}><p>Saved&nbsp;Restaurants</p></Link>
                            <Link to={`/users/${this.props.currentUser.id}/#pts`}><p>Points</p></Link>
                        </div>
                        <div className="show-u-tbs">
                            <div id="reserv" className="us-ur">
                                <div className="sep">
                                    <h1>
                                        Upcoming Reservations
                                    </h1>
                                </div >
                                <div className=" iter">
                                    {reservations.length === 0 ? <p>You have no upcoming reservations.</p> : reservations  }
                                </div>
                            </div >
                        <div id="savres" className="us-sr">
                                <div className="sep">
                                    <h1>
                                        Saved Restaurants
                                    </h1>
                                </div>
                                <div className="btm">
                                    <p>You have no favorite restaurants to show on this list.</p>
                                </div>
                            </div >
                    <div id="pts"className="us-up">
                                <div className="sep">
                                    <h1>
                                        Points
                                    </h1>
                                </div>
                                <div className="btm">
                                    <p>Keep an eye out for opportunities to earn dining points on FullPlate. Coming soon!</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

        )
    }
}


export default UserShow