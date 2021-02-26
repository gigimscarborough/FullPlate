import React from 'react'
import {Link} from 'react-router-dom'

class AlsoRests extends React.Component{
    constructor(props) {
        super(props)
    }

    restaurants(){
        const restaurant = Object.values(this.props.restaurants).filter(
            rest => rest.id == this.props.restaurantId
            )[0]
        const matches = Object.values(this.props.restaurants).filter(rest => ((rest.neighborhood === restaurant.neighborhood) || (rest.cuisine_type === restaurant.cuisine_type)) 
        // && rest.id === restaurant.id
         )

        return matches.map(restaurant => (
            <Link key={restaurant.id} className="rev-res-link" to={`/restaurants/${restaurant.id}`}>
                <div className="restaurant-icon">
                    {/* <img src={restaurant.photoUrls[first]}></img> */}
                    <img src={window.salmonplate}></img>
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
    }

    render(){
    
        return(

            <div className="also-rests">
            {this.restaurants()}
        </div>
    )
    }
} 

export default AlsoRests