import React from 'react';
import { Link } from 'react-router-dom';

export const Question = ({ question, excerpt, onDelete, userId, onAddFavoriteQuestion, setCategory }) => {

  const handleCategorySearch = () => {
    setCategory(question.category)
  }

  console.log(question.favoriteQuestionId);

  return <article className={excerpt ? 'question-excerpt' : 'question'}>

    {setCategory ?

      <p className="searchCategoryPointer" onClick={handleCategorySearch}>
      {question.category}  - <small>{question.type}</small>
      </p> : <p>{question.category}  - <small>{question.type}</small></p>
    }

    <h2>
      <div dangerouslySetInnerHTML={{ __html: question.question }} />
    </h2>

    {

      userId && onAddFavoriteQuestion &&(

        <button className={
          question.favorite
            ? "heart right"
            : "black_heart right"
        } onClick={() => onAddFavoriteQuestion(question.id, userId, question.favoriteQuestionId)}>

        </button>

      )
    }

    {onDelete && (
      <button className="button right" onClick={() => onDelete(question.id)}>DELETE</button>
    )}

    {excerpt && (
      <Link to={`/question/${question.id}`} className="button">
        View Question
      </Link>
    )}
  </article>
}
