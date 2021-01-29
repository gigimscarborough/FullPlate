import React from "react";
import { Route } from 'react-router-dom'
import {ProtectedRoute, AuthRoute} from '../util/route_util'
import Modal from './modal'
import SplashNavBar from '../components/navbar/splash_navbar'
import UserShowContainer from './user/user_show_container'
import Search from './search/search'
import Landing from './landing'
import RestaurantShowContainer from '../components/restaurant_show/restaurant_show_container'
import SearchPageContainter from './search/search_page_container'
import ReservationFormContainer from './reservations/reservation_form_container'
import Footer from './footer/footer'



const App = () => (
    
    <div className="app-div">
        <Modal />
        <header>

        </header>
        <Route exact path="/" component={Landing}/>
        <Route exact path="/search" component={SearchPageContainter} />
        <Route exact path="/restaurants/:restaurantId" component={RestaurantShowContainer} />
        <Route exact path="/restaurants/:restaurantId/reserve" component={ReservationFormContainer} />
        <ProtectedRoute exact path="/users/:userId" component={UserShowContainer}/>
    <div className="outer-div">
    <Footer/>
    </div>
    </div>
    
);

export default App;
