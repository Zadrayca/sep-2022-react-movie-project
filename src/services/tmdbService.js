import {apiServiceMovies} from "./apiServices";
import {urls} from "../configs";

const tmdbService = {
    getAllMoviesByPage: (page) => apiServiceMovies.get(urls.allMovies.byPage(page)),
    getMoviesByGenre: (page, genre) => apiServiceMovies.get(urls.allMovies.byGenres(page, genre)),
    getMovieByIdSrv: (movieId) => apiServiceMovies.get(urls.oneMovie.movie(movieId)),
    getAllGenre:() => apiServiceMovies.get(urls.allGenre.genre),
}

export {
    tmdbService
}