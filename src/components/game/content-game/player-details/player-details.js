import React from 'react';

import { useStateValue } from "../../../../state";

const PlayerDetails = ({ player, head, action, playerReady }) => {

    const [ , dispatch ] = useStateValue();
    console.log(playerReady);

    const img = (
        <img
            className="img-img-player"
            src={ player.image.url }
            alt="no img"/>
    );

    const btnChange = (
        <button
            onClick={() => dispatch(action())}
            disabled={player.btnChangePlayer}
            type="button"
            className="btn btn-success btn-game-details">change player</button>
    );

    if (!playerReady) {
        console.log(111);
    }

    const viewBtnChange = !playerReady ? btnChange : img;
    const viewImg = playerReady ? img : btnChange;

    return (
        <div className="player-details">
            <h5>{ head }</h5>
            <div className="player-img">
                { viewBtnChange }
                { viewImg }
            </div>
            <h4>{ playerReady ? player.player.name : true }</h4>
        </div>
    );
};

export default PlayerDetails;
