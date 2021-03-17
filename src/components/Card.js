import React from 'react';
import {FiArrowRightCircle} from 'react-icons/fi';

const Card = ({id, value, amount})=>{

	return(
		// <div className="max-w rounded overflow-hidden shadow-lg bg-white">
		// <div className="grid grid-flow-col auto-cols-max md:auto-cols-min max-w rounded overflow-hidden shadow-lg bg-white">
		<div className="flex justify-between items-center p-6 max-w rounded overflow-hidden shadow-lg bg-white mb-4">
			<section>
				<p className="font-bold text-3xl mb-2">{id}</p>
			</section>
			<section>
				<FiArrowRightCircle size={30} />
				
			</section>
			<section>
				<p className="text-lg">{amount}</p>
				<p className="text-xs font-thin">1 EUR = {value} {id}</p>
				<p className="text-xs">1 {id} = 999 EUR</p>
			</section>


{/* <div className="grid grid-cols-3 max-w rounded overflow-hidden shadow-lg bg-white"> */}
  
{/* </div> */}
			{/* <div className="flex-1 pr-5">
				<label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">Street Address</label>
				
			</div>
			<div className="flex-1 pl-7">
				<label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">Building/Suite No.</label>
				
			</div> */}
      

			{/* <div className="grid-cols-4">

				<p className="font-bold text-xl mb-2">Rates</p>

			</div>
			<div className="grid-cols-8">
				<p className="font-bold text-xl mb-2">Rates</p>

			</div>
			 */}
			{/* <div className="px-6 py-4">
				<p className="text-gray-700 text-base">
					sd
				</p>
			</div> */}
		</div>

	)
} 

export default Card;