const URL_BASE = 'http://localhost:8080';

export const LOADING = 'LOADING'
export const LOADED_SUCCESS = 'LOADED_SUCCESS'
export const LOADED_FAILURE = 'LOADED_FAILURE'
export const DELETE = 'DELETE';
export const DELETE_ANSWER = 'DELETE_ANSWER';
export const ADD_FAVORITE = 'ADD_FAVORITE';

export const loading = () => ({ type: LOADING })

export const success = payload => ({
    type: LOADED_SUCCESS,
    payload
});

export const actionDelete = (payload) => {
    return {
        type: DELETE,
        payload
    }
}

export const actionDeleteAnswer = (payload) => {
    return {
        type: DELETE_ANSWER,
        payload
    }
}

export const actionAddFavorite = (payload) => {
    return {
        type: ADD_FAVORITE,
        payload
    }
}

export const failure = () => ({ type: LOADED_FAILURE })

export function fetchQuestions(userId) {
    return async dispatch => {
        dispatch(loading())
        try {
            const response = await fetch(
                `${URL_BASE}/getAll/${userId}`
            )

            const data = await response.json()
            dispatch(success({ questions: data, redirect: null }))
        } catch (error) {
            dispatch(failure())
        }
    }
}

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

export function fetchOwnerQuestions(userId) {
    return async dispatch => {
        dispatch(loading())
        try {
            const response = await fetch(`${URL_BASE}/getOwnerAll/${userId}`)
            const data = await response.json()
            dispatch(success({ questions: data, redirect: null }))
        } catch (error) {
            dispatch(failure())
        }
    }
}

export function fetchQuestion(id) {
    return async dispatch => {
        dispatch(loading())
        try {
            const response = await fetch(`${URL_BASE}/get/${id}`)
            const data = await response.json()
            dispatch(success({ question: data, redirect: null }))
        } catch (error) {
            dispatch(failure())
        }
    }
}


export function postQuestion(question) {
    return async dispatch => {
        dispatch(loading())
        try {
            
            const response = await fetch(`${URL_BASE}/create`,
                {
                    method: 'POST',
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(question)
                }
            )
            const id = await response.text()
            dispatch(success({redirect: `/question/${id}`}));
        } catch (error) {
            dispatch(failure())
        }
    }
}

export function postFavoriteQuestion(favoriteQuestion) {
    return async dispatch => {
        try {
            if(favoriteQuestion.id === ""){
                
                await fetch(`${URL_BASE}/saveFavoriteQuestion`,
                    {
                        method: 'POST',
                        mode: 'cors',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(favoriteQuestion)
                    }
                )
            }else{

                await fetch(`${URL_BASE}/deleteFavoriteQuestion/${favoriteQuestion.id}`,
                {
                    method: 'DELETE',
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )
            
            }

            dispatch(actionAddFavorite(favoriteQuestion));
        } catch (error) {
            dispatch(failure())
        }
    }
}


export function postAnswer(answer) {
    return async dispatch => {
        dispatch(loading())
        try {
            await fetch(`${URL_BASE}/add`,
                {
                    method: 'POST',
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(answer)
                }
            )
            dispatch(success({redirect: `/question/${answer.questionId}`}));
        } catch (error) {
            dispatch(failure())
        }
    }
}

export function deleteQuestion(id) {
    return async dispatch => {
        
        try {
            await fetch(`${URL_BASE}/delete/${id}`,
                {
                    method: 'DELETE',
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )
            dispatch(actionDelete(id));
        } catch (error) {
            dispatch(failure())
        }
    }
}

export function deleteAnswer(id) {
    return async dispatch => {
        
        try {
            await fetch(`${URL_BASE}/deleteAnswer/${id}`,
                {
                    method: 'DELETE',
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )
            dispatch(actionDeleteAnswer(id));
        } catch (error) {
            dispatch(failure())
        }
    }
}

