import React from 'react';
import {useLocation} from 'react-router-dom';
import {FiDollarSign, FiActivity} from 'react-icons/fi';
import NavLinkUrl from './NavLinkUrl';
const Navbar = () =>{
	let location = useLocation()
  let {pathname} = { ...location }

	return(
		<nav className="flex justify-between mb-2">
			<NavLinkUrl uri="/" title="Rates">
				<FiDollarSign className="mr-3" size={20} />
			</NavLinkUrl>
			
			<div
				className={ ['/charts'].includes(pathname) ?
					"flex w-1/2 inline-flex justify-center items-center bg-deep-orange-500 text-white border-transparent"
					:"flex w-1/2 inline-flex justify-center items-center bg-transparent text-deep-orange-500 font-semibold  py-2 px-4 mr-2 border border-deep-orange-200 rounded" 
				}
			>
				<FiActivity className="mr-3" size={20} />
				<span className="text-xl" >{'Charts'}</span>							
			</div>
		</nav>
	)
}

export default Navbar;