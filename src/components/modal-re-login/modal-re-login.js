import React from 'react';

import './modal-re-login.css';
import {getNewWindowModal, getWindowModalRegistration} from '../../actions';
import {useStateValue} from "../../state";
import {isRegistration, notAutorisation} from "../app/app";

const ModalReLogin = () => {

  const [ initialState, dispatch ] = useStateValue();
  const { userAutorisation } = initialState;

  return (
    <div className="modal-backdrop">
      <div className="modal-re-login">
        <h3>Error!</h3>
        <div className="btn-autorisation-group">
          <button
            onClick={() => dispatch(getNewWindowModal(notAutorisation(userAutorisation)))}
            className="btn btn-info btn-autorisation">autorisation</button>
          <button
            onClick={() => dispatch(getWindowModalRegistration(isRegistration(userAutorisation)))}
            className="btn btn-info btn-autorisation">registration</button>
        </div>
      </div>
    </div>
  );
};

export default ModalReLogin;