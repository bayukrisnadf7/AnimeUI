import { useParams } from "react-router-dom";
import useSWR from "swr";
import Navbar from "../Utilities/Navbar/page";
import { useState } from "react";
import Loading from "../../loading";
import { IoIosStar } from "react-icons/io";

const fetcher = (url) => fetch(url).then((res) => res.json());

const AnimeDetails = () => {
  const { id } = useParams();
  const { data, error } = useSWR(
    `https://api.jikan.moe/v4/anime/${id}/full`,
    fetcher
  );
  const { data: videoData, error: videoError } = useSWR(
    `https://api.jikan.moe/v4/anime/${id}/videos/episodes`,
    fetcher
  );
  const [expanded, setExpanded] = useState(false);
  const synopsisLength = 350;

  const toggleSysnopsis = () => {
    setExpanded(!expanded);
  };

  if (error) return <div>Failed to load</div>;
  if (!data) return <div><Loading /></div>;

  console.log(data);
  console.log(videoData); // Log videoData to check structure

  return (
    <div>
      <Navbar />
      <div className="flex mx-14 gap-10 mt-5">
        <img
          src={data.data.images.jpg.image_url}
          alt={data.data.title}
          width={350}
          height={350}
          className="rounded-lg max-h-72"
        />
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold">{data.data.title}</h1>
          <p className="mx-1 mt-1"> {data.data.rating}</p>
          <div className="flex gap-2 mt-2 items-center">
            <div className="flex items-center gap-1">
              <IoIosStar size={25} className="text-yellow-300" />
              <IoIosStar size={25} className="text-yellow-300" />
              <IoIosStar size={25} className="text-yellow-300" />
              <IoIosStar size={25} className="text-yellow-300" />
              <IoIosStar size={25} className="text-yellow-300" />
              <p>|</p>
              <p>Score: {data.data.score}</p>
            </div>
          </div>
          <p className="mt-1">
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

      {/* Handle Video Data */}
      <div>
        {videoError && <div>Failed to load videos</div>}
        {!videoData && <div><Loading /></div>}
        {videoData && (
          <div className="flex flex-col gap-5">
            {videoData.data?.map((videoEpisode) => (
              <div key={videoEpisode.mal_id}>
                <p>Episode {videoEpisode.episode}</p>
                <p>{videoEpisode.title}</p>
                <p><a href={videoEpisode.url} target="_blank" rel="noopener noreferrer">Watch</a></p>
                {videoEpisode.image_url && (
                  <img
                    src={videoEpisode.image_url}
                    alt={`Thumbnail for episode ${videoEpisode.episode}`}
                    width={250}
                    height={150}
                    className="rounded-md"
                  />
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AnimeDetails;
