import React from 'react'
import Navbar from '../../component/Navbar'
import CardTop from './CardTop'
import style from './style.module.css'

function TopRated() {
    return (
        <>
            <div className={style['wrapper']}>
                <Navbar/>
                <main className={style['container']}>
                    <div className={style['popular']}>
                        <h2 className='text-white fw-bold'>Top Rated</h2>
                        <div className={style['popular-content']}>                        
                            <CardTop/>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}

export default TopRated