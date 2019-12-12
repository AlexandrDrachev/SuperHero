import React from 'react';

import './game-details.css';
import { useStateValue } from "../../../../state";
import { onTryAgain, onNewGame, onBackOneStepHistory, onForvardOneStepHistory } from "../../../../actions";
import {Link} from "react-router-dom";

const GameDetails = () => {

  const [ initialState, dispatch ] = useStateValue();
  const { autorisation, isAdministrator, game: { stepCount, field, activePlayer, winner, historyStep } } = initialState;

  const back = '<<<';
  const forvard = '>>>';

  return (
    <table className="table-details">
      <thead>
        <tr>
          <th>move</th>
          <th>game step</th>
          <th>history game</th>
          <th>winner</th>
          <th>
            <Link to="/home"><button
              disabled={!autorisation && !isAdministrator}
              className="btn btn-danger btn-sm exit-the-game">
              exit the game
            </button></Link>
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
            <button
              onClick={() => dispatch(onBackOneStepHistory())}
              disabled={!winner.status || stepCount < 1}
              type="button"
              className="btn btn-outline-danger btn-game-details">
              {back}
            </button>
            <button
              onClick={() => dispatch(onForvardOneStepHistory())}
              disabled={!winner.status || stepCount >= historyStep.length - 1}
              type="button"
              className="btn btn-outline-success btn-game-details">
              {forvard}
            </button></td>
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