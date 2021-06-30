import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('AddCategory component tests', () => {

    const setCategories = jest.fn();
    let wrapper;

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    })

    test('should make match with the snapshot', () => {
        expect( wrapper ).toMatchSnapshot();
    })
    
    test('should change the value in the input text', () => {
        const input = wrapper.find('input');
        const value = 'Hello World';
        input.simulate('change', { target: { value } });        
    })
    
    test('should not call the setInput function', () => {
        const form = wrapper.find('form');

        form.simulate('submit', { preventDefault(){} });

        expect( setCategories ).not.toHaveBeenCalled();

    })

    test('should call to submit function in the form', () => {
        const value = 'Hello from submit';
        
        wrapper.find('input').simulate('change', { target: { value } });
        wrapper.find('form').simulate('submit', { preventDefault(){} });        
        

        expect( setCategories ).toHaveBeenCalled();
        expect( setCategories ).toHaveBeenCalledWith( expect.any(Function) );

        expect( wrapper.find('input').prop('value') ).toBe('');

    })
    
    

})
