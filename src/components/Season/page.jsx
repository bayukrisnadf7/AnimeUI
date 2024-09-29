import React from "react";
import { Link } from "react-router-dom";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());
const SeasonNow = () => {
  const {data, error} = useSWR('https://api.jikan.moe/v4/seasons/now?limit=7',fetcher);
  if (error) return <div>Failed to fetch users.</div>;
  if (!data) return <h2>Loading...</h2>;
  console.log(data);
  return (
    <div className="grid grid-cols-7 mx-9">
      {data.data?.map((manga) => (
        <Link to={`/manga/${manga.mal_id}`} key={manga.mal_id}>
          <div className="">
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
        </Link>
      ))}
    </div>
  );
};

export default SeasonNow;
