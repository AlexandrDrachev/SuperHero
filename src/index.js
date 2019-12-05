import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/app';
import './style.css';
import reducer from "./reducer";
import { initialState } from "./reducer/reduser";
import { StateProvider } from "./state";

ReactDOM.render(
  <StateProvider reducer={reducer} initialState={initialState}>
    <Router>
      <App />
    </Router>
  </StateProvider>,
  document.getElementById('root'));

