import {createSlice} from '@reduxjs/toolkit'
import { fetchTvAll } from '../action'
const tvShow = createSlice({
    name: 'tvShow',
    initialState: {
        loading: false,
        tv: [],
        show: {
            id: null,
            name: '',
            first_air_date: '',
            popularity: null,
            poster_path: null,
            overview: '',
            vote_average: null,
        },
        error: null,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTvAll.pending, (state) => {
            state.loading = true
        })
        .addCase(fetchTvAll.fulfilled, (state, action) => {
            state.loading = false,
            state.tv = action.payload
        })
        .addCase(fetchTvAll.rejected, (state) => {
            state.loading = true,
            state.error = action.payload
        })
    }
})

export default tvShow.reducer