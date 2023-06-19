import React, { useEffect, useState } from 'react'
import Navbar from '../../component/Navbar'
import CardPopular from './CardPopular'
import style from './style.module.css'

function Popular() {

    return (
        <>
            <div className={style['wrapper']}>
                <Navbar/>
                <main className={style['container']}>
                    <div className={style['popular']}>
                        <h2 className='text-white fw-bold'>Popular Movie</h2>
                        <div className={style['popular-content']}>                        
                            <CardPopular/>
                        </div>
                    </div>                    
                </main>
            </div>
        </>
    )
}

export default Popular