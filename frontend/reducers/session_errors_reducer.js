import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS} from '../actions/session_actions'

const sessionErrorsReducer = (state = { errors: [] }, action) => {
    Object.freeze(state)
    const newState = Object.assign({}, state)

    switch (action.type) {
        case RECEIVE_ERRORS:
            return Object.assign(newState, { errors: action.errors })
        case RECEIVE_CURRENT_USER:
            return Object.assign(newState, { errors: [] })
        default: return state
    }
}

export default sessionErrorsReducer