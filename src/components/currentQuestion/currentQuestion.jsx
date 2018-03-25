import React, {Component} from 'react';
import './currentQuestion.css';

class CurrentQuestion extends Component {
  render () {
    return (
      <div className="current-question">
        <div className="question">
          <h3>This is a question that sounds more like a description?</h3>
        </div>
        <div className="answer">
          <ul>
            <li>
              <div className="icon">
                <span className="icon-letter">A</span>
              </div>
              Some Answer
            </li>
            <li>
              <div className="icon">
                <span className="icon-letter">B</span>
              </div>
              Some other answer
            </li>
            <li>
              <div className="icon">
                <span className="icon-letter">C</span>
              </div>
              Wrong answer
            </li>
            <li>
              <div className="icon">
                <span className="icon-letter">D</span>
              </div>
              Trick answer
            </li>
            <li>
              <div className="icon">
                <span className="icon-letter">E</span>
              </div>
              All of the above
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default CurrentQuestion;
