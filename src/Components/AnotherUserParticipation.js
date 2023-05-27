
import React from 'react'
import UserParticipation from './UserParticipation'

function AnotherUserParticipation(props) {
  return (
    <div>
        <button>Reset</button>
        <UserParticipation question={props.question}/>
    </div>
  )
}

export default AnotherUserParticipation