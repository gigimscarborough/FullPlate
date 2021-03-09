import React from 'react'
import GreetingDropdown from './greeting_dropdown'


class ClickGreetingDropdown extends React.Component {
    constructor(props) {
        super(props)
        this.state = { clicked: false }
        this.whenClicked = this.whenClicked.bind(this)

    }

    whenClicked(e) {

        if (document.getElementById('greeting-dropdown')) {
            if (document.getElementById('greeting-dropdown').style.display === 'none') {
                document.getElementById('greeting-dropdown').style.display = 'block'
                this.setState({ clicked: true })
            }
            else {
                const status = !this.state.clicked
                this.setState({ clicked: status })
            }
        } else {
          
            const status = !this.state.clicked
            this.setState({ clicked: status })
        }
       

        if (document.getElementById('uu-dropdown')) {
            document.getElementById('uu-dropdown').style.display = 'none'
        }
        if (document.getElementById('uu-dropdown2')) {
            document.getElementById('uu-dropdown2').style.display = 'none'
        }
      
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
                {this.state.clicked ? <GreetingDropdown logout={this.props.logout} currentUser={this.props.currentUser}/> : null}
            </div>
        )
    }
}

export default ClickGreetingDropdown;