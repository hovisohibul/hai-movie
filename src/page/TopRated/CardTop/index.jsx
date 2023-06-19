import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTopRated } from '../../../manage/action'
import style from './style.module.css'
import { useNavigate } from 'react-router-dom'

function CardTop() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {data} = useSelector((state) => state.topRated)
    const fetchTopRate = async() => {
        dispatch(fetchTopRated())
    }

    useEffect(() => {
        fetchTopRate()
    },[])

    const goToDetail = (id) => {
        navigate(`/detail-top/${id}`)
    }

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

export default CardTop