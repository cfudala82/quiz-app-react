import React, { Component } from 'react';
import './crewHeader.css'

class CrewHeader extends Component {
  render() {
    return (
      <div>
        <header>
          <div class="crew-header">
            <div class="oval">
              <div class="crew-logo">
                <h1><em>Crew!</em></h1>
              </div>
            </div>
            <div className='nav-bar'>
              <nav>
                <ul>
                  <li><a href='#' className='btn'>Login</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default CrewHeader;
