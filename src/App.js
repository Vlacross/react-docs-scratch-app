import React, { Component } from "react";
import { hot } from 'react-hot-loader';
import "./App.css";

import { Route } from 'react-router-dom';
import Clock from './components/clock';
import Navigate from './components/nav';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false
    };
  }

  toggleState() {
    this.setState({
      toggle: !this.state.toggle
    })
  }

  render() {
    return(
        <div>
        <h1>Exampliify</h1>
        <button onClick={() => this.toggleState()}>
          Menu
        </button>
        { this.state.toggle && <Navigate /> }
        <Route exact path="/clock" component={Clock} />
      </div>
    )
  }
};

export default hot(module)(App)

/*
default javascript object methods are not bound, so for `toggleState`, I could have put:
      this.toggleState = this.toggleState.bind(this)
  in the constructor, then I could have labelled my button as:
      <button onClick={this.toggleState}>

  But instead just passed in a callback in the form of an arrow function. Doing this to a child component can/will trigger a re-render, so binding is preferred.

  Passing arguments to event handlers is done by passing the event object through the callback:
      <button onClick={(e) => this.toggleState(e.name)}>
*/
