import React from 'react';

import Socials from './Socails';

import '../css/Note.css';

class Note extends React.Component {
  render() {
    return (
      <div className="short-note">
        <div>
          <p className="name-intro">Hi, I am Raphael Noriode</p>
          <Socials/>
        </div>
        <p className="imp-message"><em>I just want to add value at scale</em>
          <a href="https://drive.google.com/file/d/16_IMq_gJ8RbzVD2I46G0vKjfkvqdebtw/view?usp=sharing"> (see resume) </a>
        </p>
      </div>
    )
  }
}

export default Note;
