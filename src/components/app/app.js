import React, {Fragment, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import './app.css';
import Header from "../header";
import HeroDetails from "../hero-details";
import HomePage from "../home-page/home-page";
import { useStateValue } from "../../state";
import Autorisation from "../administration";
import ModalLogin from "../modal-login";
import {addedUsersInState, getWindowApp, getWindowModal,
  getWindowModalRegistration, getWindowReModal, onUserExit} from '../../actions';
import ModalRegistration from "../modal-registration";
import GetAdministration from "../get-administartion";
import ModalReLogin from "../modal-re-login";

export const notAutorisation = () => {
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
      <ModalLogin/>
    </Fragment>
  );
};
export const isAutorisation = (userObject, dispatch, action) => {
  return (
    <Fragment>
      <div className="app">
        <div className="login">
          <h3 className="span-login">{userObject.name}</h3>
          <span
            onClick={() => dispatch(action())}
            className="span-exit">Exit</span>
        </div>
        <Header/>
        <Switch>
          <Route path="/" exact component={HomePage}/>
          <Route path="/details" component={HeroDetails}/>
        </Switch>
      </div>
    </Fragment>
  );
};
export const isAdminPage = (userObject, func, action) => {
  return (
    <Fragment>
      <div className="app">
        <div className="login">
          <Autorisation />
          <h3 className="span-login">{userObject.name}</h3>
          <span
            onClick={() => func(action())}
            className="span-exit">Exit</span>
        </div>
        <Header/>
        <Switch>
          <Route path="/" exact component={HomePage}/>
          <Route path="/details" component={HeroDetails}/>
          <Route path="/administration" component={GetAdministration}/>
        </Switch>
      </div>
    </Fragment>
  );
};
export const isRegistration = () => {
  return (
    <Fragment>
      <div className="app">
        <div className="login">
          <span className="span-exit">Exit</span>
        </div>
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/details" component={HeroDetails} />
        </Switch>
      </div>
      <ModalRegistration/>
    </Fragment>
  );
};
export const isReAutorisation = () => {
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
      <ModalReLogin/>
    </Fragment>
  );
};

const getLocalStorage = JSON.parse(localStorage.getItem("dataStorage"));

const App = () => {

  const [ initialState, dispatch ] = useStateValue();
  const { autorisation, window, users, userAutorisation, isAdministrator,
    registration, userLogin, userRegistration } = initialState;


  useEffect(() => {

    dispatch(addedUsersInState(getLocalStorage));
    if (autorisation && !userRegistration) {
      dispatch(getWindowApp(isAutorisation(userAutorisation, dispatch, onUserExit), getLocalStorage));
    }
    if (!autorisation && !isAdministrator && !registration) {
      dispatch(getWindowModal(notAutorisation(userAutorisation)));
    }
    if (!autorisation && !registration && isAdministrator) {
      dispatch(getWindowApp(isAdminPage(userAutorisation, dispatch, onUserExit), getLocalStorage));
    }
    if (registration && !autorisation && !isAdministrator) {
      dispatch(getWindowModalRegistration(isRegistration(userAutorisation)))
    }
    if (userLogin) {
      dispatch(getWindowReModal(isReAutorisation(userAutorisation)));
    }
    if (userRegistration && autorisation) {
      dispatch(getWindowApp(isAutorisation(userAutorisation, dispatch, onUserExit), getLocalStorage))
    }
  }, [autorisation, users, isAdministrator, userAutorisation,
    registration, userLogin, dispatch, userRegistration]);

  return (
    <Fragment>
      {window}
    </Fragment>
  );
};

export default App;