import "./index.css";
import Navbar from "./components/Utilities/Navbar/page.jsx";
import "flowbite/dist/flowbite.css";
import { CarouselView } from "./components/Utilities/Carousel/page.jsx";
import AnimeList from "./components/AnimeList/page.jsx";
import MangaList from "./components/MangaList/page.jsx";
import HeaderManga from "./components/MangaList/header.jsx";
import HeaderAnime from "./components/AnimeList/header.jsx";
import MangaRecommendation from "./components/MangaRecommendation/page.jsx";
function App() {
  return (
    <>
      <Navbar />
      <CarouselView />
      <div className="mx-14 mt-10">
        <HeaderAnime/>
        <AnimeList />
      </div>
      {/* <div className="mx-14 mt-10">
        <MangaRecommendation/>
      </div> */}
      <div className="mx-14 mt-10">
        <HeaderManga/>
        <MangaList/>
      </div>
    </>
  );
}

export default App;
