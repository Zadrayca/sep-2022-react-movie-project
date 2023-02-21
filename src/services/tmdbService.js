import {apiServiceMovies} from "./apiServices";
import {urls} from "../configs";

const tmdbService = {
    getAllMoviesByPage: (page, sort) => apiServiceMovies.get(urls.allMovies.byPage(page, sort)),
    getMoviesByGenre: (page, genre) => apiServiceMovies.get(urls.allGenre.byGenres(page, genre)),
    getMovieByIdSrv: (movieId) => apiServiceMovies.get(urls.oneMovie.movie(movieId)),
    getSearchByQuery: (page, query) => apiServiceMovies.get(urls.searchByQuery.byQuery(page, query)),
    getAllGenre:() => apiServiceMovies.get(urls.allGenre.genre),
}

export {
    tmdbService
}