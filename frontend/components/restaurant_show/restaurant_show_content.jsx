import React from 'react'
import ReservationWidget from '../reservations/reservation_widget'

class ShowContent extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const priceRange = this.props.restaurant.price_range === "$$" ? "$30 and under" 
            : this.props.restaurant.price_range === "$$$" ? "$31 to $50" : "$50 and over"

        const menu = !this.props.restaurant.website_url ? "Sorry, this restaurant has not yet provided a menu"
            : <div><i className=" url-icon fas fa-external-link-alt"></i><a className="menu-url" href={this.props.restaurant.website_url}>Visit this restaurant's website to view the full menu</a></div>

        // const photos = this.props.restaurant.photoUrls.length === 1 ? "1 Photo" 
        // : this.props.restaurant.photoUrls.length > 1 ? `${this.props.restaurant.photoUrls.length} Photos` : "No Photos"
    

        return(
            <div className="res-content-div">
                <div className="rest-info-div">
                    <div className="rest-olinks">
                        <p>Overview</p>
                        <p>Photos</p>
                        <p>Menu</p>
                        <p>Reviews</p>
                    </div>
                    <div className="rest-name">
                        <h1>{this.props.restaurant.name}</h1>
                    </div>
                    <div className="rest-intro-div">
                        <p>Rating</p>
                        <i className="cmnt far fa-comment-alt"></i><p id="revs">Reviews</p>
                        <i className="fas fa-money-bill"></i><p>{priceRange}</p>
                        <i className="fas fa-utensils"></i><p>{this.props.restaurant.cuisine_type}</p>
                    </div>
                    <div className="rest-desc">
                        {this.props.restaurant.description}
                    </div>
                    <div className="rest-ph">
                        <h2>Photos</h2>
                        <div className="rest-photos">
                            <div className="photo-c1">
                                <div className="photo-r1">
                                    <img src={this.props.restaurant.photoUrls}/>
                                </div>
                                <div className="photo-r1">
                                    <img src={this.props.restaurant.photoUrls} />
                                </div>   
                            </div >
                            <div className="photo-c2">
                                <img src={this.props.restaurant.photoUrls} />
                            </div>
                            <div className="photo-c1">
                                <div className="photo-r1">
                                    <img src={this.props.restaurant.photoUrls} />
                                </div>
                                <div className="photo-r1">
                                    <img src={this.props.restaurant.photoUrls} />
                                </div>   
                            </div>
                            <div>

                            </div>
                        </div>
                    </div>
                    <div className="res-menu">
                        <h2>Menu</h2>
                        <p>{menu}</p>
                    </div>
                    <div className="res-revs">
                        <h2>What People Are Saying</h2>
                        <p>Overall Ratings and reviews</p>
                        <div className="res-rating">

                        <div className="rate-div-f">
                            <span>4.9</span><p>Food</p>
                        </div>
                        <div className="rate-div">
                            <span>4.6</span><p>Service</p>
                        </div>
                        <div className="rate-div">
                            <span>4.3</span><p>Ambience</p>
                        </div>
                        <div className="rate-div">
                            <span>4.3</span><p>Value</p>
                        </div>

                        </div>
                    </div>
                </div>
                <div className="reserve-div">
                    <ReservationWidget/>
                </div>
            </div>

        )
    }
}

export default ShowContent