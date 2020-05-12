import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import data from '../assets/data.json'

class Intro extends React.Component {
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
