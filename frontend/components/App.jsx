import React from "react";
import GreetingContainer from '../components/greeting/greeting_container'
import LoginFormContainer from '../components/session_form/login_form_container'
import SignupFormContainer from '../components/session_form/signup_form_container'
import { Route } from 'react-router-dom'
import AuthRoute from '../util/route_util'
import Modal from './modal'
import SplashNavBar from '../components/navbar/splash_navbar'

const App = () => (
    
    <div>
        <Modal />
        <header>
            <SplashNavBar/>
        </header>
        {/* <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} /> */}
        <Route exact path="/" />
    </div>
);

export default App;