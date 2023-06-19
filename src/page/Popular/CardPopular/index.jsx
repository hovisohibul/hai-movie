import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { fetchPopular } from '../../../manage/action'
import style from './style.module.css'

function CardPopular() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {popularMovie} = useSelector((state) => state.popular)
    const fetchPopularMovie = async() => {
        dispatch(fetchPopular())
    }

    const goToDetail = (id) => {
        navigate(`/detail-popular/${id}`)
    }

    useEffect(() => {
        fetchPopularMovie()
    },[])

    return (
        <>
            {popularMovie.map((item, id) => {
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

export default CardPopular