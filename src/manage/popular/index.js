import { createSlice } from "@reduxjs/toolkit";
import { fetchPopular } from "../action";
import { fetchMovie } from "../action";

const popular = createSlice({
    name: "popular",
    initialState: {
        loading: false,
        popularMovie: [],
        list: {
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
    extraReducers: (builder) => {
        builder.addCase(fetchPopular.pending, (state) => {
            state.loading = true;
        })
        .addCase(fetchPopular.fulfilled, (state, action) => {
            state.loading = false;
            state.popularMovie = action.payload;
        })
        .addCase(fetchPopular.rejected, (state, action) => {
            state.loading = true;
            state.error = action.payload;
        })

        .addCase(fetchMovie.pending, (state) => {
            state.loading = true;
        })
        .addCase(fetchMovie.fulfilled, (state, action) => {
            state.loading = false;
            state.list = action.payload;
        })
        .addCase(fetchMovie.rejected, (state, action) => {
            state.loading = true;
            state.error = action.payload;
        })
    }
})

export default popular.reducer