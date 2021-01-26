import React from 'react'
import NotificationDropdown from './notification_dropdown'


class ClickNotificationDropdown extends React.Component {
    constructor(props) {
        super(props)
        this.state = { clicked: false }
        this.whenClicked = this.whenClicked.bind(this)
    }

    whenClicked(e) {
        const status = !this.state.clicked
        this.setState({ clicked: status })
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