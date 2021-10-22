import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import swal from 'sweetalert'
import { deleteQuestion, fetchOwnerQuestions } from '../actions/questionActions'
import { Question } from '../components/Question'

const OwnerQuestionsPage = ({ dispatch, loading, questions, hasErrors, redirect, userId }) => {

    useEffect(() => {
        dispatch(fetchOwnerQuestions(userId))
    }, [dispatch, userId]);

    useEffect(() => {
        if (redirect) {
            dispatch(fetchOwnerQuestions(userId))
        }
    }, [redirect, dispatch, userId]);

    const onDelete = (id) => {
        swal({
            title:"Are you sure about this?",
            text:"if you confirm this, the question will be removed.",
            icon:"warning",
            buttons:["Cancell", "Confirm"]
            }).then(questionToDelete=>{
                if(questionToDelete){
                    dispatch(deleteQuestion(id))
                    swal({
                        text:"The question has been deleted successfully!",
                        icon:"success"
                    });
                }
            });
    }

    

            const renderQuestions = () => {
                if (loading) return <p>Loading questions...</p>
                if (hasErrors) return <p>Unable to display questions.</p>

                return questions.map(question => <Question
                    key={question.id}
                    question={question}
                    userId={userId}
                    excerpt onDelete={onDelete} />)
            }

            return (
                <section>
                    <h1>Questions</h1>
                    {renderQuestions()}
                </section>
            )
        }

const mapStateToProps = state => ({
            loading: state.question.loading,
            questions: state.question.questions,
            hasErrors: state.question.hasErrors,
            redirect: state.question.redirect,
            userId: state.auth.uid
        })

        export default connect(mapStateToProps)(OwnerQuestionsPage)
