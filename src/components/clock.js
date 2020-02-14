import React, { Component } from 'react';

export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    }
  }

  componentDidMount() {
    this.timer = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Tick funksh Element</h1>
        <h3>It is {this.state.date.toLocaleTimeString()}.</h3>
      </div>
    );
  }

};

/*

Basics of State:
 >Initializing state with a new value needs to be run through reacts built in `setState` method to properly change and render the content
  ex:
    this.setState({
      comment: "updated content"
    })

 >Trying to update state with an evaluation/expression will likely fail. In the case this kind of state updated is needed, you should pass setState a function.
    ex:
      this.setState((state, props) => ({
        counter: state.counter + props.increment,
      })
      )
  
 >Data flows down - you can pass state/props down to child components, but you need a method (redux, hooks, context) to pass data back up the chain

*/

