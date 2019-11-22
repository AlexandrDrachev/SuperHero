import React, { useEffect } from 'react';

import './content.css';
import ServiceApi from "../../services";
import { arrHero }  from "../../services/api-service";
import Spinner from "../spinner";
import { useStateValue } from '../../state';
import { heroLoaded, heroRequested, heroError, onToggleIdHero, onUpdateObjectAddedHeroes } from '../../actions';

const Content = () => {

  const [ initialState, dispatch ] = useStateValue();

  const { idHero, imgHero, nameHero, genderHero, raceHero, publisherHero, objTableCartHero } = initialState;
  console.log(initialState);

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
  }, [idHero, dispatch]);

  let newId;

  if (!imgHero) {
    return <div className="img-hero"><Spinner /></div>
  }

  if (!idHero || idHero > 731) {
    return idHero;
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
            <span>{genderHero}</span>
            <span>{raceHero}</span>
            <span>{publisherHero}</span>
            <button
              onClick={() => dispatch(onUpdateObjectAddedHeroes())}
              type="button"
              className="btn btn-info btn-head-hero">Add Hero</button>
          </div>
        </div>
      </div>
      <div className="block-input-id">
        <div className="form-group">
          <label htmlFor="exampleFormControlSelect1">search for a hero by name</label>
          <select
            onChange={(event) => newId = event.target.value}
            className="form-control"
            id="exampleFormControlSelect1">
            {arrHero.map((hero) => {
              return (
                <option
                  value={hero.id}
                  key={hero.id}>
                  {hero.name}
                </option>
              );
            })}
          </select>
        </div>
        <input
          onChange={(event) => newId = event.target.value}
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="hero search by id (1 - 731)" />
        <button
          onClick={() => dispatch(onToggleIdHero(newId))}
          className="btn btn-info btn-head-hero">Get Hero</button>
      </div>
    </div>
  );
};

export default Content;

