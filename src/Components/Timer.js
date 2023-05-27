
import React, { Component } from 'react'

export default class Timer extends Component {
    constructor(props){
        super(props);
        this.state = {counter:10};
    }

    startCounter = ()=> {
        if (this.state.counter > 0) {
          this.id = setInterval(this.decreaseCounter, 1000);
        }
    }

    decreaseCounter = ()=> {
        let counter = this.state.counter - 1;
        this.setState({
            counter: counter
        });
        
        if (counter === 0) { 
        //   alert("Times UP");
          clearInterval(this.id);
        }
      }

  render() {
    if(this.state.counter === 0){
        return <h1>Time's Up</h1>
    }
    
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.startCounter}>Start</button>
      </div>

    )
  }
}
