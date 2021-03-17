import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const NavLinkIco = ({children, uri, title})=>(
		<NavLink 
			className="flex justify-start mb-2" 
			to={uri}
			exact
		>
			{children}
			<span className="text-sm" >{title}</span>							
		</NavLink>
	);

	NavLinkIco.propTypes = {
		children : PropTypes.node.isRequired,
		uri : PropTypes.string.isRequired,
		title : PropTypes.string,
	}
export default NavLinkIco;