import React from 'react'
import Navbar from '../../../component/Navbar'
import style from './style.module.css'
import movie from './assets/movie.png'

function Header() {
    return (
      <>
        <header className={style.header}>
          <Navbar/>
            <div className={style['header-content']}>
              <div className={style['text-content']}>
                <h1>HaiMovie</h1>
                <h4>haimovie is a website that provides information about the movie and drama/tv show industry.</h4>
              </div>
              <div className={style['image-content']}>
                <img src={movie} alt="movie" />  
              </div>
            </div>
        </header>
      </>
    )
}

export default Header