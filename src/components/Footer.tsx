import { FaXTwitter } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-scroll";

export const Footer = () => {
  return (
    <>
      <div className="pt-4  dark:text-white bg-white dark:bg-gray-900">
        <div className="flex md:flex-row flex-col justify-between py-6  border-b border-gray-400 mx-6">
          <div className="dark:text-white text-xl font-semibold">{`{Sujal}`}</div>

          <div className="flex md:flex-row flex-col gap-3 md:gap-8 md:pt-0 pt-3  ">
            <a className="md:text-base text-sm " href="tel:+917020197537" type="tel">
              +91 7020197537
            </a>

            <a className="md:text-base text-sm " href="mailto:sujaltagade01@gmail.com" type="mail">
              sujaltagade01@gmail.com
            </a>

            <div className="flex md:gap-3 gap-5 md:pt-0  pt-2 ">
              <a
                href="https://github.com/sujaltangde"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiGithub
                  size={20}
                  className="text-gray-500 dark:text-gray-200"
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
                />
              </a>
            </div>
          </div>
        </div>

        <div className="flex md:flex-row flex-col  justify-between px-6 md:py-8 py-6">
        
            <div className="md:flex hidden  md:text-base text-sm md:gap-10 gap-3  ">
              <Link
                className=" cursor-pointer  dark:text-white"
                spy={true}
                smooth={true}
                offset={-100}
                duration={300}
                to="home"
              >
                Home
              </Link>
              <Link
                className=" cursor-pointer dark:text-white"
                spy={true}
                smooth={true}
                offset={0}
                duration={300}
                to="about"
              >
                About
              </Link>
              <Link
                className=" cursor-pointer dark:text-white"
                spy={true}
                smooth={true}
                offset={0}
                duration={300}
                to="techstack"
              >
                Tech Stack
              </Link>
              <Link
                className=" cursor-pointer dark:text-white"
                spy={true}
                smooth={true}
                offset={0}
                duration={300}
                to="projects"
              >
                Projects
              </Link>
              <Link
                className=" cursor-pointer dark:text-white"
                spy={true}
                smooth={true}
                offset={0}
                duration={300}
                to="contact"
              >
                Contact
              </Link>
            </div>
        

          <div className="md:pt-0 pt-2 md:text-base text-xs">
            <p>Designed and built by Sujal Tangde with ❤️ & ☕.</p>
          </div>
        </div>
      </div>
    </>
  );
};
