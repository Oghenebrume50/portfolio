import React from 'react';
import '../css/Note.css';

class Note extends React.Component {
  render() {
    return (
      <div className="short-note">
        <p>Hi, I am Raphael Noriode</p>
        <p className="imp-message"><em>I just want to add value at scale</em></p>
      </div>
    )
  }
}

export default Note;
