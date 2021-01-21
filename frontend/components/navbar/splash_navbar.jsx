import React from 'react'
import {Link} from 'react-router-dom'
import GreetingContainer from '../greeting/greeting_container'

class SplashNavBar extends React.Component{
    render(){
        return(
            <div>

            <div className="top-nav">
                <ul className="nav-link-list">
                    <li>
                        <a href="https://github.com/gigimscarborough">GitHub</a>
                            <a href="https://linkedin.com/in/gigimscarborough">LinkedIn</a>
                    </li>
                </ul>
            </div>
                <div className="logo-nav">
                    <div className='logo-div'>
                        <Link className="logo" to="/"><img src={window.logo} /></Link>
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