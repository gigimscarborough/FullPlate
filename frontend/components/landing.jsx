import React from 'react'
import SplashNavBar from '../components/navbar/splash_navbar'
import Search from './search/search'


class Landing extends React.Component{

    render(){
        return(
            <div>
                <SplashNavBar/>
                <Search/>
            </div>
        )
    }
}

export default Landing;