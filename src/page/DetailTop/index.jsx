import React, { useEffect } from 'react'
import ContentTop from './ContentTop'
import style from './style.module.css'
import Navbar from '../../component/Navbar'

function DetailTop() {

    return (
        <>
            <div className={style.wrapper}>
                <Navbar />
                <main className={style.container}>
                    <ContentTop/>
                </main>
            </div>
        </>
    )
}

export default DetailTop