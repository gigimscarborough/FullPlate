import React from 'react';
import { Link } from 'react-router-dom';
import ReviewStars from '../reviews/review_stars'


class RestaurantIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchRestaurants();
        // this.props.fetchReviews()
    }

    render() {
        const first = 0;
        
        
        const restaurants = this.props.restaurants.map(restaurant => {

            let matches = this.props.reviews.filter(review => review.restaurant_id === restaurant.id)
           
            // let count = 0

            // for (let i = 0; i < matches.length; i++) {
            //     count += matches[i].overall_rating
            // }
            
            // count =  Math.round((count / matches.length) * 10) / 10

            return(
            <Link key={restaurant.id} id="res-link" to={`/restaurants/${restaurant.id}`}>
                <div className="restaurant-icon">
                    {/* <img src={restaurant.photoUrls[first]}></img> */}
                    <img src={window.salmonplate}></img>
                    <div className="res-info">
                        <h2>{restaurant.name}</h2>
                    </div>
                    {/* <span className="icn-strs"> */}
                        {/* <i className="fas fa-star ifpst"></i>
                        <i className="fas fa-star ifpst"></i>
                        <i className="fas fa-star ifpst"></i>
                        <i className="fas fa-star ifpst"></i>
                        <i className="fas fa-star-half ifpstr"></i>
                        <i className="fas fa-star-half fpstl"></i> */}
                        <ReviewStars 
                        reviews={this.props.reviews} fetchReviews={this.props.fetchReviews} restaurantId={restaurant.id}
                        />
                        {/* <p>{matches.length} reviews</p> */}
                    {/* </span> */}
                    <div>
                        <div className="dols2">
                        <p>{restaurant.cuisine_type} &bull;</p>
                            {restaurant.price_range === "$$" ? <div className="dols-in2"><span>$$</span><span className="g-dol2">$$</span></div> : restaurant.price_range === "$$$" ? <div className="dols-in2"><span>$$$</span><span className="g-dol2">$</span></div> : <div className="dols-in2"><span>$$$$</span></div>}
                            <p id="nei">&bull; {restaurant.neighborhood}</p>
                        </div>
                    </div>
                </div>
            </Link>
        )})


        return (
            <div>
                <h2 className="about-fp">Whenever, wherever you're hungry - find it on FullPlate</h2>
                <div className="about-div">
                    <div><div className="about-lunch"></div><h2>Lunch is on us</h2><p>Switch up your boring lunch routine today.</p></div>
                    <div><div className="about-date"></div><h2>Make date night a breeze</h2><p>Never stress about getting a table again.</p></div>
                    <div><div className="about-global"></div><h2>Sample the globe</h2><p>Find exotic picks in your own backyard.</p></div>
                    <div><div className="about-corona"></div><h2>Dine safely with our partners</h2><p>Support local restaurants committed to keeping you safe.</p></div>
                </div>
                <div className="res-header">
                    <h2>Restaurants Nearby</h2>
                </div>
                {/* <div className="slider-1">
                    <div className="scroll-left1"></div> */}
                <div className="res-icon-cont">
                    {restaurants.slice(0, 5)}   
                </div>
                    {/* <div className="scroll-right1"></div>
                </div> */}
                <div className="res-header">
                    <h2>Most Popular</h2>
                </div>
                <div className="res-icon-cont">
                    {restaurants.reverse().slice(0, 5)}
                </div>
                <div className="res-header">
                    <h2>Top Rated</h2>
                </div>
                <div className="res-icon-cont">
                    {restaurants.slice(3, 6).concat(restaurants.reverse().slice(3, 5))}
                </div>
            </div>

        )
    }
}

export default RestaurantIndex