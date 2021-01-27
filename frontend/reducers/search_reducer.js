import { CLEAR_FORM, SEARCH_FORM } from '../actions/search_actions'


const searchReducer = (state = {}, action) => {
    Object.freeze(state)
    
    switch (action.type) {
        case SEARCH_FORM:
            return action.searchForm
        default:
            return state;
    }

}

export default searchReducer