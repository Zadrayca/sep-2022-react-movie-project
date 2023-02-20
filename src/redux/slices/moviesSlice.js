import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {tmdbService} from "../../services";

const initialState = {
    movies: [],
    page: 1,
    errors: null,
    loading: null,
    genres: [],
    genreChoice: {id: null, name: null},
    movieId: null,
    movieInfo: null
};

const getAllMovies = createAsyncThunk(
    'moviesSlice/getAllMovies',
    async ({page}, thunkAPI) => {
        try {
            // await new Promise(resolve => setTimeout(() => resolve(), 1000));
            const {data} = await tmdbService.getAllMoviesByPage(page);
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const getMoviesGenre = createAsyncThunk(
    'moviesSlice/getMoviesGenre',
    async ({page, genre}, thunkAPI) => {
        try {
            // await new Promise(resolve => setTimeout(() => resolve(), 1000));
            const {data} = await tmdbService.getMoviesByGenre(page, genre);
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const getMovieById = createAsyncThunk(
    'moviesSlice/getMovieById',
    async ({movieId}, thunkAPI) => {
        try {
            // await new Promise(resolve => setTimeout(() => resolve(), 1000));
            const {data} = await tmdbService.getMovieByIdSrv(movieId);
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
        })
    },
    extraReducers: builder =>
        builder
            .addCase(getAllMovies.fulfilled, (state, action) => {
                const {results, page} = action.payload;
                state.movies = results;
                state.page = page
                state.loading = false;
            })
            .addCase(getMoviesGenre.fulfilled, (state, action) => {
                const {results, page} = action.payload;
                state.movies = results;
                state.page = page
                state.loading = false;
            })
            .addCase(getMovieById.fulfilled, (state, action) => {
                // const {results, page} = action.payload;
                // state.movie = results;
                state.movieInfo = action.payload;
                // state.page = page
                state.loading = false;
            })
            .addCase(getAllMovies.pending, (state) => {
                state.loading = true;
            })
            .addCase(getMoviesGenre.pending, (state) => {
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
    actions: {setPage, setGenreChoice, setMovieId}
} = moviesSlice;

const moviesActions = {
    getAllGenre,
    getAllMovies,
    setPage,
    setGenreChoice,
    getMoviesGenre,
    getMovieById,
    setMovieId
}

export {
    moviesReducer,
    moviesActions
}