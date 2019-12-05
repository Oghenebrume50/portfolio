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
          <Project 
            img_src="https://res.cloudinary.com/raphaelnoriode/image/upload/v1575559074/portfolio%20pic/photo-1522199670076-2852f80289c3_dciyxp.jpg"
            proj_title="Todo list"
            proj_desc="A todo list app for task management"
          />

          <Project 
            img_src="https://res.cloudinary.com/raphaelnoriode/image/upload/v1575559074/portfolio%20pic/11_vpkfgg.png"
            proj_title="Battleship"
            proj_desc="A battleship game with player and CPU"
          />

          <Project 
            img_src="https://res.cloudinary.com/raphaelnoriode/image/upload/v1575559074/portfolio%20pic/photo-1432888622747-4eb9a8efeb07_xikkfx.png"
            proj_title="A facebook clone"
            proj_desc="cloning the basic functionality of a social app"
          />

          <Project
            img_src="https://res.cloudinary.com/raphaelnoriode/image/upload/v1575559073/portfolio%20pic/photo-1501139083538-0139583c060f_ipbpon.jpg"
            proj_title="Chronos"
            proj_desc="A discord timer bot, to remind users of previous messages"
          />
        </div>
      </div>
    )
  }
}

export default Work;
