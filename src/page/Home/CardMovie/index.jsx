import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMovieAll } from '../../../manage/action'
import style from './style.module.css'
import { useNavigate } from 'react-router-dom'

function CardMovie() {

    const dispatch = useDispatch()
    const {data} = useSelector((state) => state.movie)
    const navigate = useNavigate()

    const fetchDataMovie = async() => {
        dispatch(fetchMovieAll())
    }

    const goToDetail = (id) => {
        navigate(`/detail-movie/${id}`)
    }

    useEffect(() => {
        fetchDataMovie()
        // console.log(fetchDataMovie(),data)
    },[])

    return (
        <>
            {data.map((item, id) => {
                return (
                    <div key={id} className={style['main-card']} onClick={() => goToDetail(item.id)}>
                        <div className={style['card-content']}>
                            <img src={`${import.meta.env.VITE_IMG_PATH}${item.poster_path}`} alt="poster" />
                            <div className={style['card-title']}>
                                <p>{item.title}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default CardMovie