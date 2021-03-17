import React from 'react';
import Card from './Card';

const ListCard = ({list, amount})=>{

	const calculatePrice = (value)=> parseFloat(amount)*parseFloat(value)
	const calculatePriceEUR = (value)=> parseFloat(amount)/parseFloat(value)
	return(
		<>
			{
				list.map( (item, index)=>{
					return(
						<Card 
							key={index} {...item} 
							amount={calculatePrice(item.value).toFixed(2)}
							amountEUR={calculatePriceEUR(item.value).toFixed(2)}/>
					)
				})
			}
		</>

	)
} 

export default ListCard;