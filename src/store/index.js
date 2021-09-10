/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import combinedReducers from './combinedReducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : compose;


const middlewares = [thunkMiddleware]

const enhancers = composeEnhancers(applyMiddleware(...middlewares));

const initialState = {};

export default createStore(combinedReducers, initialState, enhancers);
