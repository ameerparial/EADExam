import './App.css';
import AnotherUserParticipation from './Components/AnotherUserParticipation';
import PollDisplay from './Components/PollDisplay';
import Timer from './Components/Timer';
import UserParticipation from './Components/UserParticipation';

function App() {
  const questionAnswers = {
    "question": "What is your favorite programming language?",
    "choices": [
      { "id": 1, "label": "JavaScript", "votes": 0 },
      { "id": 2, "label": "Python", "votes": 0 },
      { "id": 3, "label": "Java", "votes": 0 },
      { "id": 4, "label": "C#", "votes": 0 }
    ]
  }

  function updateVote(){

  } 

  return (
    <>
      {/* <h1>Polling App</h1> */}
      {/* <PollDisplay question={questionAnswers}/>
      <UserParticipation question={questionAnswers} username='Ameer Hamza' updateVote={updateVote}/>
      <AnotherUserParticipation/> */}
      <Timer/>
      
    </>
    
  );
}

export default App;
