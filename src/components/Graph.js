import React from 'react';
import PropTypes from 'prop-types';
import { Chart, LineAdvance } from 'bizcharts';

const Graph = ({data}) => {

	return (
		<Chart 
			padding={[10, 20, 50, 40]} 
			autoFit 
			height={300} 
			data={data} 
		>
			<LineAdvance
				shape="smooth"
				point
				area
				position="date*price"
				color="value"
			/>
		</Chart>
	)
}
Graph.propTypes = {
	data : PropTypes.array.isRequired
}
export default Graph;