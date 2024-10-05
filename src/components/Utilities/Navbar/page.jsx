import { Link } from "react-router-dom";
import Input from "./Input";
const Navbar = () => {
  return (
    <div className="flex justify-between h-16 items-center mx-14">
      <Link to="/">
        <h1 className="text-2xl font-bold text-primary">TopAnime</h1>
      </Link>
      <ul className="flex gap-5">
        <a className="link-navbar" href="/Anime">
          <li>Anime</li>
        </a>
        <a className="link-navbar" href="/Manga">
          <li>Manga</li>
        </a>
        <a className="link-navbar" href="/Characters">
          <li>Characters</li>
        </a>
        <a className="link-navbar" href="">
          <li>Community</li>
        </a>
      </ul>
      <Input />
    </div>
  );
};
export default Navbar;
