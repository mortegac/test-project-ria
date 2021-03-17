import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const NavLinkUrl = ({children, uri, title})=>(
		<NavLink 
			activeClassName="bg-deep-orange-500 text-white border-transparent" 
			className="flex w-1/2 inline-flex justify-center items-center bg-transparent text-deep-orange-500 font-semibold hover:text-deep-orange-200 py-2 px-4 mr-2 border border-deep-orange-200 hover:deep-orange-200 rounded" 
			to={uri}
			exact
		>
			{children}
			<span className="text-xl" >{title}</span>							
		</NavLink>
	);

	NavLinkUrl.propTypes = {
		children : PropTypes.node.isRequired,
		uri : PropTypes.string.isRequired,
		title : PropTypes.string,
	}
export default NavLinkUrl;