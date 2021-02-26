import React from 'react'
import UserNavBar from '../navbar/user_navbar'
import { HashLink as Link } from 'react-router-hash-link'
import Rating from 'react-rating';
import ReactStars from 'react-stars';
// import ReactStars from 'react-rating-stars-component';

class UserShow extends React.Component {

    constructor(props) {
        super(props)

        this.reservations = this.reservations.bind(this)
        this.pastRes = this.pastRes.bind(this)
        this.savedRests = this.savedRests.bind(this)
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


        const reservations = this.props.currentUser.reservations.filter(function (res) {
            let resTime = new Date(res.reservation_datetime)
            resTime = new Date(resTime.getTime() + resTime.getTimezoneOffset() * 60000)

            return resTime > today
        })
        const resList = []



        for (let i = 0; i < reservations.length; i++) {
            let resDate = new Date(reservations[i].reservation_datetime)
            resDate = new Date(resDate.getTime() + resDate.getTimezoneOffset() * 60000)

            resList.push(
                (
                    <div key={i} className="reservation-it">
                        <div>
                            {/* <Link to={`/restaurants/${reservations[i].restaurant_id}`}><img id="u-res-pic" src={allRests.filter(rest => (rest.id === reservations[i].restaurant_id))[0].photoUrls[0]} alt="" /></Link> */}
                            <Link to={`/restaurants/${reservations[i].restaurant_id}`}><img id="u-res-pic" src={window.salmonplate} alt="" /></Link>
                        </div>
                        <div className="u-res-info-div">
                            <div className="u-res-name">
                                <Link to={`/restaurants/${reservations[i].restaurant_id}`}><span>{rests.filter(rest => (rest.id === reservations[i].restaurant_id))[0].name}</span></Link>
                            </div>
                            <div>
                                <span >
                                    {resDate.toLocaleDateString()} at {resDate.toLocaleTimeString().split(":").slice(0, 2).join(":")} {resDate.toLocaleTimeString().split(" ")[1]}.
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


        const reservations = this.props.currentUser.reservations.filter(function (res) {
            let resTime = new Date(res.reservation_datetime)
            resTime = new Date(resTime.getTime() + resTime.getTimezoneOffset() * 60000)

            return resTime < today
        })
        const resList = []
        const favs = this.props.currentUser.favorites
        const reviews = this.props.currentUser.reviews


        for (let i = 0; i < reservations.length; i++) {
            let resDate = new Date(reservations[i].reservation_datetime)
            resDate = new Date(resDate.getTime() + resDate.getTimezoneOffset() * 60000)

            const thisFav = favs.filter(fav => fav.restaurant_id === reservations[i].restaurant_id)[0]

            const favBtn = !thisFav ? (
                <div onClick={() => this.props.createFavorite({ user_id: this.props.currentUser.id, restaurant_id: reservations[i].restaurant_id }).then(() => this.props.fetchUser(this.props.currentUser.id))} className="fav-me">
                    <i className="far fa-bookmark"></i>
                    <span>Save this restaurant</span>
                </div>
            ) : (
                    <div onClick={() => this.props.deleteFavorite(thisFav.id).then(() => this.props.fetchUser(this.props.currentUser.id))} className="fav-me">
                        <i className="fas fa-bookmark"></i>
                        <span>Restaurant saved</span>
                    </div>
                )

            const resRest = rests.filter(rest => (rest.id === reservations[i].restaurant_id))[0]

            const thisRev = reviews.filter(review => review.reservation_id === reservations[i].id)[0]
            const revBtn = !thisRev ? (
                <Link to={{ pathname: `/restaurants/${resRest.id}/reservations/${reservations[i].id}/review` }} className="fav-me">
                    <i className="far fa-comment-alt"></i>
                    <span>Write Review</span>
                </Link>
            ) : (
                    <Link to={{ pathname: `/restaurants/${resRest.id}/reservations/${reservations[i].id}/review` }} className="fav-me">
                        <i className="far fa-comment-alt"></i>
                        <span>Edit Review</span>
                    </Link>
                )
            const revDet = thisRev ? (
                <div className="us-revdet">
                    <h4>
                        On {new Date(thisRev.created_at).toLocaleDateString()} you wrote
                    </h4>
                    <span className="us-revbody">
                        {thisRev.body}
                    </span>
                    <span className="rtngs-sec">
                        <span className="rtngs-sin">
                            <span>OVERALL</span>
                            <ReactStars
                                className="past-stars"
                                id="past-str"
                                count={5}
                                value={thisRev.overall_rating}
                                color1={'lightgray'}
                                color2={'rgb(231, 165, 89)'}
                                size={17}
                                edit={false}
                            />
                        </span>
                        <span className="rtngs-sin">
                            <span>FOOD</span>
                            <ReactStars
                                className="past-stars"
                                id="past-str"
                                count={5}
                                value={thisRev.food_rating}
                                color1={'lightgray'}
                                color2={'rgb(231, 165, 89)'}
                                size={17}
                                edit={false}
                            />
                        </span>
                        <span className="rtngs-sin">
                            <span>SERVICE</span>
                            <ReactStars
                                className="past-stars"
                                id="past-str"
                                count={5}
                                value={thisRev.service_rating}
                                color1={'lightgray'}
                                color2={'rgb(231, 165, 89)'}
                                size={17}
                                edit={false}
                            />
                        </span>
                    </span>
                    <span className="rtngs-sec">
                        <span className="rtngs-sin">
                            <span>AMBIENCE</span>
                            <ReactStars
                                className="past-stars"
                                id="past-str"
                                count={5}
                                value={thisRev.ambience_rating}
                                color1={'lightgray'}
                                color2={'rgb(231, 165, 89)'}
                                size={17}
                                edit={false}
                            />
                        </span>
                        <span className="rtngs-sin">
                            <span>VALUE</span>
                            <ReactStars
                                className="past-stars"
                                id="past-str"
                                count={5}
                                value={thisRev.value_rating}
                                color1={'lightgray'}
                                color2={'rgb(231, 165, 89)'}
                                size={17}
                                edit={false}
                            />
                        </span>
                    </span>
                </div>
            ) : null

            debugger

            resList.push(
                (

                    <div key={i} className="reservation-it">
                        <div>
                            {/* <Link to={`/restaurants/${reservations[i].restaurant_id}`}><img id="u-res-pic" src={allRests.filter(rest => (rest.id === reservations[i].restaurant_id))[0].photoUrls[0]} alt="" /></Link> */}
                            <Link to={`/restaurants/${reservations[i].restaurant_id}`}><img id="u-res-pic" src={window.salmonplate} alt="" /></Link>
                        </div>
                        <div className="u-res-info-div">
                            <div className="u-res-name">
                                <Link to={`/restaurants/${reservations[i].restaurant_id}`}><span>{resRest.name}</span></Link>
                            </div>
                            <div className="u-res-name">
                                <span >
                                    {resDate.toLocaleDateString()}
                                </span>

                            </div>
                            <div>
                                <span>{reservations[i].guest_count === 1 ? "Table for 1 person." : `Table for ${reservations[i].guest_count} people.`}</span>
                            </div >
                            <div className="fav-me-div">
                                {/* <Link to={{ pathname: `/restaurants/${resRest.id}/reservations/${reservations[i].id}/review` }} className="fav-me">
                            <i className="far fa-comment-alt"></i>
                            <span>Write Review</span>
                            </Link> */}
                                {revBtn}
                                {favBtn}
                            </div>
                            {revDet}

                        </div>

                    </div>
                )
            )
        }

        return resList
    }

    savedRests() {

        const allRests = Object.values(this.props.restaurants)
        const favs = this.props.currentUser.favorites.map(fav => fav.restaurant_id)
        const theseFavs = allRests.filter(rest => favs.includes(rest.id))

        const favsList = []

        for (let i = 0; i < theseFavs.length; i++) {
            favsList.push(
                <div key={i} className="fav-hold">
                    <div className="fav-it">
                        <div>
                            {/* <Link to={`/restaurants/${theseFavs[i].id}`}><img id="u-res-pic" src={theseFavs[i].photoUrls[0]} alt="" /></Link> */}
                            <Link to={`/restaurants/${theseFavs[i].id}`}><img id="u-res-pic" src={window.salmonplate} alt="" /></Link>
                        </div>
                        <div className="u-res-info-div">
                            <div className="u-res-name">
                                <Link to={`/restaurants/${theseFavs[i].restaurant_id}`}><span>{theseFavs[i].name}</span></Link>
                            </div>
                            <div onClick={() => this.props.deleteFavorite(thisFav.id).then(() => this.props.fetchUser(this.props.currentUser.id))} id="rem-fav">
                                <i className="fas fa-bookmark"></i>
                                <span>Remove from saved restaurants</span>
                            </div>
                            <span className="icn-strs4">
                                <i className="fas fa-star ffpst"></i>
                                <i className="fas fa-star ffpst"></i>
                                <i className="fas fa-star ffpst"></i>
                                <i className="fas fa-star ffpst"></i>
                                <i className="fas fa-star-half ffpstr"></i>
                                <i className="fas fa-star-half ffpstl"></i>
                            </span>
                            <div className="fav-det">
                                <span>{theseFavs[i].cuisine_type}</span> <div id="fav-brdr"></div><span>{theseFavs[i].neighborhood}</span>
                            </div>

                        </div>
                    </div>
                    <Link to={`/restaurants/${theseFavs[i].id}`}><button id="fav-reserve">Reserve Now</button></Link>

                </div>
            )

        }

        return favsList


    }





    render() {


        if (Object.values(this.props.restaurants) <= 0) {
            return null
        }

        if (typeof this.props.restaurants === 'undefined') {
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
                                        <div className="past-hold">
                                            {this.savedRests().length === 0 ? <p>You have no favorite restaurants to show on this list.</p> : this.savedRests()}
                                        </div>
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