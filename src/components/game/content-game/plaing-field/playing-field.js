import React, { useEffect } from 'react';

import './playing-field.css';
import PlayerDetails from "../player-details";
import { onChangePlayer0, onChangePlayerX, onChangePlayerStep,
         onHistoryNextStep, updateActivePlayer, updatePlayerXScore, updatePlayer0Score, isWinner } from "../../../../actions";
import { useStateValue } from "../../../../state";

const winnerCombinations = [ '012', '345', '678', '036', '147', '258', '048', '246' ];

const PlayingField = () => {

  const [ initialState, dispatch ] = useStateValue();
  const { game: { playerStyle, playerX, player0, stepPlayerX, historyStep,
          activePlayer, field, activePlayer: { player: { name } }, winner } } = initialState;

  useEffect(() => {

    let scoreX = playerX.score;
    scoreX.sort();
    let joinScoreX = scoreX.join('');
    let winnerX = winnerCombinations.some((el) => {
      return joinScoreX.includes(el);
    });

    let score0 = player0.score;
    score0.sort();
    let joinScore0 = score0.join('');
    let winner0 = winnerCombinations.some((el) => {
      return joinScore0.includes(el);
    });

    if (winnerX) {
      dispatch(isWinner(playerX.player.name));
    }
    if (winner0) {
      dispatch(isWinner(player0.player.name));
    }
  }, [playerX, player0, activePlayer, field]);

  const imgPlayer = (
    <img className="img-img-player" src={activePlayer.player.image.url} alt="no img" />
  );

  const testClick = (item, idx) => {

    stepPlayerX ? dispatch(updatePlayerXScore(idx)) : dispatch(updatePlayer0Score(idx));
    if (!item && !winner.status) {
      dispatch(onChangePlayerStep());
      dispatch(onHistoryNextStep(imgPlayer, idx));
      dispatch(updateActivePlayer());
    }
  };

  const returnLastItem = (arr) => {
    return arr[arr.length - 1];
  };

  const buttonItems = returnLastItem(historyStep);
  const playingField = buttonItems.players.map((item, idx) => {
    return (
      <ButtonItem item={item} idx={idx} func={testClick} key={idx}/>
    );
  });


  return (
    <div className="authentication-players">
      <PlayerDetails
        player={playerX}
        dispatch={dispatch}
        action={ onChangePlayerX } />
      <div className="player-details change-player">
        <div className="button-items-block">
          {playingField}
        </div>
      </div>
      <PlayerDetails
        player={player0}
        dispatch={dispatch}
        action={onChangePlayer0} />
    </div>
  );
};

export default PlayingField;

const ButtonItem = ({item, idx, func}) => {

  return (
    <div
      onClick={() => func(item, idx)}
      className="btn-item">
      {item}
    </div>
  );
};
