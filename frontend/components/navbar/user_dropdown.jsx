import React from 'react';
import {Link} from 'react-router-dom';

class UserDropdown extends React.Component {

    render(){

        return(
            <div>
                <div id="user-dropdown" className="user-dropdown">
                    <div className="pointer"></div>
                    <div id="user-greeting-div">
                    <h2 id="user-greeting">Hello, {this.props.currentUser.first_name}!</h2>
                </div>
            <ul>
                <li><Link to={`/users/${this.props.currentUser.id}`}>My Profile</Link></li>
                <li><Link to={`/users/${this.props.currentUser.id}`}>My Dining History</Link></li>
                <li><Link to={`/users/${this.props.currentUser.id}`}>My Saved Restaurants</Link></li>
                <li id="user-logout" onClick={this.props.logout.bind(this)}>Sign Out</li>
            </ul>
            </div>
            </div>
    
        )
    }
}

export default UserDropdown;