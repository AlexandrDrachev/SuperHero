import React, { Fragment } from 'react';

import './authentication-players.css';

const img1 = "https://www.superherodb.com/pictures2/portraits/10/100/639.jpg";
const img2 = "https://www.superherodb.com/pictures2/portraits/10/100/32.jpg";

const PlayerDetails = ({ player, name, link }) => {
  return (
    <div className="player-details">
      <h5>{player}</h5>
      <div className="player-img">
        <img
          className="img-img-player"
          src={link}
          alt="no img"/>
      </div>
      <h4>{name}</h4>
    </div>
  );
};

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

  const renderButtonItem = (item) => {
    return <ButtonItem item={item} />
  };

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
        <button type="button" className="btn btn-outline-success">rand</button>
        <img
          className="img-img-player"
          src="https://www.superherodb.com/pictures2/portraits/10/100/639.jpg"
          alt="no img"/>
        <button type="button" className="btn btn-outline-success">next</button>
      </div>
      <div className="btn-group-change-player">
        <button type="button" className="btn btn-outline-info btn-game-details">Player X</button>
        <button type="button" className="btn btn-success btn-game-details">PLAY</button>
        <button type="button" className="btn btn-outline-danger btn-game-details">Player Y</button>
      </div>
    </Fragment>
  );

  return (
    <div className="authentication-players">
      <PlayerDetails player="Player X" name="Batman" link={img1}/>
      <div className="player-details change-player">
        {changePlayer}
      </div>
      <PlayerDetails player="Player Y" name="Woman Cat" link={img2}/>
    </div>
  );
};

export default AuthenticationPlayers;

// https://www.superherodb.com/pictures2/portraits/10/100/639.jpg
// https://www.superherodb.com/pictures2/portraits/10/100/32.jpg