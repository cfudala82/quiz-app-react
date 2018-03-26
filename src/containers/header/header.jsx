import React, { Component } from 'react';
import './header.css'

class Header extends Component {

  render() {
    return (
      <div>
        <header>
          <div className="crew-header">
            <div className="oval">
              <div className="crew-logo">
                <h1><em>Crew!</em></h1>
              </div>
            </div>
              <nav className='nav-bar'>
                <div className='btn'>
                  <a href='http://localhost:3000/' className='btn'>Login</a>
                </div>
              </nav>
            </div>
        </header>
      </div>
    );
  }
}

export default Header;
