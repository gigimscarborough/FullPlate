import * as ReservationAPIUtil from '../util/reservation_util'

export const RECEIVE_ALL_RESERVATIONS = 'RECEIVE_ALL_RESERVATIONS'
export const RECEIVE_RESERVATION = 'RECEIVE_RESERVATION'
export const REMOVE_RESERVATION = 'REMOVE_RESERVATION'


const receiveAllReservations = (reservations) => ({
    type: RECEIVE_ALL_RESERVATIONS,
    reservations

})

const receiveReservation = (reservation) => ({
    type: RECEIVE_RESTAURANTS,
    reservation

})

const removeReservation = (reservationId) => ({
    type: RECEIVE_RESTAURANTS,
    reservationId

})


export const fetchReservations = () => dispatch => (
    ReservationAPIUtil.fetchReservations()
        .then(reservations => dispatch(receiveAllReservations(reservations)))
)

export const createReservation = (reservation) => dispatch => (
    ReservationAPIUtil.createReservation(reservation)
        .then(reservation => dispatch(receiveReservation(reservation)))
)

export const updateReservation = (reservation) => dispatch => (
    ReservationAPIUtil.updateReservation(reservation)
        .then(reservation => dispatch(receiveReservation(reservation)))
)

export const deleteReservation = (reservationId) => dispatch => (
    ReservationAPIUtil.deleteReservation(reservation)
        .then(() => dispatch(removeReservation(reservationId)))
)




