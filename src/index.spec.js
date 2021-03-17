import { shallow } from 'enzyme';
import Index from './index';

import App from './App'

describe('Render Index', () => {
		
	it('renders without crashing', () => {
		expect(Index).toBeDefined();
	});

	let wrapper;
	beforeEach(()=>{
		wrapper = shallow(<App/>)
	})

	it('Shallow render componente >> APP', () => {
		expect(wrapper.length).toEqual(1)
	});


});
