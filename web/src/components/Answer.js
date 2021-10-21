import React from 'react';

export const Answer = ({ answer, onLike }) => {

return(

    <aside key={answer.id} className="answer">

        <button onClick={() => onLike(answer)}>+</button>
      <h3>{answer.position}</h3>
      <button>-</button>
      <p>{answer.answer}</p>
    </aside>
);
}
