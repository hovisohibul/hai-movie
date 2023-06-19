import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchMovie } from '../../../manage/action'
import style from './style.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import Youtube from 'react-youtube'
import { fetchVideo } from '../../../manage/action'

function ContentMovie() {

    const {id} = useParams()
    const dispatch = useDispatch()
    const {entity} = useSelector((state) => state.movie)
    const {data} = useSelector(state => state.video)

    const fetchDataMovie = async(movieId) => {
        dispatch(fetchMovie(movieId))
    }

    const fetchVideoYoutube = async(videoId) => {
        dispatch(fetchVideo(videoId))
    }

    useEffect(() => {
        fetchDataMovie(id)
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
                        <img src={`${import.meta.env.VITE_IMG_PATH}${entity.poster_path}`} alt='poster' />
                    </div>
                    <div className={style['content-movie']}>
                        <p className={style.title}>Title: {entity.title}</p>
                        <div className={style['rating']}>
                            <FontAwesomeIcon icon={faStar} className={style['icon']} size='2x'/>
                            {entity.vote_average}
                        </div>
                        <p>Release Date: {entity.release_date}</p>
                        <hr />
                        <div className={style['genre']}>
                            <p>Genre:</p>
                            {entity.genres.map((item) => {
                                return (
                                    <p key={item.id}>{item.name}</p>
                                )
                            })}
                        </div>
                        <p>Language: {entity.original_language}</p>
                        <p>Overview: {entity.overview}</p>
                        <p>Popularity: {entity.popularity}</p>
                    </div>
                </div>
                <div className={style['video-movie']}>
                    {videos}
                </div>
            </div>
        </>
    )
}


export default ContentMovie