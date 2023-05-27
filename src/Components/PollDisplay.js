

import React from 'react'

function PollDisplay({question}) {

    return (
        <>
            <h2>Question: {question.question}</h2>
            {question.choices.map(((choice, index)=>(
                <div key={index}>{`${choice.label} : ${choice.votes}`}</div>
            )))
            }


        </>
        
    )
}

export default PollDisplay