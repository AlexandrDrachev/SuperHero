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
  addedUsersInState, getUserSaveFromData, getWindowApp, getWindowModal,
  getWindowModalRegistration, getWindowReModal, onUserExit,
} from '../../actions';
import ModalRegistration from "../modal-registration";
import GetAdministration from "../get-administartion";
import ModalReLogin from "../modal-re-login";
import ServiceApi from "../../services";
import Game from "../game";
import ContentGame from "../game/content-game";

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
          <Route path="/game" component={ContentGame}/>
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
// let userSav = JSON.parse(localStorage.getItem("userSave"));

const App = () => {

  const [ initialState, dispatch ] = useStateValue();
  const { autorisation, window, users, userAutorisation, isAdministrator,
          registration, userLogin, userRegistration, userIsBlock, userAutorisationSave, objHero, game: { gamePageApp } } = initialState;

  if (!users) {
    let usersData = [{statusAdmin: true, name: 'Admin', password: 123456, email: 'alexfront.front@gmail.com'}];
    const dataStorage = JSON.stringify(usersData);
    localStorage.setItem("dataStorage", dataStorage);
    document.location.reload();
  }

  useEffect(() => {

    dispatch(addedUsersInState(getLocalStorage));
    const fetchData = async () => {
      // let service = new ServiceApi();
      // const result = await service.getUserSave()
      //   .then((res) => res);
      // if (result.save) {
      //   dispatch(getUserSaveFromData(result, result.save));
      // }
    };
    fetchData();

    if (gamePageApp && !autorisation && !isAdministrator && !registration) {
      dispatch(getWindowApp(<Game />, users));
    }
    if (autorisation && !userRegistration && !userIsBlock) {
      dispatch(getWindowApp(isAutorisation(userAutorisation, dispatch, onUserExit), users));
    }
    if (!autorisation && !isAdministrator && !registration && !gamePageApp) {
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
    registration, userLogin, dispatch, userRegistration, userAutorisationSave, userIsBlock, objHero, gamePageApp]);

  return (
    <Fragment>
      {window}
    </Fragment>
  );
};

export default App;

//app returned {window}