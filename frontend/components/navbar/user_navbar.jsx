import React from 'react'
import { Link } from 'react-router-dom'

import MainNavBar from './main_navbar'

class UserNavBar extends React.Component {

    render() {
        return (
            <div>
                <MainNavBar />
                <div className="logo-nav">
                    <div className='logo-div'>
                        <Link className="logo" to="/"><img src={window.logo} /></Link>
                    </div>
                    <ul className="logo-link-list">
                        <li><i class="far fa-calendar-alt"></i></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default UserNavBar