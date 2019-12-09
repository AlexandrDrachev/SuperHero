import React, { Fragment } from 'react';

import './playing-field.css';
import PlayerDetails from "../player-details";
import {onChangePlayer0, onChangePlayerX, onChangePlayerStep} from "../../../../actions";
import {useStateValue} from "../../../../state";

const ButtonItem = ({item}) => {
  return (
    <div
      className="btn-item">
      {item}
    </div>
  );
};

const PlayingField = () => {

  const [ initialState, dispatch ] = useStateValue();
  const { game: { playerX, player0, stepPlayerX, historyStep } } = initialState;
  console.log(playerX.player.image, historyStep);

  const imgPlayerX = (
    <img className="img-img-player" src={playerX.player.image} alt="no img" />
  );
  const imgPlayer0 = (
    <img className="img-img-player" src={player0.player.image} alt="no img" />
  );

  const testClick = (item, id) => {
    if (item === null) {
      dispatch(onChangePlayerStep());
      if (stepPlayerX) {
        item = imgPlayerX
      }
    }
  };

  const playingField = historyStep.map((step) => {
    return step.map((value, idx) => {
      return (
        <div>
          <ButtonItem key={idx} item={value}/>
        </div>
      );
    })
  });


  return (
    <div className="authentication-players">
      <PlayerDetails
        player={playerX}
        dispatch={dispatch}
        action={ onChangePlayerX } />
      <div className="player-details change-player">
        {playingField}
      </div>
      <PlayerDetails
        player={player0}
        dispatch={dispatch}
        action={onChangePlayer0} />
    </div>
  );
};

export default PlayingField;

// const playingField = (
//   <Fragment>
//     <div className="line-items">
//       <ButtonItem item={null} id={0} func={testClick} />
//       {renderButtonItem(1, 1, testClick)}
//       {renderButtonItem(2, 2, testClick)}
//     </div>
//     <div className="line-items">
//       {renderButtonItem(3, 3)}
//       {renderButtonItem(4, 4)}
//       {renderButtonItem(5, 5)}
//     </div>
//     <div className="line-items">
//       {renderButtonItem(6, 6)}
//       {renderButtonItem(7, 7)}
//       {renderButtonItem(8, 8)}
//     </div>
//   </Fragment>
// );