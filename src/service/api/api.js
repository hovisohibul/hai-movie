import Axios from 'axios'

export const movieList = Axios.create({
    baseURL: `${import.meta.env.VITE_BASE_URL}`
})

// export const tvShowList = Axios.create({
//     baseURL: `${import.meta.env.VITE_BASE_URL}`
// })
