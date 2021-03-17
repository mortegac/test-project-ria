import React, {useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux'

import { getRatesList } from '../store/rates/actions';
import ListCard from '../components/ListCard';

const RatesPage = ()=>{
	const dispatch = useDispatch()
  const {module, fetching} = useSelector(store => store.loading);
  const {list, amount} = useSelector(store => store.rates)
  

	useEffect(  () => {
   
    (async () => {  
      
      try {
       
        dispatch(getRatesList());
       
  
      } catch (error) {
        console.log('ERROR: ', error);
      }

    })();
    
  }, []);

	return( 
			<div className="max-w rounded overflow-hidden bg-grey-100">
				<div className="px-6 py-4">
					
					<ListCard list={list} amount={amount}/>
					
				</div>
			</div>
	)
}

export default RatesPage;