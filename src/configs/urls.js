const baseUrl = 'https://api.themoviedb.org/3';

const imagesUrl = 'https://image.tmdb.org/t/p';

const movies = '/discover/movie';
const movie = '/movie';
const genre = '/genre/movie/list?language=uk';
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
        movie: (movieId) => `${movie}/${movieId}?language=uk&append_to_response=videos,images,credits`
    },
    searchByQuery: {
        search,
        byQuery: (page, query, year) => `${search}?query=${query}&page=${page}&year=${year}&language=uk`
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