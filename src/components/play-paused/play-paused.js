import React from 'react';

import './play-paused.css';
import {onToggleRandomShow} from "../../actions";
import {useStateValue} from "../../state";

const PlayPaused = () => {

  const [ initialState, dispatch ] = useStateValue();

  let buttonName = "Play Show";

  if (initialState.randomShow) {
    buttonName = "Pause";
  }

  return (
    <div className="play-paused">
      <button
        onClick={() => dispatch(onToggleRandomShow())}
        className="btn btn-info btn-play-paused" >{buttonName}</button>
    </div>
  );
};

export default PlayPaused;