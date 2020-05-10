import React from 'react';
import data from '../assets/data.json'

class Intro extends React.Component {
  componentDidMount(){
    console.log(data[0])
  }

  render(){
    return (
      <section id="about" className="intro">
        <div className="about-text sb2 box">
          <h1>{data[1].title}</h1>
          <p>{data[1].wording}</p>
          <p>{data[1].freelance}<a href="#contact">throw me a line.</a></p>
        </div>
      </section>
    )
  }
}

export default Intro
