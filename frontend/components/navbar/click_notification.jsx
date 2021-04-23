import React from 'react';
import NotificationDropdown from './notification_dropdown';


class ClickNotificationDropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = { clicked: false };
        this.whenClicked = this.whenClicked.bind(this);
    }

    whenClicked(e) {
        if (document.getElementById('notification-dropdown')) {
            if (document.getElementById('notification-dropdown').style.display === 'none') {
                document.getElementById('notification-dropdown').style.display = 'block';
                this.setState({ clicked: true });
            } else {

                const status = !this.state.clicked;
                this.setState({ clicked: status });
            }
        } else {

        const status = !this.state.clicked;
        this.setState({ clicked: status });
        }

        if (document.getElementById('user-dropdown')) {
            document.getElementById('user-dropdown').style.display = 'none';
        }
        if (document.getElementById('upcoming-dropdown')) {
            document.getElementById('upcoming-dropdown').style.display = 'none';
        }
        if (document.getElementById('alt-upcoming-dropdown')) {
            document.getElementById('alt-upcoming-dropdown').style.display = 'none';
        }

        
    }

    render() {
        return (
            <div>
                <i onClick={this.whenClicked} className="far2 far fa-bell"></i>
                {this.state.clicked ? <NotificationDropdown /> : null}
            </div>
        )
    }
}

export default ClickNotificationDropdown;