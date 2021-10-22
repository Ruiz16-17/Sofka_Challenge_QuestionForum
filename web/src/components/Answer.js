import React from 'react';

export const Answer = ({ answer, userId, onDelete }) => (

  <aside key={answer.id} className="answer">

    <h2><div dangerouslySetInnerHTML={{ __html: answer.answer }} /></h2>
    {
      answer.userId === userId 
      ? 
      <button className="button right" onClick={() => onDelete(answer.id)}>DELETE</button>
      : ""
    }
    
  </aside>
)
