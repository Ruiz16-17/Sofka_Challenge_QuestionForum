
const URL_BASE = 'http://localhost:8080';

export const LIKE = 'LIKE';

export const actionLike = (payload) => {
    
    return {
        type: LIKE,
        payload
    }
}

export const failure = () => ({ type: 'Fail' })


