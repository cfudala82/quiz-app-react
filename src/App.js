import React, { Component } from 'react';
import './App.css';
import Header from './containers/header/header';
import TeamName from './containers/teamName/teamName';
import QuizTitle from './containers/quizTitle/quizTitle';
import CurrentQuestion from './components/currentQuestion/currentQuestion';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <TeamName />
        <QuizTitle />
        <CurrentQuestion />
      </div>
    );
  }
}

export default App;
