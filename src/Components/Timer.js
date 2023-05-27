
import React, { Component } from 'react'

export default class Timer extends Component {
    constructor(props){
        super(props);
        this.state = {counter:10};
    }


    componentDidMount() {
        this.setState({ counter: 10 });
    }



  render() {
    return (
      <div>Timer</div>

    )
  }
}
