import React from 'react'
import { Link } from 'react-router-dom'

class AltGreetingDropdown extends React.Component {

    render() {
        return (
            <div>
                <div id="alt-greeting-dropdown" className="alt-greeting-dropdown">
                    <div className="pointer2"></div>
                    <div id="greeting-header-div">
                        <h2 >Start Earning Dining Points Coming Soon!</h2>
                    </div>
                    <ul>
                        <li><Link to={`/users/${this.props.currentUser.id}`}>My Profile</Link></li>
                        <li><Link to={`/users/${this.props.currentUser.id}`}>My Dining History</Link></li>
                        <li><Link to={`/users/${this.props.currentUser.id}`}>My Saved Restaurants</Link></li>
                        <li onClick={this.props.logout.bind(this)}>Sign Out</li>
                    </ul>
                </div>
            </div>

        )

    }
}

export default AltGreetingDropdown;