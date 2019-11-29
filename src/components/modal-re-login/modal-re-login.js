import React, { Fragment } from 'react';
import { Route, Switch } from "react-router-dom";

import './modal-re-login.css';
import { getWindowModal } from '../../actions';
import {useStateValue} from "../../state";
import Autorisation from "../autorisation";
import Header from "../header";
import HomePage from "../home-page";
import HeroDetails from "../hero-details";
import GetAutorisation from "../get-autorisation";
import GetRegistration from "../get-registration";
import GetAdministration from "../get-administartion";
import ModalLogin from "../modal-login";

const notAutorisation = (
  <Fragment>
    <div className="app">
      <div className="login">
        <span className="span-login">quest</span>
      </div>
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/details" component={HeroDetails} />
        <Route path="/autorisation" component={GetAutorisation} />
        <Route path="/registration" component={GetRegistration} />
        <Route path="/administration" component={GetAdministration} />
      </Switch>
    </div>
    <ModalLogin/>
  </Fragment>
);

const ModalReLogin = () => {

  const [ initialState, dispatch ] = useStateValue();

  return (
    <div className="modal-backdrop">
      <div className="modal-re-login">
        <h3>Error!</h3>
        <div className="btn-autorisation-group">
          <button
            onClick={() => dispatch(getWindowModal(notAutorisation))}
            className="btn btn-info btn-autorisation">autorisation</button>
          <button
            onClick={() => {}}
            className="btn btn-info btn-autorisation">registration</button>
        </div>
      </div>
    </div>
  );
};

export default ModalReLogin;