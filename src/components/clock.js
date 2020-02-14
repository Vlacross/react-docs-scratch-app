import React, { Fragment } from 'react';
function Clock(props) {

  const element = (
    <div>
      <h1>Tick funksh Element</h1>
      <h3>It is {props.date.toLocaleTimeString()}.</h3>
    </div>
  )

  return (
    element
  );

}

export default function tick() {
 
  return (
    <Clock date={new Date(0)} />
  );
}

setInterval(tick, 1000)