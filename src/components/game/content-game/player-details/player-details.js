import React from 'react';

const PlayerDetails = ({ player, dispatch, action }) => {

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

    return (
      <div className="player-details">
        <h5>{ player.name }</h5>
        <div className="player-img">
          { !player.playerReady ? btnChange() : img }
        </div>
        <h4>{ player.playerReady ? player.player.name : true }</h4>
      </div>
    );
};

export default PlayerDetails;
