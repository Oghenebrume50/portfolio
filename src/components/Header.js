import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSmile, faStickyNote, faEnvelope, faHome } from '@fortawesome/free-solid-svg-icons'
import '../css/Header.css';

class Header extends React.Component {
  render() {
    return (
      <nav className="Nav-bar">
        <h1>RN</h1>
        <div className="nav-menu">
          <div className="nav-item">
            <a href={window.location.reload}><FontAwesomeIcon icon={faHome}/></a>
          </div>
          <div className="nav-item">
            <FontAwesomeIcon icon={faSmile} />
            <h3 id="about-btn">About</h3>
          </div>
          <div className="nav-item">
            <FontAwesomeIcon icon={faStickyNote} />
            <h3 id="work-btn">Work</h3>
          </div>
          <div className="nav-item">
            <FontAwesomeIcon icon={faEnvelope} />
            <a href="#footer-contact" id="ggg"><h3>Contact</h3></a>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header;
