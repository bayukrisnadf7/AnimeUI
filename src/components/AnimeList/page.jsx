import React from "react";
import { Link } from "react-router-dom";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());
const AnimeList = () => {
  const {data, error} = useSWR('https://api.jikan.moe/v4/anime?limit=7',fetcher);
  if (error) return <div>Failed to fetch users.</div>;
  if (!data) return <h2>Loading...</h2>;
  return (
    <div className="grid grid-cols-7">
      {data.data?.map((anime) => (
        <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
          <div className="">
            <img
              src={anime.images.jpg.image_url}
              width={150}
              height={150}
              className="rounded-lg max-h-52"
            />
            <p className="text-sm max-w-36 text-center mt-1 font-semibold">
              {anime.title}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default AnimeList;
