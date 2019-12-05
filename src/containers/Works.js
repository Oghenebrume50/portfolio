import React from 'react';
import Project from '../components/Project';
import '../css/Projects.css';

class Work extends React.Component {
  render() {
    return (
      <div className="all-projects">
        <p>Projects</p>
        <div>
          <Project 
            img_src="https://res.cloudinary.com/raphaelnoriode/image/upload/v1575559074/portfolio%20pic/photo-1485322551133-3a4c27a9d925_ivcixw.jpg" 
            proj_title="BookStore"
            proj_desc="A project to store books owned and read by an individual"
            />
          <Project />
          <Project />
          <Project />
        </div>
      </div>
    )
  }
}

export default Work;
