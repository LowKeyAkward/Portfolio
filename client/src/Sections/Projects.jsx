import React from 'react';
import Gacha from "../Assets/Images/Gacha Gaming.png"
import Block from "../Assets/Images/The Block.png"
import Fashion from "../Assets/Images/Fashion-East.png"

function Projects(props) {
  return (
    <div className="project-container">
      <div className="project-title">Projects</div>
      <div className="project-div">

        <div className="project">
          <a href="https://github.com/LowKeyAkward/GachaGaming">
            <img src={Gacha} alt="Gacha Gaming" />
          </a>
          <div>Gacha Gaming is an gaming app made to emulate gacha games.
           The app randomly pulls heroes off a data table created on AirTable
            which the user will than use to battle an enemy until they win or lose.
            The loss or win is than recorded on the heroes stats back on the data table.
          </div>
        </div>

        <div className="project">
          <a href="https://github.com/KAthousand/block-app">
            <img src={Block} alt="The Block" />
          </a>
          <div>A web application built in collaboration with a
          team that provides users  a way to see gentrification,
          and ways to stop it. Whether it be supporting local
          events around your block, or contacting government
          officials to stop it.
          </div>
        </div>

        <div className="project">
          <a href="https://github.com/LowKeyAkward/Fashion-East">
            <img src={Fashion} alt="Fashion East" />
          </a>
          <div>Want to know what fashion trends are going on
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