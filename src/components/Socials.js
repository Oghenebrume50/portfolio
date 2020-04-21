import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faDev, faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'

class Socials extends React.Component {
  render() {
    return (
      <div className="social-holders">
        <a href="https://www.linkedin.com/in/raphael-noriode/" className="linkedln">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://github.com/Oghenebrume50">
          <FontAwesomeIcon icon={faGithub} className="github"/>
        </a>
        <a href="https://twitter.com/raphael_noriode" className="twitter">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://dev.to/oghenebrume50" className="devto">
          <FontAwesomeIcon icon={faDev} />
        </a>
      </div>
    )
  }
}

export default Socials;