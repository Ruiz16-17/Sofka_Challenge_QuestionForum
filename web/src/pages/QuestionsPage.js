import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchQuestions, postFavoriteQuestion } from '../actions/questionActions';
import { Question } from '../components/Question';

const QuestionsPage = ({ dispatch, loading, questions, hasErrors, userId}) => {
    
    useEffect(() => {
        
        dispatch(fetchQuestions(userId));
    }, [dispatch,userId]);
    

    const onAddFavoriteQuestion = (questionId,userIdFavoriteQuestion) => {
        
        const data = {
            userId : userIdFavoriteQuestion,
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
    hasErrors: state.question.hasErrors,
    userId: state.auth.uid

})

export default connect(mapStateToProps)(QuestionsPage)