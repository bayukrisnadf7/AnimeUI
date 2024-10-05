import useSWR from "swr";
import Loading from "../../loading";
import { Link } from "react-router-dom";
import Navbar from "../Utilities/Navbar/page";
const fetcher = (url) => fetch(url).then((res) => res.json());
const Manga = () => {
  const {data, error} = useSWR("https://api.jikan.moe/v4/manga", fetcher);
  if (!data) return <Loading />;
  if (error) return <div>Failed to load</div>;
  return (
    <>
    <Navbar/>
    <div className="flex flex-wrap justify-center mt-5 gap-5">
      {data.data?.map((manga) => (
        <div key={manga.mal_id} className="flex justify-center">
          <Link to={`/manga/${manga.mal_id}`} key={manga.mal_id}>
            <img
              src={manga.images.jpg.image_url}
              width={150}
              height={150}
              className="img rounded-lg max-h-52"
            />
            <p className="text-sm md:max-w-36 max-w-28 text-center mt-1 font-semibold">
              {manga.title}
            </p>
          </Link>
        </div>
      ))}
    </div>
    </>
    
  );
};
export default Manga;
