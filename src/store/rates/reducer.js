import {
  RATES_LOGS_GET,
  RATES_SET_AMOUNT,
  RATES_SET_HISTORIC,
} from './constants'

import initialState from './initialState'

export const ratesReducers = (state = initialState, action) => {
  switch (action.type) {
  
    case RATES_LOGS_GET:
      return { ...state, list: [ ...action.payload ] };
  
    case RATES_SET_AMOUNT:
      return { ...state, amount: action.payload };  
        
    case RATES_SET_HISTORIC:
      return { ...state, historic: [ ...action.payload ] };  
        
      
    default:
      return state;
  }
};

export default{
  rates: ratesReducers,
};
