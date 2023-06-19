import { createSlice } from "@reduxjs/toolkit";
import { fetchVideo } from "../action";
// import { fetchVideos } from "../action";

const video = createSlice({
    name: "video",
    initialState: {
        loading: false,
        data: [],
        error: null
    },
    extraReducers: (build) => {
        build.addCase(fetchVideo.pending, (state) => {
            state.loading = true
        })
        .addCase(fetchVideo.fulfilled, (state, action) => {
            state.loading = false
            state.data = action.payload
        })
        .addCase(fetchVideo.rejected, (state, action) => {
            state.loading = true
            state.error = action.payload
        })
    }
})

export default video.reducer