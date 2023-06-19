import {React, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMovie } from '../../../manage/action'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import style from './style.module.css'
import { fetchVideo } from '../../../manage/action'
import Youtube from 'react-youtube'

function ContentTop() {

    const {id} = useParams()
    const dispatch = useDispatch()
    const {topList} = useSelector((state) => state.topRated)
    const {data} = useSelector(state => state.video)

    const fetchMovieRate = async(movieId) => {
        dispatch(fetchMovie(movieId))
    }

    const fetchVideoYoutube = async(videoId) => {
        dispatch(fetchVideo(videoId))
    }

    useEffect(() => {
        fetchMovieRate(id)
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
                        <img src={`${import.meta.env.VITE_IMG_PATH}${topList.poster_path}`} alt='poster' />
                    </div>
                    <div className={style['content-movie']}>
                        <p className={style.title}>Title: {topList.title}</p>
                        <div className={style['rating']}>
                            <FontAwesomeIcon icon={faStar} className={style['icon']} size='2x'/>
                            {topList.vote_average}
                        </div>
                        <p>Release Date: {topList.release_date}</p>
                        <hr />
                        <div className={style['genre']}>
                            <p>Genre:</p>
                            {topList.genres.map((item) => {
                                return (
                                    <p key={item.id}>{item.name}</p>
                                )
                            })}
                        </div>
                        <p>Language: {topList.original_language}</p>
                        <p>Overview: {topList.overview}</p>
                        <p>Popularity: {topList.popularity}</p>
                    </div>
                </div>
                <div className={style['video-movie']}>
                    {videos}
                </div>
            </div>
        </>
    )
}

export default ContentTop