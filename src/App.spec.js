import { shallow } from 'enzyme';
import App from './App';
import Layout from './components/layout';

describe('Render App', () => {
		
	it('renders without crashing', () => {
		expect(App).toBeDefined();
	});

	let wrapper;
	const ChildrenComponent = () => <span>Mock</span>
	
	beforeEach(()=>{
		wrapper = shallow(<Layout>ChildrenComponent</Layout>)
	})

	it('Shallow render componente >> LAYOUT', () => {
		expect(wrapper.length).toEqual(1)
	});

});
