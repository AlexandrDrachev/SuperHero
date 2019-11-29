import React, {Fragment, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import './app.css';
import Header from "../header";
import HeroDetails from "../hero-details";
import HomePage from "../home-page/home-page";
import { useStateValue } from "../../state";
import Autorisation from "../autorisation";
import GetAutorisation from "../get-autorisation";
import GetRegistration from "../get-registration";
import GetAdministration from "../get-administartion";
import ModalLogin from "../modal-login";
import { getWindowApp, getWindowModal } from '../../actions';

const getLocalStorage = JSON.parse(localStorage.getItem("dataStorage"));

const App = () => {

  const [ initialState, dispatch ] = useStateValue();
  const { autorisation, window, users, userAutorisation, isAdministrator } = initialState;

  const notAutorisation = (
    <Fragment>
      <div className="app">
        <div className="login">
          <h3 className="span-login">{userAutorisation.name}</h3>
          <span className="span-exit">Exit</span>
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

  const isAutorisation = (
    <Fragment>
      <div className="app">
        <div className="login">
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


  useEffect(() => {
    dispatch(getWindowApp(isAutorisation, getLocalStorage));
    console.log(users);
    if (!autorisation) {
      console.log(1);
      dispatch(getWindowModal(notAutorisation));
    }
  }, [autorisation]);

  return (
    <Fragment>
      {window}
    </Fragment>
  );
};

export default App;