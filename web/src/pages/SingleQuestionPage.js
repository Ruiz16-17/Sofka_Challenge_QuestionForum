import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import swal from 'sweetalert'
import { deleteAnswer, fetchQuestion } from '../actions/questionActions'
import { Answer } from '../components/Answer'
import { Question } from '../components/Question'


const SingleQuestionPage = ({
  match,
  dispatch,
  question,
  hasErrors,
  loading,
  userId
}) => {
  const { id } = match.params

  useEffect(() => {
    dispatch(fetchQuestion(id))
  }, [dispatch, id])

  const renderQuestion = () => {
    
    if (loading.question) return <p>Loading question...</p>
    if (hasErrors.question) return <p>Unable to display question.</p>
    return <Question question={question} />
  }

  const onDelete = (id) => {
    swal({
      title:"Are you sure about this?",
      text:"if you confirm this, the answer will be removed.",
      icon:"warning",
      buttons:["Cancell", "Confirm"]
      }).then(questionToDelete=>{
          if(questionToDelete){
              dispatch(deleteAnswer(id))
              swal({
                  text:"The answer has been deleted successfully!",
                  icon:"success"
              });
          }
      });
  }

  const renderAnswers = () => {
    
    return (question.answers && question.answers.length) ? question.answers.map(answer => (
      
      <Answer key={answer.id} answer={answer} userId={userId} onDelete={onDelete} excerpt/>

    )) : <p>Empty answer!</p>;
  }

  return (
    <section>
      {renderQuestion()}
      {userId && <Link to={"/answer/" + id} className="button right">
        Reply
      </Link>}

      <h2>Answers</h2>
      {renderAnswers()}
    </section>
  )
}

const mapStateToProps = state => ({
  question: state.question.question,
  loading: state.question.loading,
  hasErrors: state.question.hasErrors,
  userId: state.auth.uid
})

export default connect(mapStateToProps)(SingleQuestionPage)
