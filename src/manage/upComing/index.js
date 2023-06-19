import { createSlice } from "@reduxjs/toolkit";
import { fetchUpComing } from "../action";
import { fetchMovie } from "../action";
import { fetchVideo } from "../action";

const upComing = createSlice({
    name: 'upComing',
    initialState: {
        loading: false,
        data: [],
        coming: {
            id: null,
            title: '',
            release_date: '',
            popularity: '',
            poster_path: '',
            overview: '',
            original_language: '',
            vote_average: '',
            genres: [],
        },
        error: null
    },
    extraReducers: (build) => {
        build.addCase(fetchUpComing.pending, (state) => {
            state.loading = true;
        })
        .addCase(fetchUpComing.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        })
        .addCase(fetchUpComing.rejected, (state, action) => {
            state.loading = true;
            state.error = action.payload
        })

        .addCase(fetchMovie.pending, (state) => {
            state.loading = true;
        })
        .addCase(fetchMovie.fulfilled, (state, action) => {
            state.loading = false;
            state.coming = action.payload;
        })
        .addCase(fetchMovie.rejected, (state, action) => {
            state.loading = true;
            state.error = action.payload
        })
    }
})

export default upComing.reducer