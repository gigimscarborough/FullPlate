import React from 'react';

const NotificationDropdown = () => {
    return (
        <div>
            <div id="notification-dropdown" className="notification-dropdown">
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

export default NotificationDropdown;