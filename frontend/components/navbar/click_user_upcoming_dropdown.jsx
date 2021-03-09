import React from 'react'
import UserUpcomingDropdown from './user_upcoming_dropdown'


class ClickUserUpcomingDropdown extends React.Component {
    constructor(props) {
        super(props)
        this.state = { clicked: false }
        this.whenClicked = this.whenClicked.bind(this)
    }

    whenClicked(e) {

        if (document.getElementById('uu-dropdown')) {
            if (document.getElementById('uu-dropdown').style.display === 'none') {
                document.getElementById('uu-dropdown').style.display = 'block'
                this.setState({ clicked: true })
            }
            else {
                const status = !this.state.clicked
                this.setState({ clicked: status })
            }
        } else if(document.getElementById('uu-dropdown2')) {
            if (document.getElementById('uu-dropdown2').style.display === 'none') {
            document.getElementById('uu-dropdown2').style.display = 'block'
            this.setState({ clicked: true })
            } else {
                const status = !this.state.clicked
                this.setState({ clicked: status })
            }
        } else {
            const status = !this.state.clicked
            this.setState({ clicked: status })
        }

        if (document.getElementById('greeting-dropdown')) {
            document.getElementById('greeting-dropdown').style.display = 'none'
        }

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