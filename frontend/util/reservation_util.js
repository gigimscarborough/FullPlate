export const fetchReservations = () => (
    $.ajax({
        method: "GET",
        url: `/api/reservations`,
    })
)

export const createReservation = (reservation) => {
    debugger
    return $.ajax({
        method: "POST",
        url: "/api/reservations",
        data: { reservation }
    })

}
export const updateReservation = (reservation) => (
    $.ajax({
        method: "PATCH",
        url: `/api/reservations/${reservation.id}`,
        data: { reservation }
    })
)
export const deleteReservation = (reservationId) => (
    $.ajax({
        method: "DELETE",
        url: `/api/reservations/${reservationId}`,
    })
)

