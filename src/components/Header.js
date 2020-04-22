import React from 'react';
import { Link } from 'react-router-dom';

import '../css/Header.css';

class Header extends React.Component {
  render() {
    return (
      <nav className='Nav-bar'>
        <div className='nav-menu'>
          <div className='nav-item'>
            <Link className='a_btn' to='/about'>About</Link>
          </div>
          <div className='nav-item'>
            <Link className='a_btn' to='/projects'>Projects</Link>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header;
