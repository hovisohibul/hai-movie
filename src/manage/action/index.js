import { createAsyncThunk } from "@reduxjs/toolkit";
import { movieList } from "../../service/api/api";
// import { tvShowList } from "../../service/api/api";

export const fetchMovieAll = createAsyncThunk('movie/fetchMovieAll', async() => {
    try {
        const api = `api_key=${import.meta.env.VITE_TMDB_KEY}`
        const respone = await movieList.get(`/movie/now_playing?${api}`)
        console.log(respone.data.results)
        return respone.data.results
    } catch (error) {
        return error
    }
})

export const fetchMovie = createAsyncThunk('movie/fetchMovie', async(id) => {
    try {
        const respone = await movieList.get(`/movie/${id}?api_key=${import.meta.env.VITE_TMDB_KEY}`)
        return respone.data
    } catch (error) {
        return error
    }
})

export const fetchPopular = createAsyncThunk('movie/fetchPopularMovie', async() => {
    try {
        const api = `api_key=${import.meta.env.VITE_TMDB_KEY}`
        const respone = await movieList.get(`/movie/popular?${api}`)
        return respone.data.results
    } catch (error) {
        return error
    }
})

export const fetchTopRated = createAsyncThunk('movie/fetchTopRated', async() => {
    try {
        const api = `api_key=${import.meta.env.VITE_TMDB_KEY}`
        const respone = await movieList.get(`/movie/top_rated?${api}`)
        return respone.data.results
    } catch (error) {
        return error
    }
})

export const fetchUpComing = createAsyncThunk('movie/fetchUpComing', async() => {
    try {
        const api = `api_key=${import.meta.env.VITE_TMDB_KEY}`
        const respone = await movieList.get(`/movie/upcoming?${api}`)
        return respone.data.results
    } catch (error) {
        return error
    }
})

export const fetchVideo = createAsyncThunk('movie/fetchVideo', async(id) => {
    try {
        const api = `api_key=${import.meta.env.VITE_TMDB_KEY}`
        const respone = await movieList.get(`/movie/${id}/videos?${api}&append_to_response=videos`)
        return respone.data.results

    } catch (error) {
        return error
    }
})
