const baseUrl = 'https://api.themoviedb.org/3';

const imagesUrl = 'https://image.tmdb.org/t/p';

const movies = '/discover/movie';
const movie = '/movie';
const genre = '/genre/movie/list';

const urls = {
    allMovies:{
        movies,
        byPage: (page) => `${movies}?page=${page}`,
        byGenres: (page, genre) => `${movies}?page=${page}&with_genres=${genre}`
    },
    oneMovie:{
        movie: (movieId) => `${movie}/${movieId}`
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