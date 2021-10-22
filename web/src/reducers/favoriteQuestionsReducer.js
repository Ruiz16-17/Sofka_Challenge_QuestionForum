import * as actionsQuestion from '../actions/questionActions';

export const initialState = {
  loading: true,
  hasErrors: false,
  favoriteQuestions: []
}

export default function favoriteQuestionReducer(state = initialState, action) {
  switch (action.type) {
    
    case actionsQuestion.LOADED_FAILURE:
      return { ...state, loading: false, hasErrors: true }
    case actionsQuestion.LOADED_SUCCESS:
      return { ...state,...action.payload, loading: false, hasErrors: true }
    default:
      return state
  }
}
