import React, { Fragment, useEffect } from 'react';

import './get-autorisation.css';
import { onGetUserAutorisation, getWindowModal, getAdminPage } from "../../actions";
import {useStateValue} from "../../state";
import Autorisation from "../autorisation";
import Header from "../header";
import {Route, Switch} from "react-router";
import HomePage from "../home-page";
import HeroDetails from "../hero-details";
import GetRegistration from "../get-registration";
import GetAdministration from "../get-administartion";
import ModalReLogin from "../modal-re-login";
import {Link} from "react-router-dom";

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
        <Route path="/registration" component={GetRegistration} />
        <Route path="/administration" component={GetAdministration} />
      </Switch>
    </div>
    <ModalReLogin/>
  </Fragment>
);

const GetAutorisation = () => {

  const [ initialState, dispatch ] = useStateValue();
  const { autorisation, userAutorisation, users, isAdministrator } = initialState;
  // console.log(users, autorisation);

  let checkUserAutorisation = {
    name: '',
    password: ''
  };

  const isAdmin = (
    <Fragment>
      <div className="app">
        <div className="login">
          <Autorisation/>
          <h3 className="span-login">{userAutorisation.name}</h3>
          <span className="span-exit">Exit</span>
        </div>
        <Header/>
        <Switch>
          <Route path="/" exact component={HomePage}/>
          <Route path="/details" component={HeroDetails}/>
          <Route path="/autorisation" component={GetAutorisation}/>
          <Route path="/registration" component={GetRegistration}/>
          <Route path="/administration" component={GetAdministration}/>
        </Switch>
      </div>
    </Fragment>
  );

  const onCheckAutorisation = (arrData, checkObj, returnElement, returnAdminElement) => {
    const check = arrData.some((user) => {
      console.log('state:', user.name);
      return user.name.toString() === checkObj.name.toString() &&
        user.password.toString() === checkObj.password.toString() &&
        checkObj.name.toString() !== 'Admin';
    });

    if (check) {
      return dispatch(onGetUserAutorisation(checkObj));
    }
    if (checkObj.name.toString() === 'Admin' && checkObj.password === 123456) {
      return dispatch(getAdminPage(returnAdminElement, checkObj));
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
          onClick={() => onCheckAutorisation(users, checkUserAutorisation, notAutorisation, isAdmin)}
          className="btn btn-info btn-autorisation">Let's go!</button>
        <Link to="/registration"><button
          onClick={() => {}}
          className="btn btn-info btn-autorisation">registration</button></Link>
      </div>
    </div>
  );
};

export default GetAutorisation;