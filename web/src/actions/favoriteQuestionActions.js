const URL_BASE = 'https://glacial-eyrie-04502.herokuapp.com';

export const LOADING = 'LOADING'
export const LOADED_SUCCESS = 'LOADED_SUCCESS'
export const LOADED_FAILURE = 'LOADED_FAILURE'
export const DELETE = 'DELETE';
export const ADD_FAVORITE = 'ADD_FAVORITE';

export const loading = () => ({ type: LOADING })

export const success = payload => ({
    type: LOADED_SUCCESS,
    payload
});

export function fetchFavoriteQuestions(userId) {
    return async dispatch => {
        dispatch(loading())
        try {
            const response = await fetch(
                `${URL_BASE}/getOwnerAllFavoriteQuestion/${userId}`
            )
            const data = await response.json()
            
            dispatch(success({ favoriteQuestions : data }))
        } catch (error) {
            dispatch(failure())
        }
    }
}


