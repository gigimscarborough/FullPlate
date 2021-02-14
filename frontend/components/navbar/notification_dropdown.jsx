import React from 'react'
import { Link } from 'react-router-dom'

class NotificationDropdown extends React.Component {

    render() {

        return (
            <div>
                <div className="notification-dropdown">
                    <div className="pointer"></div>
                    <h2>Notifications</h2>
                    <div className="bell-div">
                        <img id="bell-img" src={window.bell} />
                        <p>Never miss a plate! Notifications coming soon...</p>
                    </div>
                </div>
            </div>

        )
    }
}

export default NotificationDropdown;