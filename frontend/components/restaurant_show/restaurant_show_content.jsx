import React from 'react'
import ReservationWidget from '../reservations/reservation_widget'
import {HashLink as Link} from 'react-router-hash-link'

class ShowContent extends React.Component {
    constructor(props) {
        super(props)
    }

    

    render() {
        const restaurant = this.props.restaurant;
        if (typeof restaurant === "undefined") {

            return null;

        }

        const priceRange = this.props.restaurant.price_range === "$$" ? "$30 and under"
        : this.props.restaurant.price_range === "$$$" ? "$31 to $50" : "$50 and over"
        
        const menu = !this.props.restaurant.website_url ? "Sorry, this restaurant has not yet provided a menu"
        : <div><i className=" url-icon fas fa-external-link-alt"></i><a className="menu-url" href={this.props.restaurant.website_url}>Visit this restaurant's website to view the full menu</a></div>
        
        // const photos = this.props.restaurant.photoUrls.length === 1 ? "1 Photo" 
        // : this.props.restaurant.photoUrls.length > 1 ? `${this.props.restaurant.photoUrls.length} Photos` : "No Photos"
        
        // const operatingHours = 
        
        const first = 0
        const second = 1
        const third = 2
        const fourth = 3
        const fifth = 4
        
    
        return (
            <div className="res-content-div">
                <div className="rest-info-div" id="r-ov-link">
                    <div className="rest-olinks">
                        <Link to={`/restaurants/${this.props.restaurant.id}/#r-ov-link`}><p>Overview</p></Link>
                        <Link to={`/restaurants/${this.props.restaurant.id}/#r-ph-link`}><p>Photos</p></Link>
                        <Link to={`/restaurants/${this.props.restaurant.id}/#r-menu-link`}><p>Menu</p></Link>
                        <Link to={`/restaurants/${this.props.restaurant.id}/#r-reviews-link`}><p>Reviews</p></Link>
                    </div>
                    <div className="rest-name">
                        <h1>{this.props.restaurant.name}</h1>
                    </div>
                    <div className="rest-intro-div">
                        <span className="icn-strs3">
                            <i className="fas fa-star ifpst"></i>
                            <i className="fas fa-star ifpst"></i>
                            <i className="fas fa-star ifpst"></i>
                            <i className="fas fa-star ifpst"></i>
                            <i className="fas fa-star-half ifpstr"></i>
                            <i className="fas fa-star-half fpstl"></i>
                        </span>
                        <p>Rating</p>
                        <i className="cmnt  far2 far fa-comment-alt"></i><p id="revs">Reviews</p>
                        <i className="fas fa-money-bill"></i><p>{priceRange}</p>
                        <i className="fas fa-utensils"></i><p>{this.props.restaurant.cuisine_type}</p>
                    </div>
                    <div className="rest-desc">
                        {this.props.restaurant.description}
                    </div>
                    <div className="rest-ph" id="r-ph-link">
                        <a ><h2>Photos</h2></a>
                        <div className="rest-photos">
                            <div className="photo-c1">
                                <div className="photo-r1">
                                    <img src={this.props.restaurant.photoUrls[first]} />
                                </div>
                                <div className="photo-r1">
                                    <img src={this.props.restaurant.photoUrls[second]} />
                                </div>
                            </div >
                            <div className="photo-c2">
                                <img src={this.props.restaurant.photoUrls[third]} />
                            </div>
                            <div className="photo-c1">
                                <div className="photo-r1">
                                    <img src={this.props.restaurant.photoUrls[fourth]} />
                                </div>
                                <div className="photo-r1">
                                    <img src={this.props.restaurant.photoUrls[fifth]} />
                                </div>
                            </div>
                            <div>

                            </div>
                        </div>
                    </div>
                    <div id="r-menu-link" className="res-menu">
                        <h2>Menu</h2>
                        <p>{menu}</p>
                    </div>
                    <div className="res-revs" id="r-reviews-link">
                        <h2>What People Are Saying</h2>
                        <p className="res-rev-p">Overall Ratings and reviews</p>
                        <span className="icn-strs2">
                            <i className="fas fa-star ifpst2"></i>
                            <i className="fas fa-star ifpst2"></i>
                            <i className="fas fa-star ifpst2"></i>
                            <i className="fas fa-star ifpst2"></i>
                            <i className="fas fa-star-half ifpstr2"></i>
                            <i className="fas fa-star-half fpstl2"></i>
                            <p>4.5 overall based on average ratings</p>
                        </span>
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
                        <div className="res-nl">
                            <i className="fas fa-signal nl-bars"></i>
                            <p>Noise &bull;</p>
                            <p>{this.props.restaurant.noise_level}</p>
                        </div>
                        <div className="res-tu">
                            <i className="far fa-thumbs-up"></i>
                            <p>87% of people &nbsp;</p>
                            <p> would reccommend it to a friend</p>
                        </div>
                    </div>
                </div>
                <div className="reserve-div">
                    <ReservationWidget search={this.props.search}/>
                    <div className="rs-details">
                        <div className="rs-nei-det">
                            <div className="rs-nei-icn">
                                <i className="fas fa-map-marker-alt"></i>
                            </div>
                            <div className="rs-nei-p">
                                <p>Address</p>
                                <p>{this.props.restaurant.address}</p>
                            </div>
                        </div>
                        <div className="rs-nei-det">
                            <div className="rs-nei-icn">
                                <i className="fas fa-city"></i>
                            </div>
                            <div className="rs-nei-p">
                                <p>Neighborhood</p>
                                <p>{this.props.restaurant.neighborhood}</p>
                            </div>
                        </div>
                        <div className="rs-nei-det">
                            <div className="rs-nei-icn">
                                <i className="fas fa-phone-alt"></i>
                            </div>
                            <div className="rs-nei-p">
                                <p>Phone number</p>
                                <p>{this.props.restaurant.phone_number}</p>
                            </div>
                        </div>
                        <div className="rs-nei-det">
                            <div className="rs-nei-icn">
                                <i className="far fa-clock"></i>
                            </div>
                            <div className="rs-nei-p">
                                <p>Hours of operation</p>
                                <p>{this.props.restaurant.operation_hours}</p>
                            </div>
                        </div>
                        <div className="rs-nei-det">
                            <div className="rs-nei-icn">
                                <i className="fas fa-utensils"></i>
                            </div>
                            <div className="rs-nei-p">
                                <p>Cuisine Type</p>
                                <p>{this.props.restaurant.cuisine_type}</p>
                            </div>
                        </div>
                        <div className="rs-nei-det">
                            <div className="rs-nei-icn">
                                <i className="fas fa-concierge-bell"></i>
                            </div>
                            <div className="rs-nei-p">
                                <p>Dining Style</p>
                                <p>{this.props.restaurant.dining_style}</p>
                            </div>
                        </div>
                        <div className="rs-nei-det">
                            <div className="rs-nei-icn">
                                <i className="fas fa-tshirt"></i>
                            </div>
                            <div className="rs-nei-p">
                                <p>Dress Code</p>
                                <p>{this.props.restaurant.dress_code}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default ShowContent