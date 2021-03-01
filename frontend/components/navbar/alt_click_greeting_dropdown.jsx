import React from 'react'
import AltGreetingDropdown from './alt_greeting_dropdown'


class AltClickGreetingDropdown extends React.Component {
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

        const currentUser = this.props.currentUser;
        if (typeof currentUser === "undefined") {

            return null;

        }

        return (
            <div className="greeting" onClick={this.whenClicked}>
                <p>
                    Hi, {this.props.currentUser.first_name}
                </p>
                <div className="greeting-angle"></div>
                {this.state.clicked ? <AltGreetingDropdown logout={this.props.logout} currentUser={this.props.currentUser} /> : null}
            </div>
        )
    }
}

export default AltClickGreetingDropdown;