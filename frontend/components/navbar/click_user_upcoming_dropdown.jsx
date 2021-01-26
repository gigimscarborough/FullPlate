import React from 'react'
import UserUpcomingDropdown from './user_upcoming_dropdown'


class ClickUserUpcomingDropdown extends React.Component {
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
                <i onClick={this.whenClicked} className=" far2 far fa-calendar-alt"></i>
                {this.state.clicked ? <UserUpcomingDropdown /> : null}
            </div>
        )
    }
}

export default ClickUserUpcomingDropdown;