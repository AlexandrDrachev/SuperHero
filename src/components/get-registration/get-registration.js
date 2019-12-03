import React from 'react';

import './get-registration.css';
import {useStateValue} from "../../state";
import {addedUsersInState, getWindowModal, onGetUserAutorisation, onRegistrationNewUser} from '../../actions';
import {modalComponent} from "../app/app";
import ModalLogin from "../modal-login";

const GetRegistration = () => {

  const [ initialState, dispatch ] = useStateValue();
  const { users } = initialState;

  let newUsers = users;
  let newUser = { statusAdmin: false, userDisable: false };
  let inputDubblePass = '';

  const onCreateNewUser = (arrData, obj, inpDubblePass) => {

    let checkName = arrData.every((user) => {
      return user.name !== obj.name;
    });
    if (
      checkName &&
      obj.name !== '' &&
      obj.password !== '' &&
      obj.password === inpDubblePass &&
      obj.email !== ''
    ) {
      arrData.push(obj);
      const dataStorage = JSON.stringify(arrData);
      localStorage.setItem("dataStorage", dataStorage);
      const parseRes = JSON.parse(localStorage.getItem("dataStorage"));
      dispatch(onRegistrationNewUser());
      dispatch(onGetUserAutorisation(obj));
      dispatch(addedUsersInState(parseRes));
    }
    if (!checkName) {
      alert('a user with the same name already exists, select a different name');
    }
  };

  return (
    <div className="get-registration">
      <div>
        <input
          onChange={(e) => newUser.name = e.target.value}
          className="form-control"
          placeholder="nickname"/>
        <input
          onChange={(e) => newUser.password = e.target.value}
          className="form-control"
          placeholder="password"/>
        <input
          onChange={(e) => inputDubblePass = e.target.value}
          className="form-control"
          placeholder="password again"/>
        <input
          onChange={(e) => newUser.email = e.target.value}
          className="form-control"
          placeholder="email"/>
      </div>
      <div className="btn-autorisation-group">
        <button
          onClick={() => dispatch(getWindowModal(modalComponent(ModalLogin)))}
          className="btn btn-info btn-registration"
        >autorisation</button>
        <button
          onClick={() => onCreateNewUser(newUsers, newUser, inputDubblePass)}
          className="btn btn-info btn-registration"
        >registration</button>
      </div>
    </div>
  );
};

export default GetRegistration;