import React from 'react'
import {Link} from 'react-router-dom'

class CancelConf extends React.Component {
    constructor(props) {
        super(props)

    }



    restaurants(){

        const qualRests = this.props.restaurants.filter( rest => rest.name !== this.props.restaurant.name)

        const restaurants = qualRests.map(restaurant => (
            <Link key={restaurant.id} id="res-link" to={`/restaurants/${restaurant.id}`}>
            <div className="restaurant-icon">
                <img src={restaurant.photoUrls[0]}></img>
                <div className="res-info">
                    <h2>{restaurant.name}</h2>
                </div>
                <span className="icn-strs">
                    <i className="fas fa-star ifpst"></i>
                    <i className="fas fa-star ifpst"></i>
                    <i className="fas fa-star ifpst"></i>
                    <i className="fas fa-star ifpst"></i>
                    <i className="fas fa-star-half ifpstr"></i>
                    <i className="fas fa-star-half fpstl"></i>
                    <p>{Math.floor(Math.random() * 75)} reviews</p>
                </span>
                <div>
                    <div className="dols2">
                        <p>{restaurant.cuisine_type} &bull;</p>
                        {restaurant.price_range === "$$" ? <div className="dols-in2"><span>$$</span><span className="g-dol2">$$</span></div> : restaurant.price_range === "$$$" ? <div className="dols-in2"><span>$$$</span><span className="g-dol2">$</span></div> : <div className="dols-in2"><span>$$$$</span></div>}
                        <p id="nei">&bull; {restaurant.neighborhood}</p>
                    </div>
                </div>
            </div>
        </Link>
    ))

    return restaurants
    }   
    
    render() {
        debugger
        
        const format = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' }


        // if (this.props.restaurants.length <= 0) {
      
            return (
                <div className="cncld-body">
                    <div className="cncld-main">
                        <span className="cncld-head">{this.props.currentUser.first_name}, your reservation has been canceled</span>
                        <span className="cncld-txt">You can still get great food and support {this.props.restaurant.name}.</span>
                        <div className="cncld-takeout">
                            <div>
                                <span><img src={window.resticon}></img> <p>Order takeout</p></span>
                                <p>Call {this.props.restaurant.phone_number} to place your order.</p>
                            </div>
                            <div>

                            <a href={this.props.restaurant.website_url}>Visit restaurant website</a>
                            </div>
                        </div>
                        <div className="cncl-del">
                            <h2>Get it delivered</h2>
                            <div className="cncl-list" >
                                {this.restaurants().slice(1, 5)}
                            </div>
                        </div>
                        <div className="cncl-list">
                            <h2>Make a new reservation</h2>
                        </div>
                    </div>
                </div>
            )
        
    }
}
export default CancelConf