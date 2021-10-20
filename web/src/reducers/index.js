import { combineReducers } from 'redux';
import authReducer from './authReducer';
import questionsReducer from './questionsReducer';

const rootReducer = combineReducers({
    question: questionsReducer,
    auth: authReducer
})

export default rootReducer
