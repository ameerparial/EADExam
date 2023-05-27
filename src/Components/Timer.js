
import React, { Component } from 'react'

export default class Timer extends Component {
    constructor(props){
        super(props);
        this.state = {counter:10};
    }

    componentDidMount() {
        this.setState({ counter: 10 });
    }

    startCounter = ()=> {
        if (this.state.counter > 0) {
          this.timer = setInterval(this.decreaseCounter, 1000);
        }
    }

    decreaseCounter = ()=> {
        let counter = this.state.counter - 1;
        this.setState({
            counter: counter
        });
        
        if (counter == 0) { 
          clearInterval(this.timer);
          alert("Times UP");
        }
      }

  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.startCounter}>Start</button>
      </div>

    )
  }
}
