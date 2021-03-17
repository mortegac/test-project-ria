import React from 'react';
import PropTypes from 'prop-types';
const sectionCard = ({children})=>{
  
	return(
			<div className="max-w rounded overflow-hidden shadow-lg mb-6">
				<div className="px-6 py-4">
					<div className="">
					{/* <div className="flex items-center bg-blue-300"> */}
						{children}
					</div>
				</div>
			</div>
	)
}
sectionCard.propTypes = {
	children : PropTypes.node.isRequired,
}
export default sectionCard;