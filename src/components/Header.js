import React from 'react';

import '../css/Header.css';

class Header extends React.Component {
  render() {
    return (
      <nav className="Nav-bar">
        <div className="nav-menu">
          <div className="nav-item">
            <h3 id="about-btn">About</h3>
          </div>
          <div className="nav-item">
            <h3 id="work-btn">Projects</h3>
          </div>
          <div className="nav-item">
            <a href="#footer-contact" id="ggg"><h3>Contact</h3></a>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header;
