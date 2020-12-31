import React from 'react';
import Gacha from "../Assets/Images/Gacha Gaming.png"
import Block from "../Assets/Images/The Block.png"
import Fashion from "../Assets/Images/Fashion-East.png"
import "./Projects.css"

function Projects(props) {
  return (
    <div className="project-container">
      <div className="project-title">Projects</div>
      <div className="project-div">

        <div className="project">
        <div className="project-title">Gacha Gaming</div>
          <a href="https://suspicious-nightingale-3a9d39.netlify.app/" target="_blank" rel="noreferrer">
            <img className="project-image" src={Gacha} alt="Gacha Gaming" />
          </a>
          <div className="project-content">Gacha Gaming is an gaming app made to emulate gacha games.
           The app randomly pulls heroes off a data table created on AirTable
            which the user will than use to battle an enemy until they win or lose.
            The loss or win is than recorded on the heroes stats back on the data table.
          </div>
        </div>

        <div className="project">
        <div className="project-title">The Block</div>
          <a href="https://the-block-app.netlify.app/" target="_blank" rel="noreferrer">
            <img className="project-image" src={Block} alt="The Block" />
          </a>
          <div className="project-content">A web application built in collaboration with a
          team that provides users  a way to see gentrification,
          and ways to stop it. Whether it be supporting local
          events around your block, or contacting government
          officials to stop it.
          </div>
        </div>

        <div className="project">
          <div className="project-title">Fashion East</div>
          <a href="https://pedantic-murdock-b7407a.netlify.app/" target="_blank" rel="noreferrer">
            <img className="project-image" src={Fashion} alt="Fashion East" />
          </a>
          <div className="project-content">Want to know what fashion trends are going on
          with eastern cultures? Fashion-East lets users post
          what their favorite Korean or Japanese outfits are,
          and than other users can show their support and comments.
          </div>
        </div>

      </div>
    </div>
  );
}

export default Projects;