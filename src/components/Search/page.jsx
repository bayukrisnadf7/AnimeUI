import { Link, useParams } from "react-router-dom";
import useSWR from "swr";
import Navbar from "../Utilities/Navbar/page";
import Loading from "../../loading";

const fetcher = (url) => fetch(url).then((res) => res.json());

const Search = () => {
  const { keyword } = useParams();
  const { data, error } = useSWR(
    `https://api.jikan.moe/v4/anime?q=${keyword}`,
    fetcher
  );

  if (error) return <div>Failed to load</div>;
  if (!data)
    return (
      <div>
        <Loading />
      </div>
    );


  //   if (!anime) return <div>No results found for "{keyword}"</div>;

  return (
    <>
      <Navbar />
      <div className="flex flex-wrap justify-center mt-5 gap-5">
        {data.data?.map((animelist) => (
          <div key={animelist.mal_id} className="flex justify-center">
            <Link to={`/anime/${animelist.mal_id}`} key={animelist.mal_id}>
              <img
                src={animelist.images.jpg.image_url}
                width={150}
                height={150}
                className="img rounded-lg max-h-52"
              />
              <p className="text-sm md:max-w-36 max-w-28 text-center mt-1 font-semibold">
                {animelist.title}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Search;
