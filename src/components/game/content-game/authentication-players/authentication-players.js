import React, { Fragment, useEffect } from 'react';

import './authentication-players.css';
import { useStateValue } from "../../../../state";
import ServiceApi from "../../../../services";
import { heroError, heroLoaded, heroRequested, getDataGame,
         onChangePlayerX, onReadyPlayerX, onChangePlayer0, onReadyPlayer0, onField } from "../../../../actions";
import Spinner from '../../../spinner';
import PlayerDetails from '../player-details';
import versus from './versus.png';
import PlayingField from "../plaing-field";

const AuthenticationPlayers = () => {

  const [ initialState, dispatch ] = useStateValue();
  const { objHero, idHero,
    game: { loading, playerX, player0, btnPlay, btnSlide, field } } = initialState;

    useEffect( () => {

      let clear = false;

      const fetchData = async (id) => {
        dispatch(heroRequested());
        try {
            let service = new ServiceApi();
            const result = await service.getHero(id);
            dispatch(heroLoaded(result));
            dispatch(getDataGame());
        } catch (error) {
            dispatch(heroError(error));
        }
      };
      if (!clear) {
        fetchData(idHero);
      }
      return () => clear = true;
    }, [idHero, dispatch]);

    const onGetRandomHero = () => {
      let rndIdHero = () => {
        return Math.floor(Math.random()*731);
      };
      const fetchData = async (id) => {
        dispatch(heroRequested());
        try {
          let service = new ServiceApi();
          const result = await service.getHero(id);
          dispatch(heroLoaded(result));
        } catch (error) {
          dispatch(heroError(error));
        }
      };
      fetchData(rndIdHero());
    };


    const onGetDataPlayerObj = (dispatch, action) => {
      let playerObj = JSON.stringify(objHero);
      let parseRes = JSON.parse(playerObj);
      dispatch(action(parseRes));
    };

    if (loading) {
      return (
        <div className="authentication-players">
          <div className="player-details">
            <div className="player-img">
              <Spinner />
            </div>
           </div>
          <div className="player-details change-player">
            <Spinner />
         </div>
          <div className="player-details">
            <div className="player-img">
             <Spinner />
            </div>
          </div>
        </div>
      );
    }

  const changePlayer = (
    <Fragment>
      <h5>Change Player</h5>
      <div className="player-img img-change-player">
        <button
          disabled={btnSlide}
          onClick={() => onGetRandomHero()}
          type="button"
          className="btn btn-outline-success">rand</button>
        <img
          className="img-img-player"
          src={objHero.image.url}
          alt="no img"/>
        <button
          disabled={btnSlide}
          onClick={() => onGetRandomHero()}
          type="button"
          className="btn btn-outline-success">next</button>
      </div>
      <div className="btn-group-change-player">
        <button
          onClick={() => onGetDataPlayerObj(dispatch, onReadyPlayerX)}
          disabled={playerX.btnAddedPlayer}
          type="button"
          className="btn btn-outline-info btn-game-details">Player X</button>
        <button
          disabled={btnPlay}
          type="button"
          className="btn btn-success btn-game-details">PLAY</button>
        <button
          onClick={() => onGetDataPlayerObj(dispatch, onReadyPlayer0)}
          disabled={player0.btnAddedPlayer}
          type="button"
          className="btn btn-outline-danger btn-game-details">Player 0</button>
      </div>
    </Fragment>
  );

  if (playerX.playerReady && player0.playerReady && !field) {
    return (
      <div className="authentication-players">
        <PlayerDetails
          player={playerX}
          dispatch={dispatch}
          action={ onChangePlayerX }
        />
        <div className="versus-page">
          <div className="versus-image">
            <img className="versus-img" src={versus} alt="no img"/>
          </div>
          <button
            onClick={() => dispatch(onField())}
            disabled={btnPlay}
            type="button"
            className="btn btn-success btn-game-details">PLAY</button>
        </div>
        <PlayerDetails player={ player0 } dispatch={dispatch} action={onChangePlayer0} />
      </div>
    );
  }

  if (playerX.playerReady && player0.playerReady && field) {
    return <PlayingField />
  }

  return (
    <div className="authentication-players">
      <PlayerDetails
        player={playerX}
        dispatch={dispatch}
        action={ onChangePlayerX }
      />
      <div className="player-details change-player">
        {changePlayer}
      </div>
      <PlayerDetails
        player={ player0 }
        dispatch={dispatch}
        action={onChangePlayer0}
      />
    </div>
  );
};

export default AuthenticationPlayers;