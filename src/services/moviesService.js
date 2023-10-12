import { HTTPClient } from ".";

export class MoviesService extends HTTPClient{
    getMovies(){
       return this.get("/movies")
    }

}