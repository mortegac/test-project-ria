import React, {useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux'
import {FiChevronsLeft} from 'react-icons/fi';


import { getRatesHistoric } from '../store/rates/actions';
import Graph from '../components/Graph';
import SectionCard from'../components/SectionCard';
import NavLinkIco from '../components/NavLinkIco';

const ChartsPage = ()=>{
	const dispatch = useDispatch()
  const {historic} = useSelector(store => store.rates)
  

	useEffect(  () => {
   
    (async () => {  
      
      try {
       const query = {
				start_at: '2021-03-01',
				end_at: '2021-03-10',
				symbols: 'AUD',
			 }
        dispatch(getRatesHistoric(query));
       
  
      } catch (error) {
        console.log('ERROR: ', error);
      }

    })();
    
  }, []);
	return(
		<>
			<SectionCard>
			<NavLinkIco uri='/' title='Volver'>
					<FiChevronsLeft className="mr-3" size={20} />
			</NavLinkIco>
				<a className="flex justify-start mb-2">
				</a>
			</SectionCard>
			<div className="max-w rounded overflow-hidden shadow-lg">
				<div className="px-6 py-4">
					<div className="font-bold text-xl mb-2">Charts</div>
					<Graph/>
				</div>
			
			</div>
		</>
	)
}

export default ChartsPage;