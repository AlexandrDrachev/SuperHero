import React, { useEffect, useRef } from 'react';

import './content.css';
import ServiceApi from "../../services";
import { arrHero }  from "../../services/api-service";
import Spinner from "../spinner";
import { useStateValue } from '../../state';
import {
  heroLoaded, heroRequested, heroError, returnNewId,
  onToggleIdHero, onUpdateArrayAddedHeroes, warningError } from '../../actions';
import ErrorIndicator from "../error-indicator";

const Content = () => {

  const [ initialState, dispatch ] = useStateValue();

  const { idHero, imgHero, nameHero, genderHero, raceHero, publisherHero, error } = initialState;
  const newId = useRef(null);

  useEffect( () => {
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

    fetchData(idHero);
  }, [idHero, dispatch, newId]);

  if (!imgHero) {
    return <div className="img-hero"><Spinner /></div>
  }

  const getEventTargetValue = (value) => {
    if (!value || value > 731 || value <= 0 || typeof value !== "number") {
      return () => dispatch(returnNewId());
    }
    try {
      return newId.current = value
    } catch {
      return warningError()
    }
  };

  const getOnToggleIdHero = (value) => {
    if (!value) {
      return () => dispatch(returnNewId());
    }
    return dispatch(onToggleIdHero(value))
  };

  if (error) {
    return (
      <ErrorIndicator />
    );
  }

  return (
    <div className="content">
      <div className="block-hero">
        <div className="hero">
          <div className="img-hero">
            <img className="img-hero-image" alt="img" src={imgHero} />
          </div>
          <div className="head-hero">
            <h2>{nameHero}</h2>
            <span>{idHero}</span>
            <span>{genderHero}</span>
            <span>{raceHero}</span>
            <span>{publisherHero}</span>
            <button
              onClick={() => dispatch(onUpdateArrayAddedHeroes(idHero))}
              type="button"
              className="btn btn-info btn-head-hero">Add Hero</button>
          </div>
        </div>
      </div>
      <div className="block-input-id">
        <div className="form-group">
          <label htmlFor="exampleFormControlSelect1">search hero by name</label>
          <select
            onChange={(event) => newId.current = event.target.value}
            className="form-control"
            id="exampleFormControlSelect1">
            {arrHero.map((hero) => {
              return (
                <option
                  value={+hero.id}
                  key={hero.id}>
                  {hero.name}
                </option>
              );
            })}
          </select>
        </div>
        <input
          onChange={(event) => getEventTargetValue(+event.target.value)}
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="search hero by id (1 - 731)" />
        <button
          onClick={() => getOnToggleIdHero(+newId.current)}
          className="btn btn-info btn-head-hero">Get Hero</button>
      </div>
    </div>
  );
};

export default Content;

