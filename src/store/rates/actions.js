import * as types from './constants';
import { LOADING_START, LOADING_FINISHED } from '../loading/constants.js'
import services from '../../services/rates.services';

const MODULE = { module: 'RATES' }




const getRatesList = () => async (dispatch, getState) => {
        // const {user: { userId }} = getState();
    try {

        dispatch({ type: LOADING_START, payload: MODULE })
        const response = await services.getRatesList();
			
        // console.log(' -+ response -+', await response);
      
        if( typeof(response) !== 'undefined' ){
        
          dispatch({ type: types.RATES_LOGS_GET, payload: [...response]})
          
        }        

        dispatch({ type: LOADING_FINISHED, payload: MODULE })
    
    } catch (error) {
        dispatch({ type: LOADING_FINISHED, payload: MODULE })
        console.log(error)
    }
}

const getRatesHistoric = (query) => async (dispatch, getState) => {
  try {

    dispatch({ type: LOADING_START, payload: MODULE })
    const response = await services.getRatesHistoric({...query});

    console.log(' -+ response -+', await response);

    if( typeof(response) !== 'undefined' ){
    
      dispatch({ type: types.RATES_SET_HISTORIC, payload: [...response]})
      
    }        

    dispatch({ type: LOADING_FINISHED, payload: MODULE })

  } catch (error) {
    dispatch({ type: LOADING_FINISHED, payload: MODULE })
    console.log(error)
  }
}




const setAmountValue = payload => ({
  type: types.RATES_SET_AMOUNT,
  payload
});


export {
  getRatesList,
  setAmountValue,
  getRatesHistoric,
};

