import React, {useState, useEffect} from 'react';

import './get-administration.css';
import {useStateValue} from "../../state";
import { addedUsersInState } from '../../actions';

const returnUsersData = JSON.parse(localStorage.getItem("dataStorage"));

const GetAdministration = () => {

  const [ newState, setNewState ] = useState([]);

  const [ initialState, dispatch ] = useStateValue();
  const { users } = initialState;

  useEffect(() => {
    // setNewState(users);
    // dispatch(addedUsersInState(newState));
    console.log('state admin:', users);
  }, [users, dispatch, newState, setNewState]);

  const usersList = users.map((user) => {
    return (
      <option
        value={user.name}
        key={user.name}
      >{user.name}</option>
    );
  });

  let check;

  const onUserDeleted = (arrData, item) => {
    arrData = arrData.filter((user) => user.name !== item);
      const dataStorage = JSON.stringify(arrData);
      localStorage.setItem("dataStorage", dataStorage);
      const parseRes = JSON.parse(localStorage.getItem("dataStorage"));
      setNewState(parseRes);
  };

  return (
    <div className="get-autorisation">
      <div className="form-group">
        <div>
          <select
            onChange={(event) => check = event.target.value}
            className="form-control"
            id="exampleFormControlSelect1">
            <option>Select User</option>
            {usersList}
          </select>
        </div>
        <button
          onClick={() => onUserDeleted(newState, check)}
          type="button"
          className="btn btn-danger btn-table-deleted">delete</button>
      </div>
    </div>
  );
};

export default GetAdministration;