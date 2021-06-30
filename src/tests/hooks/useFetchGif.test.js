import { useFetchGif } from "../../hooks/useFetchGif";
import { renderHook } from '@testing-library/react-hooks'


describe('Custom hook useFetchGif test', () => {
    test('should return an initial state', async() => {
        const category = 'Animals';
        const { result, waitForNextUpdate } = renderHook( () => useFetchGif( category ));
        const { data, loading } = result.current;

        await waitForNextUpdate();

        expect( data.length ).toBe(0);
        expect( loading ).toBeTruthy();
    })

    test('should return an array with images and the loadign shoul be in false', async() => {
        const category = 'Animals';
        
        const { result, waitForNextUpdate } = renderHook( () => useFetchGif( category ));

        await waitForNextUpdate();

        const { data, loading } = result.current;

        expect( data.length ).toBe( 10 );
        expect( loading ).toBeFalsy();
    })
    
    
})
