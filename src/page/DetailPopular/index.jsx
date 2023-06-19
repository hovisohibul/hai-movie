import React from 'react'
import Navbar from '../../component/Navbar'
import ContentPopular from './ContentPopular'
import style from './style.module.css'

function DetailPopular() {
    return (
        <>
            <div className={style.wrapper}>
                <Navbar />
                <main className={style.container}>
                    <ContentPopular/>
                </main>
            </div>
        </>
    )
}

export default DetailPopular