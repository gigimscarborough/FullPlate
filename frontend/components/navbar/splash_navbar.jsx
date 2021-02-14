import React from 'react'
import {Link} from 'react-router-dom'
import GreetingContainer from '../greeting/greeting_container'
import MainNavBar from './main_navbar'
import UserNavBar from './user_navbar'

class SplashNavBar extends React.Component{

    render(){
        return(
            <div>
                <MainNavBar />
                <div className="logo-nav">
                    <div className='logo-div'>
                        <Link className="logo" to="/"><img src={window.logo} /></Link>
                        <div className="copy-r">&copy;</div>
                        <div className="logo-border"></div>
                    </div>
                    <ul className="logo-link-list">
                        <GreetingContainer/>
                    </ul>
                </div>
            </div>
        )
    }
}

export default SplashNavBar