import React from 'react';
import { Link } from 'react-router-dom';

import MainNavBar from './main_navbar';
import ClickUserUpcomingDropdown from './click_user_upcoming_dropdown';
import ClickGreetingDropdown from './click_greeting_dropdown';
import UserHeaderNavBar from './user_header_navbar';

const UserNavBar = (props) => {

        return (
            <div>
                <MainNavBar />
                <div className="logo-nav">
                    <div className='logo-div'>
                        <Link className="logo" to="/"><img src={window.logo} /></Link>
                        <div className="copy-r">&copy;</div>
                    </div>
                    <ul className="user-link-list">
                        <ClickUserUpcomingDropdown/>
                        <ClickGreetingDropdown logout={props.logout} currentUser={props.currentUser}/>
                    </ul>
                </div>
                <UserHeaderNavBar currentUser={props.currentUser}/>
            </div>
        );
}

export default UserNavBar;