import React from 'react';
import {FiArrowRightCircle} from 'react-icons/fi';
import PropTypes from 'prop-types';
import NavLinkIco from '../components/NavLinkIco';

const Card = ({id, amount, amountEUR})=>{

	return(
		<div className="flex justify-between items-center p-6 max-w rounded overflow-hidden shadow-lg bg-white mb-4">
			<section className="flex justify-between items-center">
				<p className="font-bold text-3xl pr-5 mb-2">{id}</p>
				<NavLinkIco uri='/charts' title='' item={{name:id}}>
					<FiArrowRightCircle className="mr-3" size={30} color='bg-gray'/>
				</NavLinkIco>
			</section>
			<section>
				
			</section>
			<section>
				<p className="text-lg">{amount}</p>
				<p className="text-xs font-thin">1 EUR = {amount} {id}</p>
				<p className="text-xs">1 {id} = {amountEUR} EUR</p>
			</section>
		</div>

	)
} 
Card.propTypes = {
	id : PropTypes.string.isRequired,
	amount : PropTypes.string.isRequired, 
	amountEUR : PropTypes.string.isRequired,
}
export default Card;