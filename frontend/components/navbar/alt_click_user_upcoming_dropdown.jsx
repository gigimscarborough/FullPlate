import React from 'react'
import AltUserUpcomingDropdown from './alt_user_upcoming_dropdown'


class AltClickUserUpcomingDropdown extends React.Component {
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
                {this.state.clicked ? <AltUserUpcomingDropdown /> : null}
            </div>
        )
    }
}

export default AltClickUserUpcomingDropdown;