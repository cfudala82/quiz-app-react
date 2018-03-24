import React, {Component} from 'react';
import './currentQuestion.css';

class CurrentQuestion extends Component {
  render () {
    return (
      <div class="current-question">
        <div class="question">
          <h3>This is a question that sounds more like a description?</h3>
        </div>
        <div class="answer">
          <ul>
            <li>
              <div class="icon">
                <span class="icon-letter">A</span>
              </div>
              Some Answer
            </li>
            <li>
              <div class="icon">
                <span class="icon-letter">B</span>
              </div>
              Some other answer
            </li>
            <li>
              <div class="icon">
                <span class="icon-letter">C</span>
              </div>
              Wrong answer
            </li>
            <li>
              <div class="icon">
                <span class="icon-letter">D</span>
              </div>
              Trick answer
            </li>
            <li>
              <div class="icon">
                <span class="icon-letter">E</span>
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
