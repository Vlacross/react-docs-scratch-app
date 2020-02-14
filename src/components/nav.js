/* */
import React from 'react';
import { Link } from 'react-router-dom';
import availablePaths from '../componentProfiles';



export default function Navigate() {

  const menuItems = availablePaths.map((component, index) => 
    component.operational ? <li key={index}>
      <Link to={component.publicPath}>{component.name}</Link>
    </li> :
    <li key={index}>
      {component.name}
    </li>
  )

  return (
    <div style={{border: 'solid 2px gold'}} id="component-navigation">
        <ul>
          {menuItems}
        </ul>
    </div>
  )
}


/*
  "Keys only make sense in the context of the surrounding array" - 
    if you wrap the <li> into a different component/element, the key should be transfered to the new element as long as it's still in the array
  Keys need to be unique among siblings, though different lists/arrays can share key values


    */
