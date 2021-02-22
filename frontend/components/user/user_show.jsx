import React from 'react'
import UserNavBar from '../navbar/user_navbar'
import { HashLink as Link } from 'react-router-hash-link'

class UserShow extends React.Component {

    constructor(props) {
        super(props)

        this.reservations = this.reservations.bind(this)
        this.pastRes = this.pastRes.bind(this)
    }

    componentDidMount() {
        this.props.fetchRestaurants()
        // this.props.fetchReservations()
        // this.props.fetchUser(this.props.currentUser.id)
    }

    reservations() {
        const today = new Date()
        const allRests = Object.values(this.props.restaurants)
        const rests = this.props.currentUser.reserved_restaurants

        
        const reservations = this.props.currentUser.reservations.filter(res => new Date(res.reservation_datetime) > today)
        const resList = []
        
        debugger

        for (let i = 0; i < reservations.length; i++) {
            let resDate = new Date(reservations[i].reservation_datetime)
            resDate = new Date(resDate.getTime() + resDate.getTimezoneOffset() * 60000)

            resList.push(
                (
                    <div className="reservation-it">
                        <div>
                            {/* <Link to={`/restaurants/${reservations[i].restaurant_id}`}><img id="u-res-pic" src={allRests.filter(rest => (rest.id === reservations[i].restaurant_id))[0].photoUrls[0]} alt="" /></Link> */}
                            <Link to={`/restaurants/${reservations[i].restaurant_id}`}><img id="u-res-pic" src={ window.salmonplate } alt="" /></Link>
                        </div>
                        <div className="u-res-info-div">
                            <div class="u-res-name">
                                <Link to={`/restaurants/${reservations[i].restaurant_id}`}><span>{rests.filter(rest => (rest.id === reservations[i].restaurant_id))[0].name}</span></Link>
                            </div>
                            <div>
                                <span >
                                    {new Date(reservations[i].reservation_datetime).toLocaleDateString()} at {resDate.toLocaleTimeString().split(":").slice(0, 2).join(":")} {resDate.toLocaleTimeString().split(" ")[1]}.
                                </span>

                            </div>
                            <div>
                                <span>{reservations[i].guest_count === 1 ? "Table for 1 person." : `Table for ${reservations[i].guest_count} people.`}</span>
                            </div >
                            <div className="edit-res">
                                <Link to={`/reservations/${reservations[i].id}/view`}><a>View</a></Link>
                                <Link to={`/reservations/${reservations[i].id}/view`}><a>Modify</a></Link>
                                <Link to={{ pathname: `/reservations/${reservations[i].id}/delete` }}><a>Cancel</a></Link>
                            </div>
                            <div>

                            </div>
                        </div>
                    </div>
                )
            )
        }

        return resList
    }

    pastRes() {
        const today = new Date()
        const allRests = Object.values(this.props.restaurants)
        const rests = this.props.currentUser.reserved_restaurants
    

        const reservations = this.props.currentUser.reservations.filter(res => new Date(res.reservation_datetime) < today)
        const resList = []

        for (let i = 0; i < reservations.length; i++) {

            resList.push(
                (

                    <div className="reservation-it">
                        <div>
                            {/* <Link to={`/restaurants/${reservations[i].restaurant_id}`}><img id="u-res-pic" src={allRests.filter(rest => (rest.id === reservations[i].restaurant_id))[0].photoUrls[0]} alt="" /></Link> */}
                            <Link to={`/restaurants/${reservations[i].restaurant_id}`}><img id="u-res-pic" src={window.salmonplate} alt="" /></Link>
                        </div>
                        <div className="u-res-info-div">
                            <div class="u-res-name">
                                <Link to={`/restaurants/${reservations[i].restaurant_id}`}><span>{rests.filter(rest => (rest.id === reservations[i].restaurant_id))[0].name}</span></Link>
                            </div>
                            <div class="u-res-name">
                                <span >
                                    {new Date(reservations[i].reservation_datetime).toLocaleDateString()}
                                </span>

                            </div>
                            <div>
                                <span>{reservations[i].guest_count === 1 ? "Table for 1 person." : `Table for ${reservations[i].guest_count} people.`}</span>
                            </div >
                            <div className="fav-me">
                                <i class="far fa-bookmark"></i>
                                <span>Save this restaurant</span>
                            </div>
                            <div>

                            </div>
                        </div>

                    </div>
                )
            )
        }

        return resList
    }

    



    render() {
       

        if (Object.values(this.props.restaurants) <= 0) {
            return null
        } 
        
        if (typeof this.props.restaurants === 'undefined'){
            return null
        }

        if (typeof this.props.reservations === 'undefined') {
            return null
        }
        
        else {



            // debugger
            // const rests = this.props.currentUser.reserved_restaurants
            //         const reservations = this.props.currentUser.reservations.map( reservation => 
            //             // {
            //                 // debugger
            //             // return
            //             (
            //             <div className="reservation-it">
            //                 <div>
            //                     <p>{rests.filter(rest => (rest.id === reservation.restaurant.id))[0].name}</p>
            //                 </div>
            //                 <div>
            //                     <p>
            //                     {new Date(reservation.reservation_datetime).toDateString()} at {new Date(reservation.reservation_datetime).toLocaleTimeString()}
            //                     </p>

            //                 </div>
            //                  <div>
            //                     <p>{reservation.guest_count === 1 ? "Table for 1 person" : `Table for ${reservation.guest_count} people`}</p>
            //                 </div >
            //                 <div>

            //                 </div>

            //             </div>
            //             )
            // // }


            // )



            return (
                <div>
                    <UserNavBar logout={this.props.logout} currentUser={this.props.currentUser} />
                    <div className="show-cntnt">
                        <div className="inner-shw-cntnt">

                            <div className="show-u-links">
                                <Link to={`/users/${this.props.currentUser.id}/#reserv`}><p>Reservations</p></Link>
                                <Link to={`/users/${this.props.currentUser.id}/#past`}><p>Past Reservations</p></Link>
                                <Link to={`/users/${this.props.currentUser.id}/#savres`}><p>Saved&nbsp;Restaurants</p></Link>
                                <Link to={`/users/${this.props.currentUser.id}/#pts`}><p>Points</p></Link>
                            </div>
                            <div className="show-u-tbs">
                                <div id="reserv" className="usdiv us-ur">
                                    <div className="sep">
                                        <h1>
                                            Upcoming Reservations
                                    </h1>
                                    </div >
                                    <div className=" iter">
                                        {this.reservations().length === 0 ? <p>You have no upcoming reservations.</p> : this.reservations()}
                                    </div>
                                </div >
                                <div id="past" className="usdiv us-pr">
                                    <div className="sep">
                                        <h1>
                                            Past Reservations
                                    </h1>
                                    </div>
                                    <div className="btm">
                                        <div className="past-hold">
                                            {this.pastRes().length === 0 ? <p>You have no previous reservations to show on this list.</p> : this.pastRes()}
                                        </div>
                                    </div>
                                </div >
                                <div id="savres" className="usdiv us-sr">
                                    <div className="sep">
                                        <h1>
                                            Saved Restaurants
                                    </h1>
                                    </div>
                                    <div className="btm">
                                        <p>You have no favorite restaurants to show on this list.</p>
                                    </div>
                                </div >
                                <div id="pts" className="usdiv us-up">
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
}


export default UserShow