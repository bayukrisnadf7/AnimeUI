import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoLogoDiscord } from "react-icons/io5";
const Footer = () => {
  return (
    <div className="bg-slate-100 p-10 mt-10">
      <div className="flex justify-between mx-20">
        <div className="flex flex-col text-xl gap-3">
          <p><b>Top-Anime</b> run by fans, for fans</p>
          <button className="p-1 max-w-48 rounded-xl text-white bg-secondary">Support Us</button>
          <p>Learn about more ways to support Top-Anime</p>
        </div>
        <div className="flex gap-5">
          <FaFacebookSquare size={40} className="text-primary" />
          <FaTwitterSquare size={40} className="text-primary" />
          <FaSquareInstagram size={40} className="text-primary" />
          <IoLogoDiscord size={40} className="text-primary"/>
        </div>
        <div>
            <ul className="flex flex-col gap-3  ">
                <li className="hover:text-primary cursor-pointer">
                    Contact
                </li>
                <li className="hover:text-primary cursor-pointer">
                    About
                </li>
                <li className="hover:text-primary cursor-pointer">
                    Terms of Use
                </li>
                <li className="hover:text-primary cursor-pointer">
                    Privacy Policy
                </li>
            </ul>
        </div>
      </div>
    </div>
  );
};
export default Footer;
