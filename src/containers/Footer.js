import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

import Socials from '../components/Socails';

import '../css/Footer.css';

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <FontAwesomeIcon icon={faHome}/>
        <Socials/>
        <p>created by Raphael Noriode with Reactjs and icon from fontawesome</p>
      </div>
    )
  }
}

export default Footer;