import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchQuestions, postFavoriteQuestion } from '../actions/questionActions';
import { Question } from '../components/Question';

const QuestionsPage = ({ dispatch, loading, questions, hasErrors, userId}) => {
    
    useEffect(() => {
        
        dispatch(fetchQuestions(userId));
    }, [dispatch,userId]);
    

    const [inputSearch, setInputSearch] = useState('');
    const [category, setCategory] = useState('');

    const handleSearch = (event) =>{
        setInputSearch(event.target.value);
    }

    const onAddFavoriteQuestion = (questionId,userIdFavoriteQuestion, idFavoriteQuestion) => {
        
        const data =     {
            id: idFavoriteQuestion,
            userId : userIdFavoriteQuestion,
            questionId : questionId
        };
        
        dispatch(postFavoriteQuestion(data));
    };

    const questionFilteratedCategory = questions.filter(question => question.category.toUpperCase().includes(category.toUpperCase()));

    
    const questionFilterCategorySearch = questionFilteratedCategory.filter(question => question.question.toUpperCase().includes(inputSearch.toUpperCase()));

    const goToQuestion = questionFilterCategorySearch[0]?.id;

    const renderQuestions = () => {
        
        if (loading) return <p>Loading questions...</p>
        if (hasErrors) return <p>Unable to display questions.</p>
        
        return questionFilterCategorySearch.map(question => <Question
            key={question.id}
            question={question}
            userId={userId}
            setCategory={setCategory}
            onAddFavoriteQuestion={onAddFavoriteQuestion}
            excerpt />)
    }

    return (
        <section>
            <h2>Filtrar</h2>
            <form>
                <input type="text" onChange={handleSearch}></input>
                <Link to={`/question/${goToQuestion}`}>
                    <input style={{display: 'none'}} type="submit" value="search"></input>
                </Link>
            </form>
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