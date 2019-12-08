import React, { Fragment, useEffect } from 'react';

import './authentication-players.css';
import {useStateValue} from "../../../../state";
import ServiceApi from "../../../../services";
import { heroError, heroLoaded, heroRequested, getDataGame,
         onChangePlayerX, onReadyPlayerX, onChangePlayer0, onFetchPlayerX } from "../../../../actions";
import Spinner from '../../../spinner';
import PlayerDetails from '../player-details';

const img1 = "https://www.superherodb.com/pictures2/portraits/10/100/639.jpg";
const img2 = "https://www.superherodb.com/pictures2/portraits/10/100/32.jpg";


const ButtonItem = ({item}) => {
  return (
    <div className="btn-item">{item}</div>
  );
};

const playerAvatar = (link) => {
  return (
    <img
      className="player-avatar"
      src={link}
      alt="no img"/>
  );
};

const AuthenticationPlayers = () => {

    const [ initialState, dispatch ] = useStateValue();
    const { randomId, objHero,
        game: { loading, playerX, player0, btnPlay, btnSlide } } = initialState;

    console.log(playerX.playerReady);
    console.log(player0.playerReady);
    console.log(playerX);

    useEffect( () => {

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
        fetchData(randomId);

    }, [randomId, dispatch]);

    const onGetRandomHero = () => {
        let randomIdHero = () => {
            return Math.floor(Math.random()*731);
        };
        const fetchData = async (id) => {
            dispatch(heroRequested());
            try {
                let service = new ServiceApi();
                const result = await service.getHero(id);
                dispatch(onFetchPlayerX(result));
            } catch (error) {
                dispatch(heroError(error));
            }
        };
        fetchData(randomIdHero());
    };


    const renderButtonItem = (item) => {
    return <ButtonItem item={item} />
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

  const playingField = (
    <Fragment>
      <div className="line-items">
        {renderButtonItem(playerAvatar(img1))}
        {renderButtonItem(playerAvatar(img2))}
        {renderButtonItem(2)}
      </div>
      <div className="line-items">
        {renderButtonItem(3)}
        {renderButtonItem(playerAvatar(img1))}
        {renderButtonItem(5)}
      </div>
      <div className="line-items">
        {renderButtonItem(playerAvatar(img2))}
        {renderButtonItem(7)}
        {renderButtonItem(playerAvatar(img1))}
      </div>
    </Fragment>
  );

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
            onClick={() => dispatch(onReadyPlayerX(playerX.player.image.url))}
            disabled={playerX.btnAddedPlayer}
            type="button"
            className="btn btn-outline-info btn-game-details">Player X</button>
        <button
            disabled={btnPlay}
            type="button"
            className="btn btn-success btn-game-details">PLAY</button>
        <button
            onClick={() => {}}
            disabled={player0.btnAddedPlayer}
            type="button"
            className="btn btn-outline-danger btn-game-details">Player Y</button>
      </div>
    </Fragment>
  );

  return (
    <div className="authentication-players">
      <PlayerDetails player={ playerX } head="Player X" action={ onChangePlayerX } playerReady={playerX.playerReady} />
      <div className="player-details change-player">
        {changePlayer}
      </div>
      <PlayerDetails player={ player0 } head="Player 0" action={onChangePlayer0} playerReady={player0.playerReady}/>
    </div>
  );
};

export default AuthenticationPlayers;

// https://www.superherodb.com/pictures2/portraits/10/100/639.jpg
// https://www.superherodb.com/pictures2/portraits/10/100/32.jpg