import { combineReducers } from 'redux';
import authReducer from './authReducer';
import favoriteQuestionReducer from './favoriteQuestionsReducer';
import questionsReducer from './questionsReducer';

const rootReducer = combineReducers({
    question: questionsReducer,
    auth: authReducer,
    favoriteQuestion: favoriteQuestionReducer
})

export default rootReducer
