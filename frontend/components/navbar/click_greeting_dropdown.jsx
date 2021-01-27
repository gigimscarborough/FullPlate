import React from 'react'
import GreetingDropdown from './greeting_dropdown'


class ClickGreetingDropdown extends React.Component {
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
                    <i className="fas fa-angle-down greeting-angle"></i>
                {this.state.clicked ? <GreetingDropdown logout={this.props.logout} currentUser={this.props.currentUser}/> : null}
            </div>
        )
    }
}

export default ClickGreetingDropdown;