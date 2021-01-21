import React from 'react'
import { Link } from 'react-router-dom'
import ClickUserDropdown from '../navbar/click_user_dropdown'
import ClickUpcomingDropdown from '../navbar/click_upcoming_dropdown'
import ClickNotificationDropdown from '../navbar/click_notification'

class Greeting extends React.Component {
    constructor(props) {
        super(props)

    }


    render() {
        
        if (this.props.currentUser) {
            
            return (
                    <ul className="logged-links">
                        <li>
                            <ClickUserDropdown/>
                        </li>
                        <li>
                            <ClickUpcomingDropdown/>
                        </li>
                        <li><ClickNotificationDropdown/></li>
                        <Link className="search-icon lsearch" to="/"><img src={window.search_icon} /></Link>
                        {/* <h1>Welcome, {this.props.currentUser.first_name}!</h1>
                        <button onClick={this.props.logout.bind(this)}>Log Out</button> */}
                    </ul>
            )
        } else {
            
            return (
                    <div className="not-logged-links">
                        <button className="sign-up-btn" onClick={() => this.props.openModal('signup')}> Sign up</button>
                        <button className="log-in-btn" onClick={() => this.props.openModal('login')}> Sign in </button>
                        <Link className="search-icon" to="/"><img src={window.search_icon} /></Link>
                    </div>
            )
        }

    }

}



export default Greeting;