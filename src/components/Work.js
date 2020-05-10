import React from 'react';
import Content from './Content'
import projects from '../assets/projects.json';

class Work extends React.Component {
  componentDidMount(){
    console.log(projects);
  }

  render() {
    return (
      <>
        <div className="container">{projects.map (project => <Content {...project} />)}</div>
      </>
    )
  }
}

export default Work;
