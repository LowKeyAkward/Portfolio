import React from 'react';
import CSS from "../Assets/Icons/CSS.svg"
import Express from "../Assets/Icons/express.svg"
import Heroku from "../Assets/Icons/heroku.svg"
import Html from "../Assets/Icons/HTML.svg"
import Js from "../Assets/Icons/JavaScript.svg"
import Mongo from "../Assets/Icons/mongodb.svg"
import Post from "../Assets/Icons/postgresql.svg"
import Rails from "../Assets/Icons/rails.svg"
import Reactic from "../Assets/Icons/React.svg"
import Ruby from "../Assets/Icons/ruby.svg"

function Skills(props) {
  return (
    <div className="skill-container">
      
      <div className="skill">
        <img className="skill-image" src={Html} alt="html" />
        <div className="skill-name">HTML</div>
      </div>

      <div className="skill">
        <img className="skill-image" src={CSS} alt="css" />
        <div className="skill-name">CSS</div>
      </div>

      <div className="skill">
        <img className="skill-image" src={Js} alt="javascript" />
        <div className="skill-name">JavaScript</div>
      </div>

      <div className="skill">
        <img className="skill-image" src={Reactic} alt="react" />
        <div className="skill-name">React</div>
      </div>

      <div className="skill">
        <img className="skill-image" src={Heroku} alt="heroku" />
        <div className="skill-name">Heroku</div>
      </div>

      <div className="skill">
        <img className="skill-image" src={Express} alt="express" />
        <div className="skill-name">Express</div>
      </div>

      <div className="skill">
        <img className="skill-image" src={Mongo} alt="mongodb" />
        <div className="skill-name">MongoDB</div>
      </div>

      <div className="skill">
        <img className="skill-image" src={Post} alt="postgresql" />
        <div className="skill-name">Postgresql</div>
      </div>

      <div className="skill">
        <img className="skill-image" src={Ruby} alt="ruby" />
        <div className="skill-name">Ruby</div>
      </div>

      <div className="skill">
        <img className="skill-image" src={Rails} alt="rails" />
        <div className="skill-name">Rails</div>
      </div>

    </div>
  );
}

export default Skills;