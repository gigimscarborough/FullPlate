import React from 'react'
import AltUserUpcomingDropdown from './alt_user_upcoming_dropdown'


class AltClickUserUpcomingDropdown extends React.Component {
    constructor(props) {
        super(props)
        this.state = { clicked: false }
        this.whenClicked = this.whenClicked.bind(this)
    }

    whenClicked(e) {
        if (document.getElementById('alt-uu-dropdown')) {
            if (document.getElementById('alt-uu-dropdown').style.display === 'none') {
                document.getElementById('alt-uu-dropdown').style.display = 'block'
                this.setState({ clicked: true })
            }
            else {
                const status = !this.state.clicked
                this.setState({ clicked: status })
            }
        } else if (document.getElementById('alt-uu-dropdown2')) {
            if (document.getElementById('alt-uu-dropdown2').style.display === 'none') {
                document.getElementById('alt-uu-dropdown2').style.display = 'block'
                this.setState({ clicked: true })
            } else {
                const status = !this.state.clicked
                this.setState({ clicked: status })
            }
        } else {
            const status = !this.state.clicked
            this.setState({ clicked: status })
        }
        
        if (document.getElementById('alt-greeting-dropdown')) {
            document.getElementById('alt-greeting-dropdown').style.display = 'none'
        }
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