import React from 'react';
import {FiDollarSign, FiActivity} from 'react-icons/fi';
import NavLinkUrl from './NavLinkUrl';
const Navbar = () =>{

	return(
		<nav className="flex justify-between mb-2">
			<NavLinkUrl uri="/" title="Rates">
				<FiDollarSign className="mr-3" size={20} />
			</NavLinkUrl>

			<NavLinkUrl uri="/charts" title="charts">
				<FiActivity className="mr-3" size={20} />	
			</NavLinkUrl>
		</nav>
	)
}

export default Navbar;