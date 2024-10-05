// import { useState } from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import Navbar from "../Utilities/Navbar/page";
import { useState } from "react";
import Loading from "../../loading";

const fetcher = (url) => fetch(url).then((res) => res.json());
const AnimeDetails = () => {
  const { id } = useParams();
  const { data, error } = useSWR(
    `https://api.jikan.moe/v4/anime/${id}/full`,
    fetcher
  );
  const [expanded, setExpanded] = useState(false);
  const synopsisLength = 350;

  const toggleSysnopsis = () => {
    setExpanded(!expanded);
  };
  if (error) return <div>Failed to load</div>;
  if (!data) return <div><Loading/></div>;

  console.log(data);
  return (
    <div>
      <Navbar />
      <div className="flex mx-14 gap-10 mt-5">
        <img
          src={data.data.images.jpg.image_url}
          alt={data.data.title}
          width={250}
          height={250}
          className="rounded-lg max-h-52"
        />
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold">{data.data.title}</h1>
          <div className="flex gap-2 mt-2">
            <p>Rank: {data.data.rank}</p>
            <p>Score: {data.data.score}</p>
            <p>Episodes: {data.data.episodes}</p>
          </div>
          <p className="mt-3">
            {expanded
              ? data.data.synopsis
              : `${data.data.synopsis.slice(0, synopsisLength)}`}
            <button
              className="text-blue-500 font-semibold ml-2"
              onClick={toggleSysnopsis}
            >
              {expanded ? "Sembunyikan" : "Selanjutnya"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};
export default AnimeDetails;
