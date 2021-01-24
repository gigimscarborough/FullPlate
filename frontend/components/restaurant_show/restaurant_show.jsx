import React from 'react'
import RestaurantShowNavBar from '../navbar/restaurant_show_navbar'
import Modal from '../modal'

class RestaurantShow extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
            <Modal/>
            <RestaurantShowNavBar openModal={this.props.openModal} logout={this.props.logout} currentUser={this.props.currentUser}/>
            </div>

        )
    }
}

export default RestaurantShow