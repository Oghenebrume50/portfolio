import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faInstagram, faMedium, faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'

class Socials extends React.Component {
  render() {
    return (
      <div className="social-holders">
        <a href="https://twitter.com/raphael_noriode"><FontAwesomeIcon icon={faLinkedin} /></a>
        <a href="https://twitter.com/raphael_noriode"><FontAwesomeIcon icon={faGithub} /></a>
        <a href="https://twitter.com/raphael_noriode"><FontAwesomeIcon icon={faTwitter} /></a>
        <a href="https://twitter.com/raphael_noriode"><FontAwesomeIcon icon={faInstagram} /></a>
        <a href="https://twitter.com/raphael_noriode"><FontAwesomeIcon icon={faMedium} /></a>
      </div>
    )
  }
}

export default Socials;