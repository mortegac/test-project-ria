import React from 'react';
import {FiChevronsLeft} from 'react-icons/fi';

import {Error403} from '../components/httpError';
import NavLinkIco from '../components/NavLinkIco';

const EmptyPage = ()=>{

	return(
		<>
			<section className="mt-8 flex justify-center">
				<Error403
						title="Uri not found"
						subTitle=""
				/>
			</section>
			<section className="mt-8 flex justify-center">
				<NavLinkIco uri='/' title='Return to Home ' className>
					<FiChevronsLeft className="mr-3" size={20} />
				</NavLinkIco>
			</section>

		</>
	)
}

export default EmptyPage;