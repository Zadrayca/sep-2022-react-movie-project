import {apiServiceMovies} from "./apiServices";
import {urls} from "../configs";

const tmdbService = {
    getAllMoviesByPage: (page, genre) => apiServiceMovies.get(urls.allMovies.byPage(page, genre)),
    getMovieByIdSrv: (movieId) => apiServiceMovies.get(urls.oneMovie.movie(movieId)),
    getTopOrUpSrv: (page, path) => apiServiceMovies.get(urls.top_up.topUP(page, path)),
    getSearchByQuery: (page, query, year) => apiServiceMovies.get(urls.searchByQuery.byQuery(page, query, year)),
    getAllGenre:() => apiServiceMovies.get(urls.allGenre.genre),
}

export {
    tmdbService
}