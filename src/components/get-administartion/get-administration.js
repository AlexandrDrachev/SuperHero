import React, {Fragment, useEffect} from 'react';

import './get-administration.css';
import {useStateValue} from "../../state";
import {addedUsersInState, getUserInAdminSelect, onChangeUserDisable, onChangeUserStatusAdmin} from '../../actions';

const GetAdministration = () => {

  const [ initialState, dispatch ] = useStateValue();
  const { users, userInAdminSelect } = initialState;

  useEffect(() => {
    dispatch(addedUsersInState(users));
  }, [users, dispatch, userInAdminSelect]);

  const usersList = users.map((user) => {
    return (
      <option
        value={user.name}
        key={user.name}
      >{user.name}</option>
    );
  });

  const onUserRemoved = (arrUsers) => {
    arrUsers.forEach((user) => {
      if (!user.statusAdmin && user.name !== 'Admin') {
        let arrData = arrUsers.filter((user) => user.name.toString() !== userInAdminSelect.name.toString());
        const dataStorage = JSON.stringify(arrData);
        localStorage.setItem("dataStorage", dataStorage);
        const parseRes = JSON.parse(localStorage.getItem("dataStorage"));
        return dispatch(addedUsersInState(parseRes));
      }
    });
  };

  const onChangeUserBlockOrStatus = (arrUsers, action) => {
    let userObj = arrUsers.find((user) => user.name.toString() === userInAdminSelect.name.toString());
    if (userObj.name) {
      dispatch(action());
      const dataStorage = JSON.stringify(arrUsers);
      localStorage.setItem("dataStorage", dataStorage);
      const parseRes = JSON.parse(localStorage.getItem("dataStorage"));
      dispatch(addedUsersInState(parseRes));
    }
  };

  const getEventValue = (event, arrUsers) => {
    let userObj = arrUsers.find((user) => user.name === event.target.value);
    dispatch(getUserInAdminSelect(userObj));
  };

  const {name, password, email, statusAdmin, userDisable} = userInAdminSelect;

  return (
    <Fragment>
      <div className="get-administration">
        <div className="form-group form-admin">
          <form>
            <h3>Select user</h3>
            <select
              onChange={(event) => getEventValue(event, users)}
              className="form-control select-admin"
              id="exampleFormControlSelect1">
              {usersList}
            </select>
          </form>
          <div className="btn-autorisation-group">
            <button
              onClick={() => onUserRemoved(users)}
              type="button" className="btn btn-danger btn-admin">delete</button>
            <button
              onClick={() => onChangeUserBlockOrStatus(users, onChangeUserDisable)}
              type="button"
              className="btn btn-warning btn-admin">change user block</button>
            <button
              onClick={() => onChangeUserBlockOrStatus(users, onChangeUserStatusAdmin)}
              type="button"
              className="btn btn-primary btn-admin">change status Admin</button>
          </div>
        </div>
      </div>
      <div className="user-details">
        <table className="table-details">
          <thead>
          <tr>
            <th>Name</th>
            <th>Password</th>
            <th>Email</th>
            <th>statusAdmin</th>
            <th>userDisable</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>{name}</td>
            <td>{password}</td>
            <td>{email}</td>
            <td>{statusAdmin ? 'true' : 'false'}</td>
            <td>{userDisable ? 'true' : 'false'}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

export default GetAdministration;