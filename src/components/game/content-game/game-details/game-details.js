import React from 'react';

import './game-details.css';
import { useStateValue } from "../../../../state";
import { onTryAgain, onNewGame } from "../../../../actions";

const img1 = "https://www.superherodb.com/pictures2/portraits/10/100/639.jpg";

const GameDetails = () => {

  const [ initialState, dispatch ] = useStateValue();
  const { game, game: { stepCount, field, activePlayer, winner } } = initialState;

  const back = '<<<';
  const forvard = '>>>';

  return (
    <table className="table-details">
      <thead>
        <tr>
          <th>move</th>
          <th>game step</th>
          <th>step back</th>
          <th>step forward</th>
          <th>winner</th>
          <th>
            <button
              onClick={() => {}}
              className="btn btn-danger btn-sm exit-the-game">
              exit the game
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            {field ? <img
              className="player-avatar-icon"
              src={activePlayer.player.image.url}
              alt="no img" /> : null}
            {field ? activePlayer.player.name : activePlayer.player.name}
          </td>
          <td>{stepCount}</td>
          <td>
            <button type="button" className="btn btn-outline-danger btn-game-details">{back}</button></td>
          <td>
            <button type="button" className="btn btn-outline-success btn-game-details">{forvard}</button></td>
          <td>{winner.message}</td>
          <th>
            <button
              onClick={() => dispatch(onNewGame())}
              className="btn btn-success btn-sm btn-new-game">
              new game
            </button>
            <button
              onClick={() => dispatch(onTryAgain())}
              className="btn btn-primary btn-sm btn-new-game">
              try again
            </button>
          </th>
        </tr>
      </tbody>
    </table>
  );
};

export default GameDetails;