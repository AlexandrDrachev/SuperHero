import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './app.css';
import Header from "../header";
import HeroDetails from "../hero-details";
import HomePage from "../home-page/home-page";
import reducer from "../../reducer";
import { initialState } from '../../reducer/reduser';
import { StateProvider } from "../../state";

const App = () => {

  return (
    <StateProvider reducer={reducer} initialState={initialState}>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/details" component={HeroDetails} />
        </Switch>
      </div>
    </StateProvider>
  );
};

export default App;