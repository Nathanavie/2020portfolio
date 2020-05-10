import React from 'react';

const Content = props => {
  let proj = props
  return(
    <div
      className="project"
      style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.95)), url("${proj.img}")`}}
    >
      <h3>{proj.name}</h3>
      <p>{proj.desc}</p>
      <div className="links">
        <a target="_blank" href={proj.GitHubLink}>GitHub</a>
        <a target="_blank" href={proj.DemoLink}>Demo</a>
      </div>
    </div>
  )
}

export default Content
