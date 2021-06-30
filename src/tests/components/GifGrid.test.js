import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGif } from '../../hooks/useFetchGif';
jest.mock('../../hooks/useFetchGif');

describe('Test form GifGrid component', () => {
    const category = 'Cats';
    
    test('should make match with the snapshot', () => {

        useFetchGif.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow( <GifGrid category={category} /> );
        expect( wrapper ).toMatchSnapshot();
    })

    test('should show items when imges are loaded', () => {
        
        const gifs = [
            {
                id: 'ABCD',
                url: 'http://localhost/img.jpg',
                title: 'Test image'
            },
            {
                id: 'ABCDEF',
                url: 'http://localhost/img.jpg',
                title: 'Test image Two'
            }
        ];
        
        useFetchGif.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow( <GifGrid category={category} /> );
        
        expect( wrapper.find('p').exists() ).toBeFalsy();
        expect( wrapper.find('GifGridItem').length ).toBe( gifs.length );


    })
    
    
})
