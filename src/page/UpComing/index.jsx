import React from 'react'
import Navbar from '../../component/Navbar'
import style from './style.module.css'
import CardComing from './CardComing'

function UpComing() {
    return (
        <>
            <div className={style['wrapper']}>
                <Navbar/>
                <main className={style['container']}>
                    <div className={style['popular']}>
                        <h2 className='text-white fw-bold'>Up Coming</h2>
                        <div className={style['popular-content']}>                        
                            <CardComing/>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}

export default UpComing