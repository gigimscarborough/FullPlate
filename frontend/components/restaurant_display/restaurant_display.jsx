import React from 'react'
import RestaurantIndexContainer from './restaurant_index_container'

class RestaurantDisplay extends React.Component{
    
    render (){
        const location = !this.props.currentUser ? "New York" : this.props.currentUser.dining_city
        
        return (
            <div className="restaurant-display">
                <div className="display-location">
                    <p>It looks like you're in {location}. </p>
                </div>
                <RestaurantIndexContainer/>
            </div>
        )
    }
}

export default RestaurantDisplay