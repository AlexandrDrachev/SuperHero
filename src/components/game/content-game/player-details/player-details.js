import React from 'react';
import {useStateValue} from "../../../../state";

const PlayerDetails = ({ player, dispatch, action }) => {

  const [ initialState ] = useStateValue();
  const { game: { winner: { status, message } } } = initialState;

  const img = (
    <img
      className="img-img-player"
      src={ player.player.image.url }
      alt="no img"/>
  );

    const btnChange = () => {
      return (
        <button
          onClick={() => dispatch(action())}
          disabled={player.btnChangePlayer}
          type="button"
          className="btn btn-success btn-game-details">change player</button>
      );
    };

    const messageWinner = (
      <div className="player-winner-message">
        <span>'WINNER'</span>
        <span>{message}!!!</span>
      </div>
    );

    return (
      <div className="player-details">
        <h5>{ player.playerReady ? player.player.name : player.name }</h5>
        <div className="player-img">
          { !player.playerReady ? btnChange() : img }
        </div>
        <h4>{ player.playerReady ? (status ? messageWinner : true) : true }</h4>
      </div>
    );
};

export default PlayerDetails;
