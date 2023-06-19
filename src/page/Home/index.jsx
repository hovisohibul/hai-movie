import React, { useEffect } from 'react'
import Header from './Header'
import CardMovie from './CardMovie'
// import CardTV from './CardTV'
import style from './style.module.css'

function Home() {

    return (
        <>
            <Header/>
            <main className={style['wrapper']}>
                <div className='movie-content'>
                    <h2 className='text-white fw-bold'>Now Playing</h2>
                    <div className={style['movie']}>
                        <CardMovie/>
                    </div>
                </div>
                {/* <div className='tv-content'>
                    <h2 className='text-white fw-bold'>TV Show List</h2>
                    <div className={style['tv']}>
                        <CardTV/>
                    </div>
                </div> */}
            </main>
        </>
    )
}

export default Home