import React from 'react';

class Project extends React.Component {
  render() {
    return (
      <div>
        <div>
          <img src="https://images.unsplash.com/photo-1575216993067-ccf605d07f41?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=401&q=80" alt="nnkjn"/>
        </div>
        <div>
          <p class="project_title">project title</p>
          <p class="project_desc">project description</p>
        </div>
      </div>
    )
  }
}

export default Project;
