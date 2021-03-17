import React from 'react';
import PropTypes from 'prop-types';
import Navbar from './Navbar';
import Containner from './Containner';
import Amount from './Amount';

const Layout = ({children}) => {

	return(
		<Containner>

			<Navbar/>
			<Amount/>

			{children}
		</Containner>  
	)

}

Layout.propTypes = {
	children : PropTypes.node.isRequired,
}
export default Layout;