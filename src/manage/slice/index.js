import {createSlice} from '@reduxjs/toolkit'
import * as movieAction from '../action'

const movie = createSlice({
    name: 'movie',
    initialState: {
        loading: false,
        data: [],
        entity: {
            id: null,
            title: '',
            release_date: '',
            popularity: '',
            poster_path: '',
            overview: '',
            original_language: '',
            vote_average: '',
            genres: []
        },
        error: null,
    },
    extraReducers: (builder) => 
        builder.addCase(movieAction.fetchMovieAll.pending, (state) => {
            state.loading = true
        })
        .addCase(movieAction.fetchMovieAll.fulfilled, (state, action) => {
            state.loading = false,
            state.data = action.payload
        })
        .addCase(movieAction.fetchMovieAll.rejected, (state) => {
            state.loading = true,
            state.error = action.payload
        })

        .addCase(movieAction.fetchMovie.pending, (state) => {
            state.loading = true
        })
        .addCase(movieAction.fetchMovie.fulfilled, (state, action) => {
            state.loading = false,
            state.entity = action.payload
        })
        .addCase(movieAction.fetchMovie.rejected, (state) => {
            state.loading = true,
            state.error = action.payload
        })
})

export default movie.reducer;