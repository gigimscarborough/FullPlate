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
                        <li onClick={() => this.props.openModal('search')}className="search-icon lsearch"><img src={window.search_icon} /></li>
                    </ul>
            )
        } else {
            
            return (
                    <div className="not-logged-links">
                        <button className="sign-up-btn" onClick={() => this.props.openModal('signup')}> Sign up</button>
                        <button className="log-in-btn" onClick={() => this.props.openModal('login')}> Sign in </button>
                        <li onClick={() => this.props.openModal('search')} className="search-icon lsearch"><img src={window.search_icon} /></li>
                    </div>
            )
        }

    }

}



export default Greeting;