import { createSlice } from "@reduxjs/toolkit";
import { fetchTopRated } from "../action";
import { fetchMovie } from "../action";

const topRated = createSlice({
    name: "topRated",
    initialState: {
        loading: false,
        data: [],
        topList: {
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
    extraReducers: (build) => {
        build.addCase(fetchTopRated.pending, (state) => {
            state.loading = true;
        })
        .addCase(fetchTopRated.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        })
        .addCase(fetchTopRated.rejected, (state, action) => {
            state.loading = true
            state.error = action.error.message;
        })

        .addCase(fetchMovie.pending, (state) => {
            state.loading = true;
        })
        .addCase(fetchMovie.fulfilled, (state, action) => {
            state.loading = false;
            state.topList = action.payload;
        })
        .addCase(fetchMovie.rejected, (state, action) => {
            state.loading = true
            state.error = action.error.message;
        })
    }
})

export default topRated.reducer