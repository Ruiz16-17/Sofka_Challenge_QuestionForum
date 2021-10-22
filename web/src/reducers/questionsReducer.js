import * as actionsQuestion from '../actions/questionActions';

export const initialState = {
  loading: true,
  hasErrors: false,
  questions: [],
  question: {
    answer: []
  },
  redirect: null,
  isFavorite : false
}

export default function questionsReducer(state = initialState, action) {
  switch (action.type) {
    case actionsQuestion.LOADING:
      return { ...state, loading: true }
    case actionsQuestion.LOADED_SUCCESS:
      return { ...state, ...action.payload, loading: false, hasErrors: false }
    case actionsQuestion.LOADED_FAILURE:
      return { ...state, loading: false, hasErrors: true }
    case actionsQuestion.DELETE:
      return { ...state, questions: state.questions.filter(question => question.id !== action.payload) }
      case actionsQuestion.ADD_FAVORITE:
        console.log("asda");
        return { ...state, isFavorite : true }
    default:
      return state
  }
}
