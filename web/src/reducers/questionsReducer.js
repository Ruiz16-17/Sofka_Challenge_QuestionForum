import * as actionsAnswer from '../actions/answerActions';
import * as actionsQuestion from '../actions/questionActions';

export const initialState = {
  loading: true,
  hasErrors: false,
  questions: [],
  question: {
    answer: []
  },
  redirect: null
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
    case actionsAnswer.LIKE:
      const questionUpdate = state.question;
      const updateAnswerList = questionUpdate.answers.map(answer => { return { ...answer, position: answer.position + 1 } })
      questionUpdate.answers = updateAnswerList;
      // console.log(updateAnswerList);
      // console.log(action);
      // console.log(state.question)
      // console.log(state.question); 
      //console.log(state.question);
      //console.log(questionUpdate);
      //console.log(questionUpdate);
      return { ...state ,answer : updateAnswerList,loading: false, hasErrors: false  }
    default:
      return state
  }
}
