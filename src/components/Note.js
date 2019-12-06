import React from 'react';
import '../css/Note.css';

class Note extends React.Component {
  render() {
    return (
      <div className="short-note">
        <p>Hi, I am Raphael Noriode</p>
        <p className="imp-message"><em>I just want to add value at scale</em></p>
        <p>
            I am looking for an opportunity to learn and grow with an awesome team, 
            I have meddled with the MERN stack, written Node with SQL DBMS like postgres,
            and I work mostly with Ruby on rails in recent times, but I am also excited to 
            learn new technologies and contribute to the overall progress of my team.
        </p>
      </div>
    )
  }
}

export default Note;
