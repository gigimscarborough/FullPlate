import * as FavoriteAPIUtil from '../util/favorite_util';

export const RECEIVE_FAVORITE = 'RECEIVE_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';

const receiveFavorite = (favorite) => ({
    type: RECEIVE_FAVORITE,
    favorite

})

const removeFavorite = (favoriteId) => ({
    type: REMOVE_FAVORITE,
    favoriteId

})

export const createFavorite = (favorite) => dispatch => {

    return FavoriteAPIUtil.createFavorite(favorite)
        .then(favorite => {

            return dispatch(receiveFavorite(favorite))
        },
        )
}

export const deleteFavorite = (favoriteId) => dispatch => (
    FavoriteAPIUtil.deleteFavorite(favoriteId)
        .then(() => dispatch(removeFavorite(favoriteId)),
        // errors => dispatch(receiveErrors(errors.responseJSON))
    )
)