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
            <FontAwesomeIcon icon={faHome}/>
          </div>
          <div className="nav-item">
            <FontAwesomeIcon icon={faSmile} />
            <h3>About</h3>
          </div>
          <div className="nav-item">
            <FontAwesomeIcon icon={faStickyNote} />
            <h3>Work</h3>
          </div>
          <div className="nav-item">
            <FontAwesomeIcon icon={faEnvelope} />
            <h3>Contact</h3>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header;
