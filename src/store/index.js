import {
  createStore, 
  compose, 
  applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import rootReducer from './rootReducers';

const middlewares = [ thunk];

process.env.NODE_ENV === 'development' && middlewares.push(logger);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export const store =createStore( 
  rootReducer, 
  composeEnhancers( 
      applyMiddleware(...middlewares) 
  ) );