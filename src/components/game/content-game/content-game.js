import React from 'react';

import './content-game.css';
import GameDetails from "./game-details";
import AuthenticationPlayers from "./authentication-players";

const ContentGame = () => {
  return (
    <div className="content-game">
      <GameDetails />
      <AuthenticationPlayers/>
    </div>
  );
};

export default ContentGame;