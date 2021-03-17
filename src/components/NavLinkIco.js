import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const NavLinkIco = ({children, uri, title, item})=>(
		<NavLink 
			className="flex justify-start mb-2" 
			to={{
        pathname: uri,
        item:{ ...item }
        }}
			exact
		>
			{children}
			<span className="text-sm" >{title}</span>							
		</NavLink>
	);

	NavLinkIco.propTypes = {
		children : PropTypes.node.isRequired,
		uri : PropTypes.string.isRequired,
		title : PropTypes.string.isRequired,
		item : PropTypes.shape({}),
	}
export default NavLinkIco;