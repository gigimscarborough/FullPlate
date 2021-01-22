import React from "react";
import GreetingContainer from '../components/greeting/greeting_container'
import LoginFormContainer from '../components/session_form/login_form_container'
import SignupFormContainer from '../components/session_form/signup_form_container'
import { Route } from 'react-router-dom'
import {ProtectedRoute, AuthRoute} from '../util/route_util'
import Modal from './modal'
import SplashNavBar from '../components/navbar/splash_navbar'
import UserShowContainer from './user/user_show_container'
import Search from './search/search'
import Landing from './landing'

const App = () => (
    
    <div>
        <Modal />
        <header>

        </header>
        <Route exact path="/" component={Landing}/>
        <ProtectedRoute exact path="/users/:userId" component={UserShowContainer}/>
    </div>
);

export default App;
