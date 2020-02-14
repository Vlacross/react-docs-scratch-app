/* */
import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigate() {

  const clock = {
    name: 'clock',
    path: '/clock'
  }

  console.log(clock)

  return (
    <div style={{border: 'solid 2px gold'}} id="component-navigation">
        <button>Menu</button>
        <ul>
          <li><Link to={clock.name}>{clock.name}</Link></li>
        </ul>
    </div>
  )
}
