import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faInstagram, faMedium } from '@fortawesome/free-brands-svg-icons'

class Socials extends React.Component {
  render() {
    return (
      <div>
        <FontAwesomeIcon icon={faTwitter} />
        <FontAwesomeIcon icon={faFacebook} />
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faMedium} />
      </div>
    )
  }
}

export default Socials;