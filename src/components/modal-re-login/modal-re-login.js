import React from 'react';

import './modal-re-login.css';
import {getNewWindowModal, getWindowModalRegistration} from '../../actions';
import {useStateValue} from "../../state";
import {modalComponent} from "../app/app";
import ModalLogin from "../modal-login";
import ModalRegistration from "../modal-registration";

const ModalReLogin = () => {

  const [ , dispatch ] = useStateValue();

  return (
    <div className="modal-backdrop">
      <div className="modal-re-login">
        <h3>Error!</h3>
        <div className="btn-autorisation-group">
          <button
            onClick={() => dispatch(getNewWindowModal(modalComponent(ModalLogin)))}
            className="btn btn-info btn-autorisation">autorisation</button>
          <button
            onClick={() => dispatch(getWindowModalRegistration(modalComponent(ModalRegistration)))}
            className="btn btn-info btn-autorisation">registration</button>
        </div>
      </div>
    </div>
  );
};

export default ModalReLogin;