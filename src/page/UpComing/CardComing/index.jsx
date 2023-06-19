import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUpComing } from '../../../manage/action'
import { useNavigate } from 'react-router-dom'
import style from './style.module.css'

function CardComing() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {data} = useSelector((state) => state.upComing)
    const fetchMovieComing = async() => {
        dispatch(fetchUpComing())
    }

    const goToDetail = (id) => {
        navigate(`/detail-coming/${id}`)
    }

    useEffect(() => {
        fetchMovieComing()
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

export default CardComing