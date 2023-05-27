
import React from 'react'
import ThankYouComponent from './ThankYouComponent';


class UserParticipation extends React.Component {
    constructor(props) {
      super(props);
      console.log(props);
      this.state = { selectedOption: '' , submitted:false}
    }
  
    handleClick() {
      console.log('submitted option', this.state.selectedOption);
      //Update vote where select value is matching
      console.log(this.state.selectedOption);
      this.setState({submitted:true});

    }
  
    handleOnChange(e) {
      this.setState({ selectedOption: e.target.value});
    }
  
    render() {
        if(this.state.submitted){
            return(
                <ThankYouComponent/>
            )
        }
        else{
            return (
                <div className="poll">
                <h1>Question: {this.props.question.question}</h1>
                <PollOption
                    options={this.props.question.choices}
                    onChange={(e) => this.handleOnChange(e)}
                    selected={this.state.selectedOption} />
                <button onClick={() => this.handleClick()}>Vote</button>
                </div>
            );
        }
    }
  }


const PollOption = (props) => {

    return (
      <div className="pollOption">
        {props.options.map((choice, index) => (
          <label key={index}>
            <input type="radio"
              name="vote"
              value={choice.label}
              key={index}
              checked={props.selected === choice.label}
              onChange={props.onChange} />
            {choice.label}
          </label>
        ))}
      </div>
    );
  };

export default UserParticipation;




// function UserParticipation({question, username}) {
//     const [value, setValue] = useState();


//     function handleSubmit(e){
//         e.preventDefault();
//         console.log(e.target.value);
//     }

//     function valueChange(e){
//         e.preventDefault();
//         setValue(e.target.value);
//     }
//     return (
//         <>
//             <h2>Username: {username}</h2>
//             <h2>Question: {question.question}</h2>
//             <form onSubmit={handleSubmit}>
//                 {question.choices.map(((choice, index)=>(
//                         <div key={index}>
//                             <input type='radio' id={choice.id} name='questions'/>
//                             <label htmlFor={choice.id}>{choice.label}</label>
//                         </div>
//                     ))
//                 )}
//                 <input type='submit'/>
//             </form>


            
//         </>
//     )
// }

