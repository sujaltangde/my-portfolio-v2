import { FaExternalLinkAlt } from "react-icons/fa";

export const Home = () => {
  return (
    <>
      <div
        id="home"
        className="min-h-screen dark:text-white bg-white dark:bg-gray-900"
      >
        <div className="flex md:flex-row flex-col items-center justify-center md:pb-32 pb-12 md:pt-0 pt-12">
          <div className="md:w-1/2 h-96 md:hidden flex justify-center items-center ">
            <div className="mx-auto flex min-h-screen max-w-screen-sm items-center justify-center">
              <div className="blob "> </div>
            </div>
          </div>

          <div className="md:w-1/2 flex flex-col md:pl-44 w-full px-6 md:gap-2 font-bold md:pt-12 text-3xl md:text-5xl text-gray-900 dark:text-white">
            <p>Hi👋,</p>
            <p>My name is</p>
            <p className="bg-clip-text bg-gradient-to-r md:pb-1 text-transparent from-blue-500  to-red-600 ">
              Sujal Tangde{" "}
            </p>
            <p>I build things for web.</p>
            <div className="">
              <button className="md:text-lg text-white text-base px-8 py-1 rounded-md font-medium bg-blue-700">
              <a href="google.com"  target="_blank"
                rel="noopener noreferrer" className="flex justify-center items-center gap-1">
                <FaExternalLinkAlt size={12} />
                <span className=" ">Resume</span>
              </a>
              </button>
            </div>
          </div>

          <div className="md:w-1/2 md:flex hidden justify-center items-center ">
            <div className="mx-auto flex min-h-screen max-w-screen-sm items-center justify-center">
              <div className="blob "> </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
