import React from 'react';
import Content from './Content'
import projects from '../assets/projects.json';

const Work = props => {
    return (
      <>
        <h1 className="ProjectsTitle">Projects</h1>
        <div id="work" className="projectContainer">{projects.map (project => <Content {...project} />)}</div>
      </>
    )
}

export default Work;
