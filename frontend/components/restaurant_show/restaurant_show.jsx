import React from 'react'
import RestaurantShowNavBar from '../navbar/restaurant_show_navbar'
import Modal from '../modal'
import RestaurantShowContent from './restaurant_show_content'

class RestaurantShow extends React.Component{
    constructor(props){
        super(props)

        this.state = {restaurant: {}}
    }

    componentDidMount(){
        this.props.fetchRestaurant(this.props.match.params.restaurantId)
        .then(payload => this.setState({restaurant: payload.restaurant}))
  }

    render(){
        return(
            <div>
 
            <Modal/>
            <RestaurantShowNavBar restaurant={this.state.restaurant} openModal={this.props.openModal} logout={this.props.logout} currentUser={this.props.currentUser}/>
                <RestaurantShowContent restaurant={this.state.restaurant}/>
            </div>

        )
    }
}

export default RestaurantShow