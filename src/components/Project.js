import React from 'react';
import '../css/Project.css';

class Project extends React.Component {
  render() {
    const {img_src, proj_title, proj_desc} = this.props;
    return (
      <div className="a-project">
        <div>
          <img src={img_src} alt="bookstore"/>
        </div>
        <div>
          <p className="project_title">{proj_title}</p>
          <p className="project_desc">{proj_desc}</p>
        </div>
      </div>
    )
  }
}

export default Project;
