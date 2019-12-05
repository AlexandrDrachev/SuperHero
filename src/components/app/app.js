import React, { Fragment, useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import './app.css';

import Header from "../header";
import HeroDetails from "../hero-details";
import HomePage from "../home-page/home-page";
import { useStateValue } from "../../state";
import Autorisation from "../administration";
import ModalLogin from "../modal-login";
import {
  addedUsersInState, changeUserAutorisationSave, getWindowApp, getWindowModal,
  getWindowModalRegistration, getWindowReModal, onUserExit
} from '../../actions';
import ModalRegistration from "../modal-registration";
import GetAdministration from "../get-administartion";
import ModalReLogin from "../modal-re-login";

export const isAutorisation = (userObject, dispatch, action, adminPage) => {

  const userExit = () => {
    dispatch(action());
    let userSave = {};
    const dataStorage = JSON.stringify(userSave);
    localStorage.setItem("userSave", dataStorage);
  };

  return (
    <Fragment>
      <div className="app">
        <div className="login">
          {adminPage}
          <h3 className="span-login">{userObject.name}</h3>
          <span
            onClick={() => userExit()}
            className="span-exit">Exit</span>
        </div>
        <Header/>
        <Switch>
          <Route path="/home" exact component={HomePage}/>
          <Route path="/details" component={HeroDetails}/>
          <Route path="/administration" component={GetAdministration}/>
          <Redirect to="/" from="/home"/>
        </Switch>
      </div>
    </Fragment>
  );
};
export const modalComponent = (Name) => {
  return (
    <Fragment>
      <div className="app">
        <div className="login">
          <span
            className="span-exit">Exit</span>
        </div>
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/details" component={HeroDetails} />
        </Switch>
      </div>
      <Name/>
    </Fragment>
  );
};

let getLocalStorage = JSON.parse(localStorage.getItem("dataStorage"));
let userSave = JSON.parse(localStorage.getItem("userSave"));
console.log(userSave);

const App = () => {

  const [ initialState, dispatch ] = useStateValue();
  const { autorisation, window, users, userAutorisation, isAdministrator,
          registration, userLogin, userRegistration, userIsBlock, userAutorisationSave } = initialState;

  useEffect(() => {
    console.log('userAutorisationSave: ', userAutorisationSave, users);
    dispatch(addedUsersInState(getLocalStorage));
    dispatch(changeUserAutorisationSave(userSave.save));

    if (autorisation && !userRegistration && !userIsBlock) {
      dispatch(getWindowApp(isAutorisation(userAutorisation, dispatch, onUserExit), users));
    }
    if (!autorisation && !isAdministrator && !registration) {
      dispatch(getWindowModal(modalComponent(ModalLogin)));
    }
    if (!autorisation && !registration && isAdministrator) {
      dispatch(getWindowApp(isAutorisation(userAutorisation, dispatch, onUserExit, <Autorisation/>), users));
    }
    if (registration && !autorisation && !isAdministrator) {
      dispatch(getWindowModalRegistration(modalComponent(ModalRegistration)))
    }
    if (userLogin) {
      dispatch(getWindowReModal(modalComponent(ModalReLogin)));
    }
    if (userRegistration && autorisation) {
      dispatch(getWindowApp(isAutorisation(userAutorisation, dispatch, onUserExit, null), users))
    }
  }, [autorisation, users, isAdministrator, userAutorisation,
    registration, userLogin, dispatch, userRegistration, userAutorisationSave, userIsBlock]);

  return (
    <Fragment>
      {window}
    </Fragment>
  );
};

export default App;