import * as actionsQuestion from '../actions/questionActions';

export const initialState = {
  loading: true,
  hasErrors: false,
  questions: [],
  question: {
    answers: []
  },
  redirect: null,
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
    case actionsQuestion.DELETE_ANSWER:

      return { ...state, question: { ...state.question, answers: state.question.answers.filter(element => element.id !== action.payload) } }
    case actionsQuestion.ADD_FAVORITE:
      

      const updateItem = state.questions;
      const listUPdateQuestions = updateItem.map((element) => {
        if(element.id === action.payload.questionId){
          element.favorite = !element.favorite;
          console.log(action.payload.id);
          element.favoriteQuestionId = action.payload.id;
          return element;
        }

        return element;
      })

  return { ...state, questions: listUPdateQuestions}
    default:
      return state
  }
}
