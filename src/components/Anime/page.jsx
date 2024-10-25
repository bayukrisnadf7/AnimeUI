import useSWR from "swr";
import Loading from "../../loading";
import { Link } from "react-router-dom";
import Navbar from "../Utilities/Navbar/page";
const fetcher = (url) => fetch(url).then((res) => res.json());
const Anime = () => {
  const {data, error} = useSWR(`https://api.jikan.moe/v4/anime`, fetcher);
  // const [page, setPage] = useState(1);
  if (!data) return <Loading />;
  if (error) return <div>Failed to load</div>;
  return (
    <>
    <Navbar/>
    <div className="flex flex-wrap justify-center mt-5 gap-5">
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
    {/* <Pagination page={page} lastPage={data.pagination?.last_visible_page} setPage={setPage} /> */}
    </>
    
  );
};
export default Anime;
