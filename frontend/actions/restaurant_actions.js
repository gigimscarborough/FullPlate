import * as RestaurantAPIUtil from '../util/restaurant_util'

export const RECEIVE_ALL_RESTAURANTS = 'RECEIVE_ALL_RESTAURANTS'
export const RECEIVE_RESTAURANTS = 'RECEIVE_RESTAURANTS'
export const SEARCH_RESTAURANTS = 'SEARCH_RESTAURANTS'

const receiveAllRestaurants = (restaurants) => ({
    type: RECEIVE_ALL_RESTAURANTS,
    restaurants

})

const receiveRestaurant = (restaurants) => ({
    type: RECEIVE_RESTAURANT,
    restaurant
})

const receiveSearchedRestaurant = (searchResult) => ({
    type: RECEIVE_RESTAURANT,
    searchResult
})



export const fetchRestaurants = () => dispatch =>(
    RestaurantAPIUtil.fetchRestaurants()
    .then(restaurants => dispatch(receiveAllRestaurants(restaurants)))
)

export const fetchRestaurant = (restaurantId) => dispatch => (
    RestaurantAPIUtil.fetchRestaurants(restaurantId)
        .then(restaurant => dispatch(receiveRestaurant(restaurant)))
)

export const searchRestaurant = (search) => dispatch => (
    RestaurantAPIUtil.searchRestaurants(search)
        .then(searchResult => dispatch(receiveSearchedRestaurants(searchResult)))
)