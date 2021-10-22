import React from 'react';

export const Answer = ({ answer }) => (

  <aside key={answer.id} className="answer">

    <h2><div dangerouslySetInnerHTML={{ __html: answer.answer }} /></h2>
    
  </aside>
)
