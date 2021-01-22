import React from 'react'
import GreetingContainer from '../greeting/greeting_container'

class UserLinksNavBar extends React.Component {
    render() {
        return (

            <div className="user-links">
                <NavLink to={`/users/${this.props.currentUser.id}`} activeClassName="active-user-link">RESERVATIONS</NavLink>
                <NavLink to={`/users/${this.props.currentUser.id}`} activeClassName="active-user-link">FAVORITED RESTAURANTS</NavLink>
            </div>
        )
    }
}

export default UserLinksNavBar