import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchQuestions, postFavoriteQuestion } from '../actions/questionActions'
import { Question } from '../components/Question'

const QuestionsPage = ({ dispatch: dispatch, loading, questions, hasErrors, userId, favoriteQuestions }) => {
    
    useEffect(() => {
        
        dispatch(fetchQuestions())
    }, [dispatch,userId]);
    
const findFavoriteQuestion = (questionId) => {
    return favoriteQuestions.find(element => element.id === questionId);
}

    const onAddFavoriteQuestion = (questionId,userIdFavoriteQuestion) => {
        
        const data = {
            isFavorite: findFavoriteQuestion(questionId) ? true : false, 
            userId : userIdFavoriteQuestion,
            questionId : questionId
        };
console.log(data.isFavorite);
        dispatch(postFavoriteQuestion(data));
    };

    const renderQuestions = () => {
        
        if (loading) return <p>Loading questions...</p>
        if (hasErrors) return <p>Unable to display questions.</p>
        
        return questions.map(question => <Question
            key={question.id}
            question={question}
            isFavorite={findFavoriteQuestion(question.id)}
            userId={userId}
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
    favoriteQuestions: state.favoriteQuestion.favoriteQuestions,
    hasErrors: state.question.hasErrors,
    userId: state.auth.uid

})

export default connect(mapStateToProps)(QuestionsPage)