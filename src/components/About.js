import React from 'react';
import data from '../assets/data.json'

class Intro extends React.Component {
  componentDidMount(){
    console.log(data[0])
  }

  render(){
    return (
      <section id="about" className="intro">
      <p>{data[1].wording}</p>
      <p>{data[1].wording1}</p>
      <p>{data[1].wording2}</p>
      <p>{data[1].wording3}</p>
      </section>
    )
  }
}

export default Intro
