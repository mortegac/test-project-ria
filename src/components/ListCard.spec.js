import ListCard from './ListCard';
import { shallow } from 'enzyme';
import Card from '../components/Card';
describe('Render ListCard', () => {
		
	it('renders without crashing', () => {
		expect(ListCard).toBeDefined();
	});

	let wrapper;
	const item={} 
	beforeEach(()=>{
		wrapper = shallow(
			<Card
				id={'IDCURRENCY'}
				key='TEST01' {...item} 
				amount={'1234'}
				amountEUR={'1234'}
			/>)
	})

	it('Shallow render componente >> APP', () => {
		expect(wrapper.length).toEqual(1)
	});


});
