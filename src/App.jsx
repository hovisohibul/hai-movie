import Home from "./page/Home"
import DetailMovie from "./page/DetailMovie"
import './App.css'
import {Outlet, RouterProvider, createBrowserRouter} from 'react-router-dom'
import Popular from "./page/Popular"
import TopRated from "./page/TopRated"
import DetailTop from "./page/DetailTop"
import DetailPopular from "./page/DetailPopular"
import UpComing from "./page/UpComing"
import DetailComing from "./page/DetailComing"

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      children: [
        {
          index: true,
          element: <Home/>
        },
        {
          path: 'popular',
          element: <Popular/>
        },
        {
          path: 'top-rated',
          element: <TopRated/>
        },
        {
          path: 'upcoming',
          element: <UpComing/>
        },
        {
          path: 'detail-movie/:id',
          element: <DetailMovie/>
        },
        {
          path: 'detail-popular/:id',
          element: <DetailPopular/>
        },
        {
          path: 'detail-top/:id',
          element: <DetailTop/>
        },
        {
          path: 'detail-coming/:id',
          element: <DetailComing/>
        }        
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router}/>
      <Outlet/>
    </>
  )
}

export default App
