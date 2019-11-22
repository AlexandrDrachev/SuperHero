import React, { useEffect } from 'react';

import './hero-details.css';
import {useStateValue} from "../../state";

const HeroDetails = () => {

  const [ initialState ] = useStateValue();
  const { arrTableHeroes } = initialState;

    let cartHero = arrTableHeroes.map((hero) => {
      let key = Math.floor(Math.random()*10000000);
      return (
        <tr key={key}>
          <td><img
            className="img-table"
            src={hero.avatar}
            alt="avatar" /></td>
          <td>{hero.id}</td>
          <td>{hero.name}</td>
          <td>{hero.publisher}</td>
          <td><button type="button" className="btn btn-danger btn-table-deleted">delete</button></td>
        </tr>
      );
    });

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
          { cartHero }
        </tbody>
      </table>
    </div>
  )
};

export default HeroDetails;