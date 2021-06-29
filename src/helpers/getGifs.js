

export const getGifs = async( category ) => {
    const endPoint = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=OBsSPiJ8ebLAlGLLYzyxmUH69M3y33Yc`;
    try {
        
        const resp = await fetch( endPoint );
        const { data } = await resp.json();

        return data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })
    } catch (error) {
        console.error(error);
    }
  

}