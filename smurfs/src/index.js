// --------------------------- DEPENDANCIES -------------------------------------------//
import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
// --------------------------- COMPONENTS -------------------------------------------//
import App from './components/App';
// --------------------------- STYLES -------------------------------------------//
import './index.css';
// --------------------------- REDUCERS -------------------------------------------//
import smurfReducer from './reducers/index';

// --------------------------- STORE -------------------------------------------//
const store = createStore(smurfReducer, applyMiddleware(thunk, logger));

// --------------------------- APP PROVIDER -------------------------------------------//
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
