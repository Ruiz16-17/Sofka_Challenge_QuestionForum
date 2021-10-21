import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchQuestions, postFavoriteQuestion } from '../actions/questionActions'
import { Question } from '../components/Question'

const QuestionsPage = ({ dispatch: dispatch, loading, questions, hasErrors, userId, favoriteQuestions }) => {

    
    useEffect(() => {
        
        dispatch(fetchQuestions())
    }, [dispatch,userId]);
    
    const onAddFavoriteQuestion = (questionId,id) => {
        
        const data = {
            userId : id,
            questionId : questionId
        };

        dispatch(postFavoriteQuestion(data));
    };

    const renderQuestions = () => {
        if (loading) return <p>Loading questions...</p>
        if (hasErrors) return <p>Unable to display questions.</p>

        return questions.map(question => <Question
            key={question.id}
            question={question}
            userId={userId}
            favoriteQuestions = {favoriteQuestions}
            onAddFavoriteQuestion={onAddFavoriteQuestion}
            excerpt />)
    }

    return (
        <section>
            
            {renderQuestions()}
        </section>
    )
}

const mapStateToProps = state => ({
    loading: state.question.loading,
    questions: state.question.questions,
    favoriteQuestion: state.favoriteQuestion.favoriteQuestions,
    hasErrors: state.question.hasErrors,
    userId: state.auth.uid

})

export default connect(mapStateToProps)(QuestionsPage)
