import React from 'react';
import PropTypes from 'prop-types';
import Navbar from './Navbar';
import Containner from './Containner';

const Layout = ({children}) => {

	return(
		<Containner>

			<Navbar/>
			{children}
		</Containner>  
	)

}

Layout.propTypes = {
	children : PropTypes.node.isRequired,
}
export default Layout;