import React from 'react';
import Content from './Content'
import projects from '../assets/projects.json';

const Work = props => {
    return (
      <>
        <h1 id="work" className="ProjectsTitle">Projects</h1>
        <div className="projectContainer">{projects.map (project => <Content {...project} />)}</div>
      </>
    )
}

export default Work;
