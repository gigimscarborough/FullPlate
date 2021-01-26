import React from 'react'
import RestaurantShowNavBar from '../navbar/restaurant_show_navbar'
import Modal from '../modal'
import RestaurantShowContent from './restaurant_show_content'

class RestaurantShow extends React.Component{
    constructor(props){
        super(props)

        // tprops = {restaurant: {}}
    }

    componentDidMount(){
        debugger
        this.props.fetchRestaurant(this.props.match.params.restaurantId);
        // .then(payload => {
        //     debugger
        //     return thisprops({restaurant: payload.restaurant})
        // })
  }

    render(){
        debugger
        return(
            <div>
 
            <Modal/>
            <RestaurantShowNavBar restaurant={this.props.restaurant} openModal={this.props.openModal} logout={this.props.logout} currentUser={this.props.currentUser}/>
                <RestaurantShowContent restaurant={this.props.restaurant}/>
            </div>

        )
    }
}

export default RestaurantShow