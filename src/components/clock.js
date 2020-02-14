import React, { Component } from 'react';

class Clock extends Component {
  render() {
    return (
      <div>
        <h1>Tick funksh Element</h1>
        <h3>It is {this.props.date.toLocaleTimeString()}.</h3>
      </div>
    );
  }

};

export default function tick() {
 
  return (
    <Clock date={new Date()} />
  );
}

setInterval(tick, 1000)