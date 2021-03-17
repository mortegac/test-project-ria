import React from 'react';

const sectionCard = ({children})=>{
  
	return(
			<div className="max-w rounded overflow-hidden shadow-lg mb-6">
				<div className="px-6 py-4">
					<div className="flex items-center">
						{children}
					</div>
				</div>
			</div>
	)
}

export default sectionCard;