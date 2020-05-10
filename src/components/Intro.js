import React from 'react';
import data from '../assets/data.json'
import img from '../assets/laptop-header.jpg'

class Intro extends React.Component {
  componentDidMount(){
    console.log(data[0])
  }

  render(){
    return (
      <section id="intro" className="intro">
        <div className="intro-text">
          <h1>
            {data[0].wording}
          </h1>
        </div>
      </section>
    )
  }
}

export default Intro
