import { useState } from "react";
import { Link } from "react-scroll";
import { FaXTwitter } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { HiBars3 } from "react-icons/hi2";

interface NavbarProps {
  handleThemeSwitch: () => void;
  theme: string;
}



export const Navbar: React.FC<NavbarProps> = (props) => {

    const [tog, setTog] = useState(false) ;

  return (
    <>
      <div className=" px-8 py-4 flex z-20 fixed w-full justify-between dark:bg-gray-900">
        <div className="dark:text-white text-xl font-semibold ">{`{Sujal}`}</div>

        <ul className="hidden md:flex gap-16 ">
          <Link
            className="text-lg dark:text-white"
            spy={true}
            smooth={true}
            offset={0}
            duration={300}
            to="home"
          >
            Home
          </Link>
          <Link
            className="text-lg dark:text-white"
            spy={true}
            smooth={true}
            offset={0}
            duration={300}
            to="about"
          >
            About
          </Link>
          <Link
            className="text-lg dark:text-white"
            spy={true}
            smooth={true}
            offset={0}
            duration={300}
            to="techStack"
          >
            Tech Stack
          </Link>
          <Link
            className="text-lg dark:text-white"
            spy={true}
            smooth={true}
            offset={0}
            duration={300}
            to="projects"
          >
            Projects
          </Link>
          <Link
            className="text-lg dark:text-white"
            spy={true}
            smooth={true}
            offset={0}
            duration={300}
            to="contact"
          >
            Contact
          </Link>

          <div className="flex gap-5 items-center justify-center">
            <FiGithub size={23} className="text-gray-500 dark:text-gray-200" />
            <FaXTwitter
              size={23}
              className="text-gray-500 dark:text-gray-200"
            />
            <FaLinkedinIn
              size={23}
              className="text-gray-500 dark:text-gray-200"
            />

            <button
              onClick={props.handleThemeSwitch}
              className="flex items-center ml-4 justify-center "
            >
              {props.theme === "dark" ? (
                <MdOutlineDarkMode className="dark:text-gray-200" size={24} />
              ) : (
                <MdOutlineLightMode size={24} />
              )}
            </button>
          </div>
        </ul>

        <div className="md:hidden flex gap-3 justify-center items-center ">
          <div>
            <button
              onClick={props.handleThemeSwitch}
              className="flex items-center ml-4 justify-center "
            >
              {props.theme === "dark" ? (
                <MdOutlineDarkMode className="dark:text-gray-200" size={24} />
              ) : (
                <MdOutlineLightMode size={24} />
              )}
            </button>
          </div>
          <div className="flex items-center">
                
                <button onClick={()=>setTog(!tog)}><HiBars3 className="dark:text-gray-200" size={24}/></button>

          </div>
        </div>
      </div>
      <div className={`md:hidden ${tog ? "flex" : "hidden"} pt-14 dark:bg-gray-900`}>
        <div className="flex flex-col px-8 gap-3 border-b pb-2 w-full">
          <Link
            className="text-lg dark:text-white"
            spy={true}
            smooth={true}
            offset={0}
            duration={300}
            to="home"
          >
            Home
          </Link>
          <Link
            className="text-lg dark:text-white"
            spy={true}
            smooth={true}
            offset={0}
            duration={300}
            to="about"
          >
            About
          </Link>
          <Link
            className="text-lg dark:text-white"
            spy={true}
            smooth={true}
            offset={0}
            duration={300}
            to="techStack"
          >
            Tech Stack
          </Link>
          <Link
            className="text-lg dark:text-white"
            spy={true}
            smooth={true}
            offset={0}
            duration={300}
            to="projects"
          >
            Projects
          </Link>
          <Link
            className="text-lg dark:text-white"
            spy={true}
            smooth={true}
            offset={0}
            duration={300}
            to="contact"
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  );
};
