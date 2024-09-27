"use client"
import { useState, useEffect } from "react"
import { getManga } from "../../services/manga.service"
import useSWR from "swr"
const fetcher = (url) => fetch(url).then((res) => res.json())
const MangaList = () => {
    const {data,error} = useSWR('https://api.jikan.moe/v4/top/manga?limit=7',fetcher)
    if (error) return <div>Failed to fetch users.</div>
    if (!data) return <h2>Loading...</h2>
    return (
        <div className="grid grid-cols-7">
      {data.data?.map((manga) => (
        // <Link to={`/manga/${manga.mal_id}`} key={manga.mal_id}>
          <div className="" key={manga.mal_id}>
            <img
              src={manga.images.jpg.image_url}
              width={150}
              height={150}
              className="rounded-lg max-h-52"
            />
            <p className="text-sm max-w-36 text-center mt-1 font-semibold">
              {manga.title}
            </p>
          </div>
        // </Link>
      ))}
    </div>
    )
}
export default MangaList