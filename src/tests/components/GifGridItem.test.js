import { shallow } from 'enzyme';
import { GifGridItem } from "../../components/GifGridItem"


describe('GifGridItem test component', () => {

    const imgData = {
        id: '1',
        title: 'Custom title test',
        url: 'http://someurl.test.com'
    }
    const wrapper = shallow(<GifGridItem {...imgData} /> )

    test('should make match with snapshot', () => {
        expect( wrapper ).toMatchSnapshot();
    })

    test('should render the title in a p element in HTML', () => {
        const p = wrapper.find('p').text().trim();
        expect( p ).toBe( imgData.title );
    })

    test('should render the img with src and alt assigned', () => {
        const img = wrapper.find('img').props();
        expect( img.src ).toBe( imgData.url );
        expect( img.alt ).toBe( imgData.title );

    })
    
    test('should have a div container with class animate__zoomIn', () => {
        const div = wrapper.find('div');
        expect(div.hasClass('animate__zoomIn')).toBeTruthy();
    })
    
    
    

})
