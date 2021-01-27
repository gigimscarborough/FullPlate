import { combineReducers } from 'redux'
import usersReducer from './users_reducer'
import restaurantsReducer from './restaurants_reducer'
import reservationsReducer from './reservations_reducer'


const entitiesReducer = combineReducers({
    users: usersReducer,
    restaurants: restaurantsReducer,
    reservations: reservationsReducer
})

export default entitiesReducer;