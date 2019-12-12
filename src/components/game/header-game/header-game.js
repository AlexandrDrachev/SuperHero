import React from 'react';

import './header-game.css';
import { useStateValue } from "../../../state";
import { onExitGamePage } from "../../../actions";

const HeaderGame = () => {

  const [ , dispatch ] = useStateValue();

  return (
    <div className="header-game">
      <h1>SuperHero... Game</h1>
      <span
        onClick={() => dispatch(onExitGamePage())}
        className="game-header-exit">
        Exit
      </span>
    </div>
  );
};

export default HeaderGame;