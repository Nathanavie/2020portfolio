import React from 'react';

class Content extends React.Component {

componentDidMount() {

}
  render() {
    let proj = this.props
    return(
      <div
        className="project"
        style={{backgroundImage: `url("${this.props.img}")`}}
      >
        {proj.name}
      </div>
    )
  }
}

export default Content
