import { combineReducers } from 'redux'
import reservationsErrorsReducer from './reservations_errors_reducer'
import sessionErrorsReducer from './session_errors_reducer'


const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    reservations: reservationsErrorsReducer
})

export default errorsReducer