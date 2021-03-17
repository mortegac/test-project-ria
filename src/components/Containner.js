import React from 'react';
import PropTypes from 'prop-types';

const Containner = ({children}) =>{

	return(
		<div className="container mx-auto p-5">
			{children}
		</div>
	)
}

Containner.propTypes = {
	children : PropTypes.node.isRequired,
}
export default Containner;