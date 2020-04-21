import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import ReactContactForm from 'react-mail-form';

import Socials from '../components/Socials';

import '../css/Footer.css';

class Footer extends React.Component {
  render() {
    return (
      <div className="footer" id="footer-contact">
        <div>
          <div className="foot-socials">
            <a href={window.location.href}><FontAwesomeIcon icon={faHome}/></a>
            <Socials/>
          </div>
          <ReactContactForm to="raphlbrume@gmail.com" className="mail-form"/>
        </div>
        <p>created by Raphael Noriode with <a href="https://reactjs.org/">Reactjs</a>, <a href="https://unsplash.com/">unsplash</a> and icon from <a href="https://fontawesome.com/">fontawesome</a></p>
      </div>
    )
  }
}

export default Footer;