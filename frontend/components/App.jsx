import React from "react";
import { Route } from 'react-router-dom';
import {ProtectedRoute, AuthRoute} from '../util/route_util';
import Modal from './modal';
import UserShowContainer from './user/user_show_container';
import Landing from './landing';
import RestaurantShowContainer from '../components/restaurant_show/restaurant_show_container';
import SearchPageContainter from './search/search_page_container';
import ReservationFormContainer from './reservations/reservation_form_container';
import ViewReservationContainer from './reservations/view_reservation_container';
import UpdateReservationContainer from './reservations/update_reservation_container';
import DeleteReservationContainer from './reservations/delete_reservation_container';
import ReviewFormContainer from './reviews/review_form_container';
import EditReviewContainer from './reviews/edit_review_container';
import ReviewConfContainer from './reviews/review_conf';
import Footer from './footer/footer';



const App = () => (
    
    <div className="app-div">
        <Modal />
        <header>

        </header>
        <Route exact path="/" component={Landing}/>
        <Route exact path="/search" component={SearchPageContainter} />
        <Route exact path="/restaurants/:restaurantId" component={RestaurantShowContainer} />
        <ProtectedRoute exact path="/restaurants/:restaurantId/reservations/:reservationId/review" component={ReviewFormContainer} />
        <ProtectedRoute exact path="/restaurants/:restaurantId/reservations/:reservationId/reviews/:reviewId/edit" component={EditReviewContainer} />
        <ProtectedRoute exact path="/restaurants/:restaurantId/reservations/:reservationId/review/confirm" component={ReviewConfContainer} />
        <ProtectedRoute exact path="/restaurants/:restaurantId/reserve" component={ReservationFormContainer} />
        <ProtectedRoute exact path="/users/:userId" component={UserShowContainer}/>
        <ProtectedRoute exact path="/reservations/:reservationId/view" component={ViewReservationContainer} />
        <Route exact path="/reservations/:reservationId/update" component={UpdateReservationContainer} />
        <ProtectedRoute exact path="/reservations/:reservationId/delete" component={DeleteReservationContainer} />
    <div className="outer-div">
    <Footer/>
    </div>
    </div>
    
);

export default App;
