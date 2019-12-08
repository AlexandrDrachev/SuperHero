import React from 'react';

import './game.css';
import HeaderGame from "./header-game";
import ContentGame from "./content-game";
import {useStateValue} from "../../state";

const Game = () => {


  return (
    <div className="game">
      <HeaderGame />
      <ContentGame />
    </div>
  );
};

export default Game;