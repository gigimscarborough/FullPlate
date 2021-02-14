import React from 'react'
import { Link } from 'react-router-dom'

class UserUpcomingDropdown extends React.Component {

    render() {

        return (
            <div>
                <div className="uu-dropdown">
                    <div className="pointer3"></div>
                    <h2>UPCOMING</h2>
                    <p>You have no upcoming reservations</p>
                </div>
            </div>

        )
    }
}

export default UserUpcomingDropdown;