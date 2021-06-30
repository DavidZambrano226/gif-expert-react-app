import { getGifs } from "../../helpers/GetGifs"


describe('GetGifs Helper test', () => {
    
    test('should return an array with some elements', async() => {
        const gifs = await getGifs('Mokeys');
        expect(gifs.length).toBe(10);

    })

    test('should return an empty array when the category is empty', async() => {
        const gifs = await getGifs('');
        expect(gifs.length).toBe(0);
    })
    
    
})
