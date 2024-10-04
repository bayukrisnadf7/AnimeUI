// import React from "react";
import { Link } from "react-router-dom";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());
const AnimeList = () => {
  const {data, error} = useSWR('https://api.jikan.moe/v4/anime?limit=7',fetcher);
  if (error) return <div>Failed to fetch users.</div>;
  if (!data) return <h2>Loading...</h2>;
  return (
    <div className="grid md:grid-cols-7 grid-cols-2 mt-5 gap-3">
      {data.data?.map((anime) => (
        <div key={anime.mal_id} className="flex justify-center"> 
            <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
            <img
              src={anime.images.jpg.image_url}
              width={150}
              height={150}
              className="img rounded-lg max-h-52"
            />
            <p className="text-sm md:max-w-36 max-w-28 text-center mt-1 font-semibold">
              {anime.title}
            </p>
        </Link>
        </div>
        
      ))}
    </div>
  );
};

export default AnimeList;
