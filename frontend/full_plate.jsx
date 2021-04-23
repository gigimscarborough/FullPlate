import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import {fetchRestaurant, fetchRestaurants} from './actions/restaurant_actions';
import { searchRestaurants } from './util/restaurant_util';

document.addEventListener("DOMContentLoaded", () => {



    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    const root = document.getElementById('root');


    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.fetchRestaurant = fetchRestaurant;
    window.fetchRestaurants = fetchRestaurants;
    window.searchRestaurants = searchRestaurants;

    ReactDOM.render(<Root store={store}/>, root)


})