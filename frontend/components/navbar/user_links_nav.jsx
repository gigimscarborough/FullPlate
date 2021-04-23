import React from 'react'
import GreetingContainer from '../greeting/greeting_container'

const UserLinksNavBar = (props) => {
    return (
        <div className="user-links">
            <NavLink to={`/users/${props.currentUser.id}`} activeClassName="active-user-link">RESERVATIONS</NavLink>
            <NavLink to={`/users/${props.currentUser.id}`} activeClassName="active-user-link">FAVORITED RESTAURANTS</NavLink>
        </div>
    );
}

export default UserLinksNavBar;