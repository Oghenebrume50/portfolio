import React from 'react';
import '../css/Project.css';

class Project extends React.Component {
  render() {
    const {img_src, proj_title, proj_desc, link, githubLink } = this.props;
    return (
      <div className="a-project">
        <a href={link}>
          <img src={img_src} alt="bookstore"/>
        </a>
        <div className="a-project-footer">
          <p className="project_title"><a href={githubLink}>{proj_title}(Github)</a></p>
          <p className="project_desc">{proj_desc}</p>
        </div>
      </div>
    )
  }
}

export default Project;
