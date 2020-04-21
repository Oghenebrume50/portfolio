import React from 'react';
import { Link } from 'react-router-dom';

import '../css/Header.css';

class Header extends React.Component {
  render() {
    return (
      <nav className='Nav-bar'>
        <div className='nav-menu'>
          <div className='nav-item'>
            <Link id='about-btn' to='/about'>About</Link>
          </div>
          <div className='nav-item'>
            <Link id='work-btn' to='/projects'>Projects</Link>
          </div>
          <div className='nav-item'>
            <Link to='/contact' id='ggg'>Contact</Link>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header;
