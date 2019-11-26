import React, { useEffect } from 'react';
import { Link } from "react-router-dom";

import './header.css';
import {useStateValue} from "../../state";
import {heroError, heroRequested, viewRandomHero} from '../../actions';
import ServiceApi from "../../services";
import Spinner from "../spinner";
import PlayPaused from "../play-paused";

const Header = () => {

  const [ initialState, dispatch ] = useStateValue();
  const { count, randomId, randomIdHero, randomImgHero, randomNameHero, randomShow, countAddedHero } = initialState;

  useEffect(() => {

    const fetchData = async (id) => {
      dispatch(heroRequested());
      try {
        let service = new ServiceApi();
        const result = await service.getHero(id);
        dispatch(viewRandomHero(result));
      } catch (error) {
        dispatch(heroError(error));
      }
    };

    if (randomShow) {
      console.log('randomShow');
      setTimeout(() => fetchData(randomId), 3000);
    }

    if (randomId === 99) {
      fetchData(randomId);
    }

  }, [randomId, randomImgHero, dispatch, randomShow]);

  if (randomImgHero === '') {
    return (
      <div className="header">
        <Link to="/"><h1>SuperHero</h1></Link>
        <div className="random-hero">
          <Spinner />
        </div>
      </div>
    );
  }

  return (
    <div className="header">
      <Link to="/"><h1>SuperHero</h1></Link>
      <div className="random-hero">
        <img className="img-random-hero animated fadeIn delay-2s" alt="not found" src={randomImgHero} />
        <div className="random-hero-info">
          <h2>{randomNameHero}</h2>
          <div className="info-play-paused">
            <h5>id: {randomIdHero}</h5>
            <div className="play-span">
              <PlayPaused />
              <span>slides: {count}</span>
            </div>
          </div>
        </div>
        <div className="slides-added">
          <Link to="/details"><span>Added Heroes: {countAddedHero}</span></Link>
        </div>
      </div>
    </div>
  );
};

export default Header;