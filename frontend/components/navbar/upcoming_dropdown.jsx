import React from 'react'
import { Link } from 'react-router-dom'

class UpcomingDropdown extends React.Component {

    render() {

        return (
            <div>
                <div className="upcoming-dropdown">
                <div className="pointer"></div>
                    <h2>Upcoming Reservations</h2>
                    <p>You have no upcoming reservations!</p>
                </div>
            </div>

        )
    }
}

export default UpcomingDropdown;