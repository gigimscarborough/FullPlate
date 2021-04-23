import * as ReviewAPIUtil from '../util/review_util';

export const RECEIVE_ALL_REVIEWS = 'RECEIVE_ALL_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';
export const RECEIVE_REVIEW_ERRORS = 'RECEIVE_REVIEW_ERRORS';
export const REMOVE_REVIEW_ERRORS = 'REMOVE_REVIEW_ERRORS';


const receiveAllReviews = (reviews) => ({
    type: RECEIVE_ALL_REVIEWS,
    reviews

})

const receiveReview = (review) => ({
    type: RECEIVE_REVIEW,
    review

})

const removeReview = (reviewId) => ({
    type: REMOVE_REVIEW,
    reviewId

})

const receiveErrors = (errors) => ({
    type: RECEIVE_REVIEW_ERRORS,
    errors

})

const removeReviewErrors = () => ({
    type: REMOVE_REVIEW_ERRORS
})


export const fetchReviews = () => dispatch => (
    ReviewAPIUtil.fetchReviews()
        .then(reviews => dispatch(receiveAllReviews(reviews)),
        // errors => dispatch(receiveErrors(errors.responseJSON))
    )
)

export const createReview = (review) => dispatch => {

    return ReviewAPIUtil.createReview(review)
        .then(review => {

            return dispatch(receiveReview(review))
        },
        )
}

// errors => {

//     return dispatch(receiveErrors(errors.responseJSON))
// }
export const updateReview = (review) => dispatch => (
    ReviewAPIUtil.updateReview(review)
        .then(review => dispatch(receiveReview(review)),
            errors => dispatch(receiveErrors(errors.responseJSON)))
)

export const deleteReview = (reviewId) => dispatch => (
    ReviewAPIUtil.deleteReview(reviewId)
        .then(() => dispatch(removeReview(reviewId)),
            errors => dispatch(receiveErrors(errors.responseJSON)))
)

export const removeErrors = () => dispatch => (
    dispatch(removeReservationErrors())
)