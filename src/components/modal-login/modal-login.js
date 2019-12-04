import React from 'react';

import './modal-login.css';
import GetAutorisation from "../get-autorisation";

const ModalLogin = () => {

  return (
    <div className="modal-backdrop">
      <GetAutorisation />
    </div>
  );
};

export default ModalLogin;