import React from 'react';
import CV from '../assets/NathanCV.pdf';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false,
    }
  }

handleToggle = (e) => {
  e.preventDefault();
    this.setState({
      isExpanded: !this.state.isExpanded
    });
}

render() {
  const { isExpanded } = this.state;
  return(
    <header id="top">
      <div className="header-content">
        <a href="#top">Nathan Atherton</a>
        <nav className = {`${isExpanded ? "is-expanded" : ""}`}>
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
          <a href={CV} target="_blank" rel="noopener noreferrer">CV</a>
        </nav>
        <i
          className="fa fa-bars"
          aria-hidden="true"
          onClick={e => this.handleToggle(e)}
        />
      </div>
    </header>
  )
}

}

export default Header
