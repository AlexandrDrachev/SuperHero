import React, {Fragment, useEffect} from 'react';

import './get-administration.css';
import {useStateValue} from "../../state";
import {addedUsersInState, getUserInAdminSelect} from '../../actions';

const GetAdministration = () => {

  const [ initialState, dispatch ] = useStateValue();
  const { users, userInAdminSelect } = initialState;

  let userKey = '';
  let newUsers = users;

  useEffect(() => {

    dispatch(addedUsersInState(newUsers));
    console.log('dispatch isAdmin:', users);
    console.log('userInAdminSelect:', userInAdminSelect.name);

  }, [users, dispatch, userInAdminSelect.name]);

  const usersList = users.map((user) => {
    return (
      <option
        value={user.name}
        key={user.name}
      >{user.name}</option>
    );
  });

  const onUserRemoved = (arrUsers, userName) => {
    let arrData = arrUsers.filter((user) => {
      if (!user.statusAdmin) {
        return user.name.toString() !== userName.toString();
      } else {
        return arrUsers;
      }
    });
    const dataStorage = JSON.stringify(arrData);
    localStorage.setItem("dataStorage", dataStorage);
    const parseRes = JSON.parse(localStorage.getItem("dataStorage"));
    return dispatch(addedUsersInState(parseRes));
  };

  const onUserDisabled = (arrUsers, userName) => {
    arrUsers.find((user) => {
      if (user.name.toString() === userName.toString()) {
        user.userDisable = true;
        const dataStorage = JSON.stringify(arrUsers);
        localStorage.setItem("dataStorage", dataStorage);
        const parseRes = JSON.parse(localStorage.getItem("dataStorage"));
        return dispatch(addedUsersInState(parseRes));
      }
    })
  };

  const onUserUnabled = (arrUsers, userName) => {
    arrUsers.find((user) => {
      if (user.name.toString() === userName.toString()) {
        user.userDisable = false;
        const dataStorage = JSON.stringify(arrUsers);
        localStorage.setItem("dataStorage", dataStorage);
        const parseRes = JSON.parse(localStorage.getItem("dataStorage"));
        return dispatch(addedUsersInState(parseRes));
      }
    })
  };

  const getEventValue = (event, userKey, arrUsers) => {
    userKey = event.target.value;
    arrUsers.find((user) => {
      if (user.name.toString() === userKey.toString()) {
        return dispatch(getUserInAdminSelect(user));
      }
    })
  };

  return (
    <Fragment>
      <div className="get-autorisation">
        <div className="form-group">
          <form>
            <select
              onChange={(event) => getEventValue(event, userKey, newUsers)}
              className="form-control"
              id="exampleFormControlSelect1">
              <option>Select User</option>
              {usersList}
            </select>
          </form>
          <div className="btn-autorisation-group">
            <button
              onClick={() => onUserRemoved(newUsers, userKey)}
              type="button" className="btn btn-danger btn-admin">delete</button>
            <button
              onClick={() => onUserDisabled(newUsers, userKey)}
              type="button"
              className="btn btn-warning btn-admin">user disable</button>
            <button
              onClick={() => onUserUnabled(newUsers, userKey)}
              type="button"
              className="btn btn-success btn-admin">user unable</button>
          </div>
        </div>
      </div>
      <div className="user-details">
        <span>name: {userInAdminSelect.name}</span>
        <span>password: {userInAdminSelect.password}</span>
        <span>email: {userInAdminSelect.email}</span>
        <span>statusAdmin: {userInAdminSelect.statusAdmin}</span>
        <span>userDisable: {userInAdminSelect.userDisable}</span>
      </div>
    </Fragment>
  );
};

export default GetAdministration;