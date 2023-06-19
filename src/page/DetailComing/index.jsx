import React from 'react'
import ContentComing from './ContentComing'
import style from './style.module.css'
import Navbar from '../../component/Navbar'

function DetailComing() {
    return (
        <>
            <div className={style['wrapper']}>
                <Navbar/>
                <main className={style['container']}>
                    <ContentComing/>
                </main>
            </div>
        </>
    )
}

export default DetailComing