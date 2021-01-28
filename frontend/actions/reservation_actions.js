import * as ReservationAPIUtil from '../util/reservation_util'

export const RECEIVE_ALL_RESERVATIONS = 'RECEIVE_ALL_RESERVATIONS'
export const RECEIVE_RESERVATION = ''
export const REMOVE_RESERVATION = 'REMOVE_RESERVATION'
export const RECEIVE_RESERVATION_ERRORS = 'RECEIVE_RESERVATION_ERRORS'
export const REMOVE_RESERVATION_ERRORS = 'REMOVE_RESERVATION_ERRORS'


const receiveAllReservations = (reservations) => ({
    type: RECEIVE_ALL_RESERVATIONS,
    reservations

})

const receiveReservation = (reservation) => ({
    type: RECEIVE_RESERVATION,
    reservation

})

const removeReservation = (reservationId) => ({
    type: REMOVE_RESERVATION,
    reservationId

})

const receiveErrors = (errors) => ({
    type: RECEIVE_RESERVATION_ERRORS,
    errors

})

const removeReservationErrors = () => ({
    type: REMOVE_RESERVATION_ERRORS
})


export const fetchReservations = () => dispatch => (
    ReservationAPIUtil.fetchReservations()
        .then(reservations => dispatch(receiveAllReservations(reservations)), 
        errors => dispatch(receiveErrors(errors.responseJSON)))
)

export const createReservation = (reservation) => dispatch => {
    debugger
    return ReservationAPIUtil.createReservation(reservation)
        .then(reservation => {
            debugger
            return dispatch(receiveReservation(reservation))
        }, 
        errors => {
            debugger
            return dispatch(receiveErrors(errors.responseJSON))
        }
        )
}

export const updateReservation = (reservation) => dispatch => (
    ReservationAPIUtil.updateReservation(reservation)
        .then(reservation => dispatch(receiveReservation(reservation)), 
        errors => dispatch(receiveErrors(errors.responseJSON)))
)

export const deleteReservation = (reservationId) => dispatch => (
    ReservationAPIUtil.deleteReservation(reservation)
        .then(() => dispatch(removeReservation(reservationId)), 
        errors => dispatch(receiveErrors(errors.responseJSON)))
)

export const removeErrors = () => dispatch => (
    dispatch(removeReservationErrors())
)




