import React from 'react';
import data from '../assets/data.json'
import nathan from '../assets/NathanFaceQ.png'

class Intro extends React.Component {

  render(){
    return (
      <section id="about" className="intro">
        <div className="about-text sb2 box">
          <h1>{data[1].title}</h1>
          <p>{data[1].wording}</p>
          <p>{data[1].freelance}<a href="#contact">throw me a line.</a></p>
        </div>
        <img src={nathan} alt="nathan" />
      </section>
    )
  }
}

export default Intro
