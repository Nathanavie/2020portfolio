import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Content = props => {
  let proj = props.projects

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    }
  };

  const projects = proj.map((project, index) => {
    return (
      <div
        key={index}
        className="project"
        style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.95)), url("${project.img}")`}}
      >
        <h3>{project.name}</h3>
        <p>{project.desc}</p>
        <div className="links">
          <a target="_blank" rel="noopener noreferrer" href={project.GitHubLink}>GitHub</a>
          {project.DemoLink != null ? <a target="_blank" rel="noopener noreferrer" href={project.DemoLink}>Demo</a> : ''}
        </div>
      </div>

    )
  })
  return(
    <>
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={false}
        customTransition="all 1s"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {projects}
      </Carousel>
    </>
  )
}

export default Content
