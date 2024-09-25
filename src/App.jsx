import "./index.css";
import Navbar from "./components/Utilities/Navbar/page.jsx";
import "flowbite/dist/flowbite.css";
import { CarouselView } from "./components/Utilities/Carousel/page.jsx";
import AnimeList from "./components/AnimeList/page.jsx";
import Header from "./components/AnimeList/header.jsx";
function App() {
  return (
    <>
      <Navbar />
      <CarouselView />
      <div className="mx-20 mt-10">
        <Header/>
        <AnimeList />
      </div>
    </>
  );
}

export default App;
