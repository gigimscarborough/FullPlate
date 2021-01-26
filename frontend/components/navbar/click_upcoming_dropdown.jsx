import React from 'react'
import UpcomingDropdown from './upcoming_dropdown'


class ClickUpcomingDropdown extends React.Component {
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
                <i onClick={this.whenClicked} className="far2 far fa-calendar"></i>
                {this.state.clicked ? <UpcomingDropdown /> : null}
            </div>
        )
    }
}

export default ClickUpcomingDropdown;