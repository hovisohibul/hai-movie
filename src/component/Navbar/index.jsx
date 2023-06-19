import React from 'react'
import { useNavigate } from 'react-router-dom'

function Navbar() {

    const navigate = useNavigate()

    const toHome = () => {
        navigate('/')
    }

    const toPopular = () => {
        navigate('/popular')
    }

    const toRated = () => {
        navigate('/top-rated')
    }

    const toUpComing = () => {
        navigate('/upcoming')
    }

  return (
    <>
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand text-white fw-bold fs-2" onClick={() => toHome()} role='button'>HaiMovie</a>
                <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">                    
                        <li className="nav-item" role='button' onClick={() => toPopular()}>
                            <a className="nav-link text-white fw-bold fs-5">Popular</a>
                        </li>
                        <li className="nav-item dropdown" role='button' onClick={() => toRated()}>
                            <a className="nav-link text-white fw-bold fs-5">Top Rated</a>
                        </li>
                        <li className="nav-item dropdown" role='button' onClick={() => toUpComing()}>
                            <a className="nav-link text-white fw-bold fs-5">Up Coming</a>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar