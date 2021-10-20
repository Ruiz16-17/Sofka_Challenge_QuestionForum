
const URL_BASE = 'http://localhost:8080';

export const LIKE = 'LIKE';

export const actionLike = (payload) => {
    
    return {
        type: LIKE,
        payload
    }
}

export const failure = () => ({ type: 'Falló' })

export function likeAnswer(answer) {
    return async dispatch => {
        
        try {
            await fetch(`${URL_BASE}/likeAnswer`,
                {
                    method: 'PUT',
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(answer)
                }
            )
            
            dispatch(actionLike(answer));
        } catch (error) {
            dispatch(failure())
            
        }
    }
}