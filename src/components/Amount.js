import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {setAmountValue} from '../store/rates/actions';
const Amount = ()=>{
  const dispatch = useDispatch()
	const [amount, setAmount] = useState(0);
	
	const handlerClick = (e) =>{
		e.preventDefault();
		dispatch(setAmountValue(amount));
	};	
	
	return(
			<div className="max-w rounded overflow-hidden shadow-lg mb-6">
				<div className="px-6 py-4">
					<div className="md:flex md:items-center mb-6">
						<div className="inline-block">
							<form
								onSubmit={(e)=>handlerClick(e)}
							>
								<input
									name="amount"
									type="number"
									className="form-input text-right leading-tight focus:outline-none focus:bg-white focus:border-deep-orange-500 font-semibold hover:deep-orange-500"								
									placeholder="0"
									value={amount}
									onChange={(e)=>setAmount(e.target.value)}
									onFocus={()=>setAmount('')}
								/>
								<select 
									name="coins" 
									defaultValue={'EUR'}
									className="form-input leading-tight focus:outline-none font-semibold hover:deep-orange-500"
								>
									<option 
												key='EURCOIN' 
												value={'EUR'}
												disabled
											>EUR</option>
								</select>
							</form>

						</div>
					</div>
				</div>
			</div>
	)
}

export default Amount;