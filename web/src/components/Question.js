import React from 'react'
import { Link } from 'react-router-dom'

export const Question = ({ question, excerpt, onDelete, userId, onAddFavoriteQuestion, isFavorite }) => (
  <article className={excerpt ? 'question-excerpt' : 'question'}>

    <h2>
      <div dangerouslySetInnerHTML={{ __html:question.question }} />
    </h2>

    <p>{question.category}  - <small>{question.type}</small></p>

    {

      userId && (

        <button className={
          isFavorite
            ? "heart right"
            : "black_heart right"
        } onClick={() => onAddFavoriteQuestion(question.id, userId)}>

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
)
