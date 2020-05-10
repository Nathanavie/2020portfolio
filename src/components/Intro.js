import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import data from '../assets/data.json'
import img from '../assets/laptop-header.jpg'

class Intro extends React.Component {
  componentDidMount(){
    console.log(data[0])
  }

  render(){
    return (
      <section id="intro" className="intro">
        <div>
          <ReactTypingEffect
            text={data[0].wording}
            speed="100"
            typingDelay="500"
            className="intro-text"
          />
        </div>
      </section>
    )
  }
}

export default Intro
