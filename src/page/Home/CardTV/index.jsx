import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTvAll } from '../../../manage/action'
import style from './style.module.css'

function CardTV() {

    const dispatch = useDispatch()
    const {tv} = useSelector((state) => state.tvShow)

    const fetchDataTv = async() => {
        dispatch(fetchTvAll())
    }

    useEffect(() => {
        fetchDataTv()
    })

    return (
        <>
            {tv.map((item, id) => {
                return (
                    <div key={id} className={style['main-card']}>
                        <div className={style['card-content']}>
                            <img src={`${import.meta.env.VITE_IMG_PATH}${item.poster_path}`} alt="poster" />
                            <div className={style['card-title']}>
                                <p>{item.name}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default CardTV