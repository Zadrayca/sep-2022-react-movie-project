const baseUrl = 'https://api.themoviedb.org/3';

const imagesUrl = 'https://image.tmdb.org/t/p';

const movies = '/discover/movie';
const movie = '/movie';
const genre = '/genre/movie/list';
const search = '/search/movie';

const urls = {
    allMovies:{
        movies,
        byPage: (page, sort) => `${movies}?sort_by=${sort}&page=${page}`,
    },
    oneMovie:{
        movie: (movieId) => `${movie}/${movieId}`
    },
    searchByQuery:{
        search,
        byQuery:(page, query) => `${search}?query=${query}&page=${page}`
    },
    allGenre: {
        genre,
        byGenres: (page, genre) => `${movies}?page=${page}&with_genres=${genre}`
    }
};

export {
    baseUrl,
    imagesUrl,
    urls
}