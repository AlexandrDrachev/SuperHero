import React from 'react';

import './game-details.css';

const img1 = "https://www.superherodb.com/pictures2/portraits/10/100/639.jpg";

const GameDetails = () => {
  return (
    <table className="table-details">
      <thead>
        <tr>
          <th>move</th>
          <th>step number</th>
          <th>step back</th>
          <th>step forward</th>
          <th>winner</th>
          <th><span className="exit-the-game">exit the game</span></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><img
            className="player-avatar-icon"
            src={img1}
            alt="no img" />
          Batman</td>
          <td>7</td>
          <td>
            <button type="button" className="btn btn-outline-danger btn-game-details">back</button></td>
          <td>
            <button type="button" className="btn btn-outline-success btn-game-details">forvard</button></td>
          <td>...pending</td>
          <th><button className="btn btn-primary btn-sm">tru again</button></th>
        </tr>
      </tbody>
    </table>
  );
};

export default GameDetails;