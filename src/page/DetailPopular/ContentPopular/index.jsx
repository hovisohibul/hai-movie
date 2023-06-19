import React, { useEffect } from 'react'
import { fetchMovie } from '../../../manage/action'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import style from './style.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import Youtube from 'react-youtube'
import { fetchVideo } from '../../../manage/action'

function ContentPopular() {

    const {id} = useParams()
    const dispatch = useDispatch()
    const {list} = useSelector((state) => state.popular)
    const {data} = useSelector(state => state.video)

    const fetchMoviePopular = async(movieId) => {
        dispatch(fetchMovie(movieId))
    }

    const fetchVideoYoutube = async(videoId) => {
        dispatch(fetchVideo(videoId))
    }

    useEffect(() => {
        fetchMoviePopular(id)
        fetchVideoYoutube(id)
    }, [])

    let videos
    if(data[0] !== undefined){
        videos = <Youtube videoId={data[0].key} className={style['video-youtube']}/>
    }

    return (
        <>
            <div className={style['wrapper']}>
                <div className={style['detail-movie']}>
                    <div className={style['image-movie']}>
                        <img src={`${import.meta.env.VITE_IMG_PATH}${list.poster_path}`} alt='poster' />
                    </div>
                    <div className={style['content-movie']}>
                        <p className={style.title}>Title: {list.title}</p>
                        <div className={style['rating']}>
                            <FontAwesomeIcon icon={faStar} className={style['icon']} size='2x'/>
                            {list.vote_average}
                        </div>
                        <p>Release Date: {list.release_date}</p>
                        <hr />
                        <div className={style['genre']}>
                            <p>Genre:</p>
                            {list.genres.map((item) => {
                                return (
                                    <p key={item.id}>{item.name}</p>
                                )
                            })}
                        </div>
                        <p>Language: {list.original_language}</p>
                        <p>Overview: {list.overview}</p>
                        <p>Popularity: {list.popularity}</p>
                    </div>
                </div>
                <div className={style['video-movie']}>
                    {videos}
                </div>
            </div>
        </>
    )
}

export default ContentPopular