import React, { Component } from "react";
import { hot } from 'react-hot-loader';
import "./App.css";

import { Route } from 'react-router-dom';
import Clock from './components/clock';
import Navigate from './components/nav';

class App extends Component {
  render() {
    return(
        <div>
        <h1>Exampliify</h1>
        <Navigate />
        <Route exact path="/clock" component={Clock} />
      </div>
    )
  }
};

export default hot(module)(App)
