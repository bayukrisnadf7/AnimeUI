import ReactDOM from 'react-dom/client'
import React from 'react'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AnimeDetails from './components/DetailAnime/page.jsx'
import Anime from './components/Anime/page.jsx'
import Manga from './components/Manga/page.jsx'
import Characters from './components/Characters/page.jsx'
import Search from './components/Search/page.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: "/anime/:id",
    element: <AnimeDetails />
  },
  {
    path: "/Anime",
    element: <Anime/>
  },
  {
    path: "/Manga",
    element: <Manga/>
  },
  {
    path: "/Characters",
    element: <Characters/>
  },
  {
    path: "search/:keyword",
    element: <Search/>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
)
