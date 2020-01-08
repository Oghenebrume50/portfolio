import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

import Socials from '../components/Socails';

import '../css/Footer.css';

class Footer extends React.Component {
  render() {
    return (
      <div className="footer" id="footer-contact">
        <div>
          <a href={window.location.href}><FontAwesomeIcon icon={faHome}/></a>
          <Socials/>
        </div>
        <p>created by Raphael Noriode with <a href="https://reactjs.org/">Reactjs</a>, <a href="https://unsplash.com/">unsplash</a> and icon from <a href="https://fontawesome.com/">fontawesome</a></p>
      </div>
    )
  }
}

export default Footer;