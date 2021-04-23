import * as RestaurantAPIUtil from '../util/restaurant_util';

export const RECEIVE_ALL_RESTAURANTS = 'RECEIVE_ALL_RESTAURANTS';
export const RECEIVE_RESTAURANT = 'RECEIVE_RESTAURANT';
export const SEARCH_RESTAURANTS = 'SEARCH_RESTAURANTS';


export const receiveSearchedRestaurants = (searchResult) => ({
    type: SEARCH_RESTAURANTS,
    searchResult
})

const receiveAllRestaurants = (restaurants) => ({
    type: RECEIVE_ALL_RESTAURANTS,
    restaurants

})

const receiveRestaurant = (restaurant) => ({
    type: RECEIVE_RESTAURANT,
    restaurant
})




export const fetchRestaurants = () => dispatch =>(
    RestaurantAPIUtil.fetchRestaurants()
    .then(restaurants => dispatch(receiveAllRestaurants(restaurants)))
)

export const fetchRestaurant = (restaurantId) => dispatch => (
    RestaurantAPIUtil.fetchRestaurant(restaurantId)
        .then(restaurant => dispatch(receiveRestaurant(restaurant)))
)

export const searchRestaurants = (search) => dispatch => (
    RestaurantAPIUtil.searchRestaurants(search)
        .then(searchResult => dispatch(receiveSearchedRestaurants(searchResult)))
)