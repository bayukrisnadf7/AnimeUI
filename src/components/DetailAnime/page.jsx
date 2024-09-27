import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAnimeById } from "../../services/anime.service";

const AnimeDetails = () => {
  const { id } = useParams();
  const [anime, setAnime] = useState({});

  useEffect(() => {
    try {
      const data = getAnimeById(id);
      setAnime(data);
    } catch (error) {
      console.log(error);
    }
  }, [id]);
  console.log(anime.mal_id);
  return(
    <div>
      <h1>{anime.title}</h1>
      <img src={anime.images.jpg.image_url} alt={anime.title} />
    </div>
  )
};
export default AnimeDetails;
