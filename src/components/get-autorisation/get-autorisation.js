import React from 'react';

import './get-autorisation.css';
import { onGetUserAutorisation, getWindowModal,
         getAdminPage, onToggleUserLogin, getWindowModalRegistration,
         getUserBlockPage, changeUserAutorisationSave, onGetGamePage } from "../../actions";
import { useStateValue } from "../../state";
import { modalComponent} from "../app/app";
import ModalLogin from "../modal-login";
import ModalRegistration from "../modal-registration";
import {Link} from "react-router-dom";

const GetAutorisation = () => {

  const [ initialState, dispatch ] = useStateValue();
  const { users } = initialState;

  let checkUserAutorisation = {
    name: '',
    password: ''
  };

  let checkbox = false;

  const onCheckAutorisation = (arrData, checkObj, returnElement, checkboxBool) => {
    const check = arrData.some((user) => {
      return user.name.toString() === checkObj.name.toString() &&
        checkObj.name.toString() !== '' &&
        user.password.toString() === checkObj.password.toString() &&
        checkObj.password.toString() !== '' &&
        checkObj.name.toString() !== 'Admin' &&
        !user.userDisable
    });

    // const checkDisable = arrData.some((user) => {
    //   return user.name.toString() === checkObj.name.toString() &&
    //     checkObj.name.toString() !== '' &&
    //     user.password.toString() === checkObj.password.toString() &&
    //     checkObj.password.toString() !== '' &&
    //     checkObj.name.toString() !== 'Admin' &&
    //     user.userDisable
    // });

    if (check && !checkboxBool) {
      return dispatch(onGetUserAutorisation(checkObj));
    }
    if (check && checkboxBool) {
      dispatch(changeUserAutorisationSave(checkboxBool));
      dispatch(onGetUserAutorisation(checkObj));
      let userSave = {
        name: checkObj.name,
        password: checkObj.password,
        save: true
      };
      const dataStorage = JSON.stringify(userSave);
      localStorage.setItem("userSave", dataStorage);
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
          type="password"
          onChange={(e) => checkUserAutorisation.password = e.target.value}
          className="form-control"
          placeholder="password"/>
        <label className="checkbox-label-autorisation">
          <input
            className="form-check-input"
            onChange={(e) => checkbox = e.target.checked}
            type="checkbox"/> remember me?</label>
      </form>
      <div className="btn-autorisation-group">
        <button
          onClick={() => onCheckAutorisation(users, checkUserAutorisation, modalComponent(ModalLogin), checkbox)}
          className="btn btn-info btn-autorisation">Let's go!</button>
        <button
          onClick={() => dispatch(getWindowModalRegistration(modalComponent(ModalRegistration)))}
          className="btn btn-info btn-autorisation">registration</button>
        <button
          onClick={() => dispatch(onGetGamePage())}
          className="btn btn-info btn-autorisation">
          Game
        </button>
      </div>
    </div>
  );
};

export default GetAutorisation;