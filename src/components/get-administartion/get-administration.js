import React from 'react';

import './get-administration.css';
import {useStateValue} from "../../state";

const GetAdministration = () => {

  const [ initialState ] = useStateValue();
  const { users } = initialState;

  // let userKey;

  const usersList = users.map((user) => {
    return (
      <option
        value={user.name}
        key={user.name}
      >{user.name}</option>
    );
  });

  return (
    <div className="get-autorisation">
      <div className="form-group">
        <div>
          <select
            onChange={(event) => event.target.value}
            className="form-control"
            id="exampleFormControlSelect1">
            <option>Select User</option>
            {usersList}
          </select>
        </div>
        <div className="btn-autorisation-group">
          <button
            onClick={() => {}}
            type="button" className="btn btn-danger btn-admin">delete</button>
          <button type="button" className="btn btn-warning btn-admin">user disable</button>
          <button type="button" className="btn btn-success btn-admin">user unable</button>
        </div>
      </div>
    </div>
  );
};

export default GetAdministration;