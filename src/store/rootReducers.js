
import { combineReducers } from 'redux';

// REDUCER
import rates from './rates/reducer';
import loading from './loading/reducer';



export const reducers = () => ({
  ...loading,
  ...rates,
});

export default combineReducers(reducers());
