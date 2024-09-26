import { useState } from "react";
import { Link } from "react-scroll";
import { FaXTwitter } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { HiBars3 } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";

interface NavbarProps {
  handleThemeSwitch: () => void;
  theme: string;
}

export const Navbar: React.FC<NavbarProps> = (props) => {
  const [tog, setTog] = useState(false);

  return (
    <nav className="md:py-4 pt-3 pb-2 flex z-20 fixed w-full justify-between bg-white dark:bg-gray-900">
      <div className="dark:text-white text-xl font-semibold pl-3 md:pl-6">{`{Sujal}`}</div>

      <ul className=" sm:flex hidden  gap-16 ">
        <Link
          className="text-lg cursor-pointer  dark:text-white"
          spy={true}
          smooth={true}
          offset={-100}
          duration={300}
          to="home"
        >
          Home
        </Link>
        <Link
          className="text-lg cursor-pointer dark:text-white"
          spy={true}
          smooth={true}
          offset={0}
          duration={300}
          to="about"
        >
          About
        </Link>
        <Link
          className="text-lg cursor-pointer dark:text-white"
          spy={true}
          smooth={true}
          offset={0}
          duration={300}
          to="techstack"
        >
          Tech Stack
        </Link>
        <Link
          className="text-lg cursor-pointer dark:text-white"
          spy={true}
          smooth={true}
          offset={0}
          duration={300}
          to="projects"
        >
          Projects
        </Link>
        <Link
          className="text-lg cursor-pointer dark:text-white"
          spy={true}
          smooth={true}
          offset={0}
          duration={300}
          to="contact"
        >
          Contact
        </Link>

        <div className="flex gap-5 items-center justify-center pr-5">
          <a
            href="https://github.com/sujaltangde"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiGithub
              size={23}
              className="text-gray-500 dark:text-gray-200"
              aria-label="Github"
            />
          </a>

          <a
            href="https://twitter.com/SujalTangde"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter
              size={23}
              className="text-gray-500 dark:text-gray-200"
              aria-label="Twitter"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/sujal-tangde"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn
              size={23}
              className="text-gray-500 dark:text-gray-200"
              aria-label="LinkedIn"
            />
          </a>

          <button
            onClick={props.handleThemeSwitch}
            className="flex items-center ml-4 justify-center "
            aria-label="Toggle theme"
          >
            {props.theme === "dark" ? (
              <MdOutlineDarkMode className="dark:text-gray-200" size={24} />
            ) : (
              <MdOutlineLightMode size={24} />
            )}
          </button>
        </div>
      </ul>

      <div className="md:hidden  flex gap-3 justify-center items-center ">
        <div className="flex">
          <div className="flex items-center justify-center gap-4 mr-3">
            {" "}
            <a
              href="https://github.com/sujaltangde"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiGithub
                size={20}
                className="text-gray-500 dark:text-gray-200"
                aria-label="Github"
              />
            </a>
            <a
              href="https://twitter.com/SujalTangde"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter
                size={20}
                className="text-gray-500 dark:text-gray-200"
                aria-label="Twitter"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/sujal-tangde"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn
                size={20}
                className="text-gray-500 dark:text-gray-200"
                aria-label="LinkedIn"
              />
            </a>
          </div>

          <button
            onClick={props.handleThemeSwitch}
            className="flex items-center ml-4 justify-center "
            aria-label="Toggle theme"
          >
            {props.theme === "dark" ? (
              <MdOutlineDarkMode className="dark:text-gray-200" size={25} />
            ) : (
              <MdOutlineLightMode size={24} />
            )}
          </button>
        </div>
        <div className="flex items-center pr-4">
          {tog ? (
            <button onClick={() => setTog(!tog)} aria-label="Close menu">
              <RxCross2 className="dark:text-gray-200" size={24} />
            </button>
          ) : (
            <button onClick={() => setTog(!tog)} aria-label="Open menu">
              <HiBars3 className="dark:text-gray-200" size={24} />
            </button>
          )}
        </div>
      </div>
    
      <div
        className={`md:hidden ${tog ? "flex" : "hidden"} mt-8 w-full z-20 fixed`}
      >
        <div className="flex bg-white dark:bg-gray-900 pt-3 flex-col px-4 gap-3 border-b border-gray-700 pb-2 w-full">
          <Link
            className="text-lg underline cursor-pointer dark:text-white"
            spy={true}
            smooth={true}
            offset={0}
            duration={300}
            to="home"
            onClick={()=>setTog(!tog)}
          >
            Home
          </Link>
          <Link
            className="text-lg underline cursor-pointer dark:text-white"
            spy={true}
            smooth={true}
            offset={0}
            duration={300}
            to="about"
            onClick={()=>setTog(!tog)}
          >
            About
          </Link>
          <Link
            className="text-lg underline cursor-pointer dark:text-white"
            spy={true}
            smooth={true}
            offset={0}
            duration={300}
            to="techstack"
            onClick={()=>setTog(!tog)}
          >
            Tech Stack
          </Link>
          <Link
            className="text-lg underline cursor-pointer dark:text-white"
            spy={true}
            smooth={true}
            offset={0}
            duration={300}
            to="projects"
            onClick={()=>setTog(!tog)}
          >
            Projects
          </Link>
          <Link
            className="text-lg underline cursor-pointer dark:text-white"
            spy={true}
            smooth={true}
            offset={0}
            duration={300}
            to="contact"
            onClick={()=>setTog(!tog)}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};
