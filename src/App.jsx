import "./index.css";
import Navbar from "./components/Utilities/Navbar/page.jsx";
import "flowbite/dist/flowbite.css";
import { CarouselView } from "./components/Utilities/Carousel/page.jsx";
import AnimeList from "./components/AnimeList/page.jsx";
import MangaList from "./components/MangaList/page.jsx";
import HeaderManga from "./components/MangaList/header.jsx";
import HeaderAnime from "./components/AnimeList/header.jsx";
import SeasonNow from "./components/Season/page.jsx";
import HeaderSeason from "./components/Season/header.jsx";
function App() {
  return (
    <>
      <Navbar />
      <CarouselView />
      <div className="md:mx-14 mx-3 mt-10">
        <HeaderAnime/>
        <AnimeList />
      </div>
      <div className="mt-10 p-5 bg-slate-200">
        <HeaderSeason/>
        <SeasonNow/>
      </div>
      <div className="md:mx-14 mx-3 mt-10">
        <HeaderManga/>
        <MangaList/>
      </div>
      <div className="mt-10 p-5 bg-slate-200">
        <HeaderSeason/>
        <SeasonNow/>
      </div>
    </>
  );
}

export default App;
