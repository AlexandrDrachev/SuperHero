import React from 'react';

import './get-autorisation.css';
import { onGetUserAutorisation, getWindowModal, getAdminPage, onToggleUserLogin, getWindowModalRegistration } from "../../actions";
import {useStateValue} from "../../state";
import {notAutorisation, isRegistration} from "../app/app";

const GetAutorisation = () => {

  const [ initialState, dispatch ] = useStateValue();
  const { users, userAutorisation } = initialState;

  let checkUserAutorisation = {
    name: '',
    password: ''
  };

  const onCheckAutorisation = (arrData, checkObj, returnElement) => {
    const check = arrData.some((user) => {
      return user.name.toString() === checkObj.name.toString() &&
        checkObj.name.toString() !== '' &&
        user.password.toString() === checkObj.password.toString() &&
        checkObj.password.toString() !== '' &&
        checkObj.name.toString() !== 'Admin';
    });

    if (check) {
      return dispatch(onGetUserAutorisation(checkObj));
    }
    if (!check && checkObj.name.toString() !== 'Admin') {
      return dispatch(onToggleUserLogin());
    }
    if (checkObj.name.toString() === 'Admin' && checkObj.password.toString() === '123456') {
      return dispatch(getAdminPage(checkObj));
    }
    return dispatch(getWindowModal(returnElement));

  };

  return (
    <div className="get-autorisation">
      <form>
        <input
          onChange={(e) => checkUserAutorisation.name = e.target.value}
          className="form-control"
          placeholder="nickname"/>
        <input
          onChange={(e) => checkUserAutorisation.password = e.target.value}
          className="form-control"
          placeholder="password"/>
      </form>
      <div className="btn-autorisation-group">
        <button
          onClick={() => onCheckAutorisation(users, checkUserAutorisation, notAutorisation(userAutorisation))}
          className="btn btn-info btn-autorisation">Let's go!</button>
        <button
          onClick={() => dispatch(getWindowModalRegistration(isRegistration(userAutorisation)))}
          className="btn btn-info btn-autorisation">registration</button>
      </div>
    </div>
  );
};

export default GetAutorisation;