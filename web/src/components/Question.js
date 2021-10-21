import React from 'react'
import { Link } from 'react-router-dom'



export const Question = ({ question, excerpt, onDelete, userId }) => (
  <article className={excerpt ? 'question-excerpt' : 'question'}>
    <h2>{question.question}</h2>
    <p>{question.category}  - <small>{question.type}</small></p>

    <h1>Questions</h1>
            {
                userId 
                ? 
                
                <h2>Sí - {userId}</h2>
                
                :
                <h2>No</h2>
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
