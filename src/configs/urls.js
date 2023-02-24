const baseUrl = 'https://api.themoviedb.org/3';

const imagesUrl = 'https://image.tmdb.org/t/p';

const movies = '/discover/movie';
const movie = '/movie';
const genre = '/genre/movie/list';
const search = '/search/movie';

const urls = {
    allMovies: {
        movies,
        byPage: (page, genre) => `${movies}?&page=${page}&with_genres=${genre}&language=uk`
    },
    top_up: {
        topUP: (page, path) => `${movie}/${path}?page=${page}&language=uk`
    },
    oneMovie: {
        movie: (movieId, option) => `${movie}/${movieId}${option}?language=uk`
    },
    searchByQuery: {
        search,
        byQuery: (page, query) => `${search}?query=${query}&page=${page}&language=uk`
    },
    allGenre: {
        genre
    }
};

export {
    baseUrl,
    imagesUrl,
    urls
}