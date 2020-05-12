import React from 'react';

const Content = props => {
  let proj = props.projects
  
  const projects = proj.map((project, index) => {
    return (
      <div
        key={index}
        className="project"
        style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.95)), url("${project.img}")`}}
      >
        <h3>{project.name}</h3>
        <p>{project.desc}</p>
        <div className="links">
          <a target="_blank" rel="noopener noreferrer" href={project.GitHubLink}>GitHub</a>
          <a target="_blank" rel="noopener noreferrer" href={project.DemoLink}>Demo</a>
        </div>
      </div>

    )
  })
  return(
    <>
    {projects}
    </>
  )
}

export default Content
