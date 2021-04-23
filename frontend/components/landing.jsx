import React from 'react';
import SplashNavBar from '../components/navbar/splash_navbar';
import Search from './search/search';
import RestaurantDisplayContainer from './restaurant_display/restaurant_display_container';

class Landing extends React.Component{

    render(){
        return(
            <div>
                <SplashNavBar/>
                <Search/>
                <RestaurantDisplayContainer/>
            </div>
        )
    }
}

export default Landing;