import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faInstagram, faMedium, faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'

class Socials extends React.Component {
  render() {
    return (
      <div className="social-holders">
        <a href="https://twitter.com/raphael_noriode" className="linkedln">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://twitter.com/raphael_noriode">
          <FontAwesomeIcon icon={faGithub} className="github"/>
        </a>
        <a href="https://twitter.com/raphael_noriode" className="twitter">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://twitter.com/raphael_noriode" className="insta">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://twitter.com/raphael_noriode" className="medium">
          <FontAwesomeIcon icon={faMedium} />
        </a>
      </div>
    )
  }
}

export default Socials;