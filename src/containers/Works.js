import React from 'react';
import Project from '../components/Project';
import '../css/Projects.css';

class Work extends React.Component {
  render() {
    return (
      <div class="all-projects">
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
    )
  }
}

export default Work;
