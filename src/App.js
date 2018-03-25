import React, { Component } from 'react';
import './App.css';
import CrewHeader from './containers/crewHeader/crewHeader';
import TeamName from './containers/teamName/teamName';
import QuizTitle from './containers/quizTitle/quizTitle';
import CurrentQuestion from './components/currentQuestion/currentQuestion';


class App extends Component {
  render() {
    return (
      <div className="App">
        <CrewHeader />
        <TeamName />
        <QuizTitle />
        <CurrentQuestion />
      </div>
    );
  }
}

export default App;
