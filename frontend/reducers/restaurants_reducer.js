import { RECEIVE_ALL_RESTAURANTS, RECEIVE_RESTAURANT, SEARCH_RESTAURANTS} from '../actions/restaurant_actions'
import {CLEAR_FORM} from '../actions/search_actions'

const restaurantsReducer = (state={}, action) => {
    Object.freeze(state);
    const newState = Object.assign({}, state);

    switch(action.type){
        case RECEIVE_ALL_RESTAURANTS:
            return action.restaurants;
        case RECEIVE_RESTAURANT:
            newState[action.restaurant.id] = action.restaurant;
            return newState;
        case SEARCH_RESTAURANTS:
            return action.searchResult;
        case CLEAR_FORM:
            return {}
        default: return state;
    }
}

export default restaurantsReducer