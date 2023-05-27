
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
          this.timer = setInterval(this.countDown, 1000);
        }
    }





  render() {
    return (
      <div>Timer</div>

    )
  }
}
