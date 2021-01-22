import React from 'react'
import GreetingContainer from '../greeting/greeting_container'

class UserHeaderNavBar extends React.Component {
    render() {
        return (

            <div className="user-header">
                <h2>{this.props.currentUser.first_name} {this.props.currentUser.last_name}</h2>
                <p>Plate Professional</p>
            </div>
        )
    }
}

export default UserHeaderNavBar