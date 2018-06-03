import React, { Component } from 'react';

import Header from './../header/header';
import TeamName from './../teamName/teamName';
import QuizTitle from './../quizTitle/quizTitle';
import CurrentQuestion from './../../components/currentQuestion/currentQuestion';
import Timer from './../timer/timer';

class Home extends Component {
  
  render() {
    return(
      <div>
        <Header />
        <TeamName />
        <QuizTitle />
        <CurrentQuestion />
        <Timer />
      </div>
    );
  }
}

export default Home;