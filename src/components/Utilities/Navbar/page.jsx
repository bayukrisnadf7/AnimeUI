import Input from "./Input";
const Navbar = () => {
  return (
    <div className="flex justify-between h-16 items-center mx-14">
      <h1 className="text-2xl font-bold text-primary">TopAnime</h1>
      <ul className="flex gap-5">
        <a className="link-navbar" href="/">
          <li>Anime</li>
        </a>
        <a className="link-navbar" href="">
          <li>Manga</li>
        </a>
        <a className="link-navbar" href="">
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
