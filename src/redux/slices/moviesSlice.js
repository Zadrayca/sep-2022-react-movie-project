import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {tmdbService} from "../../services";

const initialState = {
    movies: [],
    page: 1,
    errors: null,
    loading: null,
    genres: []
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
        // setCarForUpdate: ((state, action) => {
        //     state.carForUpdate2 = action.payload;
        // })
        setPage:((state, action) =>{
            state.page = action.payload
        })
    },
    extraReducers: builder =>
        builder
            .addCase(getAllMovies.fulfilled, (state, action) => {
                const {results} = action.payload;
                state.movies = results;
                state.loading = false;
            })
            .addCase(getAllMovies.pending, (state) => {
                state.loading = true;
            })
            .addCase(getAllGenre.fulfilled, (state, action) =>{
                const {genres} = action.payload
                state.genres = genres
            })
});

const {reducer: moviesReducer, actions: {setPage}} = moviesSlice;

const moviesActions = {
    getAllGenre,
    getAllMovies,
    setPage
}

export {
    moviesReducer,
    moviesActions
}