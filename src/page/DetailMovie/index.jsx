import React from 'react'
import Navbar from '../../component/Navbar'
import ContentMovie from './ContentMovie'
import style from './style.module.css'

function DetailMovie() {


    return (
        <>
            <div className={style['wrapper']}>
                <Navbar/>
                <main className={style['container']}>
                    <ContentMovie/>
                </main>
            </div>
        </>
    )
}

export default DetailMovie