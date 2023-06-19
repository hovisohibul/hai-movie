import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {useParams} from 'react-router-dom'
import { fetchMovie } from '../../../manage/action'
import style from './style.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons'
import Youtube from 'react-youtube'
import { fetchVideo } from '../../../manage/action'

function ContentComing() {

    const {id} = useParams()
    const dispatch = useDispatch()
    // const [video, setVideo] = useState()
    const {coming} = useSelector((state) => state.upComing)
    const {data} = useSelector((state) => state.video)
    
    const fetchMovieUpComing = async(comingId) => {
        await dispatch(fetchMovie(comingId))
    }

    const fetchVideoYoutube = async(movieId) => {
        await dispatch(fetchVideo(movieId))
    }
    // const fetchVideo = async(movieId) => {
    //     try {
    //         const respone = await movieList.get(`/movie/${movieId}/videos?api_key=${import.meta.env.VITE_TMDB_KEY}&append_to_response=videos`)
    //         return respone.data.results[1]
    //     } catch (error) {
    //         return error
    //     }
    // }

    useEffect(() => {
        fetchMovieUpComing(id)
        fetchVideoYoutube(id)
    },[])

    let videos

    if(data[0] !== undefined){
        videos = <Youtube videoId={data[0].key} className={style['video-youtube']}/>
    }

    return (
        <>
            <div className={style['wrapper']}>
                <div className={style['detail-movie']}>
                    <div className={style['image-movie']}>
                        <img src={`${import.meta.env.VITE_IMG_PATH}${coming.poster_path}`} alt='poster' />
                    </div>
                    <div className={style['content-movie']}>
                        <p className={style.title}>Title: {coming.title}</p>
                        <div className={style['rating']}>
                            <FontAwesomeIcon icon={faStar} className={style['icon']} size='2x'/>
                            {coming.vote_average}
                        </div>
                        <p>Release Date: {coming.release_date}</p>
                        <hr />
                        <div className={style['genre']}>
                            <p>Genre:</p>
                            {coming.genres.map((item) => {
                                return (
                                    <p key={item.id}>{item.name}</p>
                                )
                            })}
                        </div>
                        <p>Language: {coming.original_language}</p>
                        <p>Overview: {coming.overview}</p>
                        <p>Popularity: {coming.popularity}</p>
                    </div>
                </div>
                <div className={style['video-movie']}>                    
                    {videos}
                </div>
            </div>
        </>
    )
}

export default ContentComing