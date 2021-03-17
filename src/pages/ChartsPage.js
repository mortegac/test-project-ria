import React, {useEffect, useState} from "react";
import { useLocation, Redirect} from "react-router-dom"
import {useDispatch, useSelector} from 'react-redux'
import {FiChevronsLeft} from 'react-icons/fi';

import moment from 'moment';
import { getRatesHistoric } from '../store/rates/actions';
import Graph from '../components/Graph';
import SectionCard from'../components/SectionCard';
import NavLinkIco from '../components/NavLinkIco';
const ChartsPage = ()=>{
	const location = useLocation();
	const item = location.hasOwnProperty('item') && false;
	const name = item && item.hasOwnProperty('name') ? item.name : '';
	const dispatch = useDispatch()
  const {historic} = useSelector(store => store.rates)
  const [periodSelected, setPeriodSelected] = useState('day'); 
  
	const calculateDay = async () =>{
		setPeriodSelected('day');
		setPeriod({
			start_at: moment().subtract(10, 'days').format("YYYY-MM-DD"),
				end_at: moment().format("YYYY-MM-DD"),
				symbols: name,
		});
};

	const calculateMonth = async () =>{
		setPeriodSelected('month') 
		setPeriod({
			start_at: moment().subtract(1, 'month').format("YYYY-MM-DD"),
			end_at: moment().format("YYYY-MM-DD"),
			symbols: name,
		});
	}
	const calculateYear = async () =>{
		
		setPeriodSelected('year'); 
		setPeriod({
			start_at: moment().subtract(1, 'years').format("YYYY-MM-DD"),
			end_at: moment().format("YYYY-MM-DD"),
			symbols: name,
		})
	}


	const setPeriod = async (query) =>{

		
		dispatch(getRatesHistoric({...query}));

	}
	useEffect(  () => {
   
    (async () => {  
      
      try {

				setPeriod({
					start_at: moment().subtract(10, 'days').format("YYYY-MM-DD"),
					end_at: moment().subtract(1, 'days').format("YYYY-MM-DD"),
					symbols: name,
				});      
  
      } catch (error) {
        console.log('ERROR: ', error);
      }

    })();
    
  }, []);
	return(
		<>
			<SectionCard>
			
			<section className='flex justify-between items-center'>
				<NavLinkIco uri='/' title='Volver'>
						<FiChevronsLeft className="mr-3" size={20} />
				</NavLinkIco>
			
				<section>
					<p>Currency:</p>
					<h4>{location.item ? location.item.name : <Redirect to="/" />}</h4>
				</section>

				
			</section>

				
				
			</SectionCard>
			<div className="max-w rounded overflow-hidden shadow-lg">
				<div className="px-6 py-4">
					<section className='flex justify-between items-center'>
						<span className="font-bold text-xl mb-2">Charts</span>
						
						<section>
							<div className="inline-flex items-center">
								<p className="mr-5">Period:</p>
								<button 
									className={periodSelected==='day'?
									"bg-deep-orange-500 text-white text-gray-800 font-bold py-2 px-4 border border-gray-400 rounded shadow rounded-l"
									:"bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 border border-gray-400 rounded shadow rounded-l"
									}
									onClick={()=>calculateDay()}
								>
									Day
								</button>
								<button 
									className={periodSelected==='month'?
									"bg-deep-orange-500 text-white text-gray-800 font-bold py-2 px-4 border border-gray-400 rounded shadow rounded-l"
									:"bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 border border-gray-400 rounded shadow rounded-l"
									}
									onClick={()=>calculateMonth()}
								>
									Week
								</button>
								<button 
									className={periodSelected==='year'?
									"bg-deep-orange-500 text-white text-gray-800 font-bold py-2 px-4 border border-gray-400 rounded shadow rounded-l"
									:"bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 border border-gray-400 rounded shadow rounded-l"
									}
									onClick={()=>calculateYear()}
								>
									Year
								</button>
							</div>

						</section>
					</section>
					
					<Graph data={historic}/>
				</div>
			
			</div>
		</>
	)
}

export default ChartsPage;