
import { HTTPClient } from ".";

export class MoviesService extends HTTPClient{
    getMovies(params){
        const queryParams = new URLSearchParams();

        params.category?.forEach(category => {
            queryParams.append('category', category);
        }); 

        queryParams.append('rating', params.maxRating);
        
        params.language?.forEach(language => {
            queryParams.append('language', language);
        }); 
        

        const queryString = queryParams.toString()

       return this.get(`movies?${queryString}`)
    }
}