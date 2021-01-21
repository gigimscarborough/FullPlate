import React from 'react'
import { Link } from 'react-router-dom'
import UserDropdown from '../navbar/user_dropdown_container'

class Greeting extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        
        if (this.props.currentUser) {
            
            return (
                    <ul className="logged-links">
                        <li>
                        <i onClick={this.props.logout.bind(this)} className="far fa-user-circle"></i>
                            <UserDropdown/>
                        </li>
                        <li><i className="far fa-calendar"></i></li>
                        <li><i className="far fa-bell"></i></li>
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