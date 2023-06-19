import { configureStore } from "@reduxjs/toolkit";
import movieDbReducer from '../slice'
import popularReducer from "../popular";
import topRatedReducer from '../topRated'
import upComingReducer from "../upComing";
import videoReducer from "../video";

export default configureStore({
    reducer: {
        movie: movieDbReducer,
        popular: popularReducer,
        topRated: topRatedReducer,
        upComing: upComingReducer,
        video: videoReducer,
    }
})