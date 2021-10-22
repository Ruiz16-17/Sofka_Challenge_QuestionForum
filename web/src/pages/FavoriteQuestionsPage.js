import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchFavoriteQuestions } from '../actions/questionActions';
import { Question } from '../components/Question';


const FavoriteQuestionsPage = ({ dispatch, loading, questions, hasErrors, userId,
    favoriteQuestions }) => {
    useEffect(() => {
        dispatch(fetchFavoriteQuestions(userId));
    }, [dispatch, userId])

    const renderQuestions = () => {
        if (loading) return <p>Loading questions...</p>
        if (hasErrors) return <p>Unable to display questions.</p>

        return (favoriteQuestions.length > 0

            ?
            favoriteQuestions.map(question => <Question
                key={question.id}
                question={question}
                userId={userId}
                excerpt />)
            :
            <p>Has not added favorites.</p>
        )

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
    favoriteQuestions: state.favoriteQuestion.favoriteQuestions,
    userId: state.auth.uid

});

export default connect(mapStateToProps)(FavoriteQuestionsPage)
