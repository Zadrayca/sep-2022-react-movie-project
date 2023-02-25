import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {tmdbService} from "../../services";

const initialState = {
    movies: [],
    page: 1,
    sort: 'popularity.desc',
    errors: null,
    loading: false,
    genres: [],
    genreChoice: {id: '28', name: 'Action'},
    movieId: '',
    movieInfo: null,
    movieCast: null,
    movieImages: null,
    queryMovie: '',
    queryYear: '',
    themeSwitch: false,
    homePop: [],
    homeTopUp: []
};

const getAllMovies = createAsyncThunk(
    'moviesSlice/getAllMovies',
    async ({page, genre}, thunkAPI) => {
        try {
            // await new Promise(resolve => setTimeout(() => resolve(), 1000));
            const {data} = await tmdbService.getAllMoviesByPage(page, genre);
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const getTopOrUp = createAsyncThunk(
    'moviesSlice/getTopOrUpSrv',
    async ({page, path}, thunkAPI) => {
        try {
            // await new Promise(resolve => setTimeout(() => resolve(), 1000));
            const {data} = await tmdbService.getTopOrUpSrv(page, path);
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const getMovieById = createAsyncThunk(
    'moviesSlice/getMovieById',
    async ({movieId, option=''}, thunkAPI) => {
        try {
            // await new Promise(resolve => setTimeout(() => resolve(), 1000));
            const {data} = await tmdbService.getMovieByIdSrv(movieId, option);
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const getSearchMovieByQuery = createAsyncThunk(
    'moviesSlice/getSearchMovieByQuery',
    async ({page, query, year}, thunkAPI) => {
        try {
            // await new Promise(resolve => setTimeout(() => resolve(), 1000));
            const {data} = await tmdbService.getSearchByQuery(page, query, year);
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const getAllGenre = createAsyncThunk(
    'moviesSlice/getAllGenre',
    async (_, thunkAPI) => {
        try {
            // await new Promise(resolve => setTimeout(() => resolve(), 1000));
            const {data} = await tmdbService.getAllGenre();
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);


const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers: {
        setPage:((state, action) =>{
            state.page = action.payload
        }),
        setGenreChoice:((state, action) =>{
            state.genreChoice = action.payload
        }),
        setMovieId:((state, action) =>{
            state.movieId = action.payload
        }),
        setQuery:((state, action) =>{
            state.queryMovie = action.payload
        }),
        setYear:((state, action) =>{
            state.queryYear = action.payload
        }),
        setSort:((state, action) =>{
            state.sort = action.payload
        }),
        setTheme:((state, action) =>{
            state.themeSwitch = action.payload
        })
    },
    extraReducers: builder =>
        builder
            .addCase(getAllMovies.fulfilled, (state, action) => {
                const {results, page} = action.payload;
                state.movies = results;
                state.homePop = results;
                state.page = page
                state.loading = false;
            })
            .addCase(getTopOrUp.fulfilled, (state, action) => {
                const {results, page} = action.payload;
                state.movies = results;
                state.homeTopUp = results;
                state.page = page
                state.loading = false;
            })
            .addCase(getMovieById.fulfilled, (state, action) => {
                if (action.payload?.title){
                    state.movieInfo = action.payload;
                } else if (action.payload?.cast) {
                    state.movieCast = action.payload
                } else if (action.payload?.backdrops || action.payload?.posters){
                    state.movieImages = action.payload
                }
                state.loading = false;
            })
            .addCase(getSearchMovieByQuery.fulfilled, (state, action) => {
                const {results, page} = action.payload;
                state.movies = results;
                state.page = page
                state.loading = false;
            })
            .addCase(getAllMovies.pending, (state) => {
                state.loading = true;
            })
            .addCase(getSearchMovieByQuery.pending, (state) => {
                state.loading = true;
            })
            .addCase(getTopOrUp.pending, (state) => {
                state.loading = true;
            })
            .addCase(getMovieById.pending, (state) => {
                state.loading = true;
            })
            .addCase(getAllGenre.fulfilled, (state, action) =>{
                const {genres} = action.payload
                state.genres = genres
            })
});

const {
    reducer: moviesReducer,
    actions: {setPage, setGenreChoice, setMovieId, setQuery, setSort, setTheme, setYear}
} = moviesSlice;

const moviesActions = {
    getAllGenre,
    getAllMovies,
    setPage,
    setGenreChoice,
    getTopOrUp,
    getMovieById,
    setMovieId,
    getSearchMovieByQuery,
    setQuery,
    setYear,
    setSort,
    setTheme
}

export {
    moviesReducer,
    moviesActions
}