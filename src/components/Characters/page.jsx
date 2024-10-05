import useSWR from "swr";
import Loading from "../../loading";
import { Link } from "react-router-dom";
import Navbar from "../Utilities/Navbar/page";
const fetcher = (url) => fetch(url).then((res) => res.json());
const Characters = () => {
  const {data, error} = useSWR("https://api.jikan.moe/v4/characters", fetcher);
  if (!data) return <Loading />;
  if (error) return <div>Failed to load</div>;
  return (
    <>
    <Navbar/>
    <div className="flex flex-wrap justify-center mt-5 gap-5">
      {data.data?.map((characters) => (
        <div key={characters.mal_id} className="flex justify-center">
          <Link to={`/characters/${characters.mal_id}`} key={characters.mal_id}>
            <img
              src={characters.images.jpg.image_url}
              width={150}
              height={150}
              className="img rounded-lg max-h-52"
            />
            <p className="text-sm md:max-w-36 max-w-28 text-center mt-1 font-semibold">
              {characters.title}
            </p>
          </Link>
        </div>
      ))}
    </div>
    </>
    
  );
};
export default Characters;
