import React from 'react';
import "./Intro.css"
import Arrow from "../Assets/Images/down-arrow.png"

function Intro(props) {
  return (
    <div className="intro-container">
      
      <div className="intro-div">
        <div className="intro">Kevin Lo</div>
        <div className="intro">Aspiring Software Developer</div>
        <div className="intro">Full-Stack Engineer</div>
      </div>
      
      <div className="down">
        <div className="intro-learn">Learn More</div>
        <img className="down-arrow" src={Arrow} alt="down"/>
      </div>
      
    </div>
  );
}

export default Intro;