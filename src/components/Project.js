import React from 'react';
import '../css/Project.css';

class Project extends React.Component {
  render() {
    const {img_src, proj_title, proj_desc} = this.props;
    return (
      <a className="a-project" href="https://github.com/Oghenebrume50/portfolio">
        <div>
          <img src={img_src} alt="bookstore"/>
        </div>
        <div className="a-project-footer">
          <p className="project_title">{proj_title}</p>
          <p className="project_desc">{proj_desc}</p>
        </div>
      </a>
    )
  }
}

export default Project;
