import React, { Component } from 'react';
import './App.css';
import LogoView from './containers/logoView/logoView';
import TeamName from './containers/teamName/teamName';
import QuizTitle from './containers/quizTitle/quizTitle';
import CurrentQuestion from './components/currentQuestion/currentQuestion';


class App extends Component {
  render() {
    return (
      <div className="App">
        <LogoView />
        <TeamName />
        <QuizTitle />
        <CurrentQuestion />
      </div>
    );
  }
}

export default App;
