import React from 'react';
import "./Intro.css"

function Intro(props) {
  return (
    <div className="intro-container">
      <div className="intro-div">
        <div className="intro">Kevin Lo</div>
        <div className="intro">Aspiring Software Developer</div>
        <div className="intro">Full-Stack Engineer</div>
      </div>
      <div className="intro">Learn More</div>
    </div>
  );
}

export default Intro;