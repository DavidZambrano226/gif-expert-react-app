import { shallow } from 'enzyme';
import GifExpertApp from '../GifExpextApp';

describe('GifExpert App tests', () => {
    
    let wrapper;

    beforeEach( () => {
        wrapper = shallow(<GifExpertApp />);
    })

    test('should make match with the snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('should render a list of the Gif Grid categories', () => {
        const categories = ['Cats', 'Dogs', 'Smile'];

        const defaultWrapper = shallow(<GifExpertApp defaultCategories={categories} />)


        expect( defaultWrapper ).toMatchSnapshot();
        expect( defaultWrapper.find('GifGrid').length ).toBe( categories.length );

    })
    
    
})
