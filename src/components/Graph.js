import React from 'react';
import { Chart, LineAdvance } from 'bizcharts';

const data = [
	{
		month: "Jan",
		city: "London",
		temperature: 3.9
	},
	{
		month: "Feb",
		city: "London",
		temperature: 4.2
	},
	{
		month: "Mar",
		city: "London",
		temperature: 5.7
	},
	{
		month: "Apr",
		city: "London",
		temperature: 8.5
	},
	{
		month: "May",
		city: "London",
		temperature: 11.9
	},
	{
		month: "Jun",
		city: "London",
		temperature: 15.2
	},
	{
		month: "Jul",
		city: "London",
		temperature: 17
	},
	{
		month: "Aug",
		city: "London",
		temperature: 16.6
	},
	{
		month: "Sep",
		city: "London",
		temperature: 14.2
	},
	{
		month: "Oct",
		city: "London",
		temperature: 10.3
	},
	{
		month: "Nov",
		city: "London",
		temperature: 5.6
	},
	{
		month: "Dec",
		city: "London",
		temperature: 9.8
	}
];


// date : "2021-03-03",
// value: 1.5455
// },
const Graph = () => {

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
				position="month*temperature"
				color="city"
			/>
		</Chart>
	)
}

export default Graph;