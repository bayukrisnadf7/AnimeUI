import { useEffect, useState } from "react";
import React from "react";
import { getAnime } from "../../services/anime.service";
import { Link } from "react-router-dom";

const AnimeList = () => {
  const [animeList, setAnimeList] = useState([]); // Store fetched data

  useEffect(() => {
    getAnime((data) => {
      setAnimeList(data);
    });
  }, []);
  return (
    <div className="grid grid-cols-6">
      {animeList.map((anime) => (
        // <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
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
        // </Link>
      ))}
    </div>
  );
};

export default AnimeList;
