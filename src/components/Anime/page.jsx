import useSWR from "swr";
import Loading from "../../loading";
import { Link } from "react-router-dom";
import Navbar from "../Utilities/Navbar/page";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const fetcher = (url) => fetch(url).then((res) => res.json());

const Anime = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialPage = parseInt(searchParams.get("page")) || 1; // Ambil halaman dari URL
  const [page, setPage] = useState(initialPage); // State untuk halaman

  const { data, error } = useSWR(
    `https://api.jikan.moe/v4/anime?page=${page}`,
    fetcher
  );

  // Update URL setiap kali `page` berubah
  useEffect(() => {
    setSearchParams({ page });
  }, [page, setSearchParams]);

  if (!data) return <Loading />;
  if (error) return <div>Failed to load</div>;

  // Fungsi untuk berpindah halaman
  const handlePrevious = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNext = () => {
    if (data.pagination.has_next_page) setPage(page + 1);
  };

  return (
    <>
      <Navbar />
      <div className="grid grid-cols-8 mt-5 mx-12">
        {data.data?.map((anime) => (
          <div key={anime.mal_id} className="flex justify-center">
            <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
              <img
                src={anime.images.jpg.image_url}
                width={150}
                height={150}
                className="img rounded-lg max-h-48"
              />
              <p className="text-sm md:max-w-36 max-w-28 text-center mt-1 font-semibold">
                {anime.title}
              </p>
            </Link>
          </div>
        ))}
      </div>

      {/* Pagination Buttons */}
      <div className="flex justify-center items-center my-8 gap-3">
        <button
          onClick={handlePrevious}
          disabled={page === 1}
          className={`px-4 py-2 bg-gray-300 rounded-md${
            page === 1 && "opacity-50 cursor-not-allowed"
          }`}
        >
          Previous
        </button>
        <p>Page {page}</p>
        <button
          onClick={handleNext}
          disabled={!data.pagination.has_next_page}
          className={`px-4 py-2 bg-primary w-24 rounded-md ${
            !data.pagination.has_next_page && "opacity-50 cursor-not-allowed"
          }`}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Anime;
