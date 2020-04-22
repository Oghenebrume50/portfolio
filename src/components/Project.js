import React from 'react';
import '../css/Project.css';

class Project extends React.Component {
  render() {
    const {img_src, proj_title, proj_desc, link, githubLink } = this.props;
    return (
      <div className="a-project">
        <div className="a-project-footer">
          <p className="project_desc">{proj_desc}</p>
          <p className="project_title">
            view <a href={link}>{proj_title}</a>
          </p>
          <p>
            <a href={githubLink}>source code</a>
          </p>
        </div>
        <img src={img_src} alt="bookstore"/>
      </div>
    )
  }
}

export default Project;
