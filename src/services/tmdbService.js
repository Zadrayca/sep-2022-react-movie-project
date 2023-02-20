import {apiServiceMovies} from "./apiServices";
import {urls} from "../configs";

const tmdbService = {
    getAllMoviesByPage: (page) => apiServiceMovies.get(urls.allMovies.byPage(page)),
    getAllGenre:() => apiServiceMovies.get(urls.allGenre.genre)
}

export {
    tmdbService
}