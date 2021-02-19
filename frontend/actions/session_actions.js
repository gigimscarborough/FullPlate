import * as SessionApiUtil from '../util/session_api_util'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER'
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS'
export const REMOVE_SESSION_ERRORS = 'REMOVE_SESSION_ERRORS'
export const REFRESH_USER = 'REFRESH_USER'

const receiveCurrentUser = (currentUser) => {
   
    return {type: RECEIVE_CURRENT_USER,
    currentUser}
}

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
})

const receiveErrors = (errors) => ({
    type: RECEIVE_SESSION_ERRORS,
    errors

})

const removeSessionErrors = () => ({
    type: REMOVE_SESSION_ERRORS
})

const refreshUser = (currentUser) => ({
    type: REFRESH_USER,
    currentUser
})

export const login = (user) => dispatch => (
    SessionApiUtil.login(user)
    .then(user => { 
        
        return dispatch(receiveCurrentUser(user))}, errors => dispatch(receiveErrors(errors.responseJSON)))
)

export const logout = () => dispatch => (
    SessionApiUtil.logout()
        .then(user => 
            {
                
                return dispatch(logoutCurrentUser())})
)

export const signup = (user) => dispatch => (
    SessionApiUtil.signup(user)
        .then(user => dispatch(receiveCurrentUser(user)), errors => dispatch(receiveErrors(errors.responseJSON)))
)

export const removeErrors = () => dispatch => (
        dispatch(removeSessionErrors())
)

export const fetchUser = (userId) => dispatch => (
   
// {

    SessionApiUtil.fetchUser(userId)

        .then(user => dispatch(refreshUser(user)))
       
// }
)