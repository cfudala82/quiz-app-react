import React, { Component } from 'react';
import render from 'react-dom';
import { Router, Link } from '@reach/router';
import './App.css';
import Home from './containers/home/home';
import User from './containers/user/user';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Home path='/' />
          <User path='user' />
        </Router>
      </div>
    );
  }
}

export default App;
