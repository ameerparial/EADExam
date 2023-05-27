

import React from 'react'

function PollDisplay() {
    const questionAnswers = {
        "question": "What is your favorite programming language?",
        "choices": [
          { "id": 1, "label": "JavaScript", "votes": 0 },
          { "id": 2, "label": "Python", "votes": 0 },
          { "id": 3, "label": "Java", "votes": 0 },
          { "id": 4, "label": "C#", "votes": 0 }
        ]
    }

    return (
        <>
            <h2>Question: {questionAnswers.question}</h2>
            {questionAnswers.choices.map(((choice, index)=>(
                <div key={index}>{`${choice.label} : ${choice.votes}`}</div>
            )))
            }


        </>
        
    )
}

export default PollDisplay