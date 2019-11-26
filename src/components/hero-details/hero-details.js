import React from 'react';

import './hero-details.css';
import {useStateValue} from "../../state";
import { onHeroCartRemoved } from '../../actions';

const HeroDetails = () => {

  const [ initialState, dispatch ] = useStateValue();
  const { arrTableHeroes } = initialState;

    const addedCartHero = () => {
      return arrTableHeroes.map((hero) => {
        return (
          <tr key={Math.floor(Math.random()*100000)}>
            <td><img
              className="img-table"
              src={hero.avatar}
              alt="avatar" /></td>
            <td>{hero.id}</td>
            <td>{hero.name}</td>
            <td>{hero.publisher}</td>
            <td><button
              onClick={() => dispatch(onHeroCartRemoved(hero))}
              type="button"
              className="btn btn-danger btn-table-deleted">delete</button></td>
          </tr>
        );
      });
    };

    const cartHero = addedCartHero();

  return (
    <div className="hero-details">
      <table className="table-details">
        <thead>
        <tr>
          <th>avatar</th>
          <th>id</th>
          <th>name</th>
          <th>publisher</th>
          <th>action</th>
        </tr>
        </thead>

        <tbody>
          {cartHero}
        </tbody>
      </table>
    </div>
  )
};

export default HeroDetails;