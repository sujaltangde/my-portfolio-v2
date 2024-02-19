import { IoLogoGithub, IoIosLink } from "react-icons/io";
import projects from "../data/projects.json";

export const Projects = () => {
  return (
    <>
      <div
        id="projects"
        className="min-h-screen md:px-12 pt-16 px-6 dark:text-white  bg-white dark:bg-gray-900"
      >
        <div>
          <p className="text-3xl font-extrabold">Projects</p>
          <p className="mt-3">Checkout some of my work which demonstrate my skills.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-14 md:mx-4 mx-1 mt-8 ">
          {projects.map((e) => (
            <div className="dark:bg-gray-800  rounded-xl shadow-effect">
              <div>
                <img className="rounded-t-xl" src={e.img} alt="" />
              </div>

              <div className="px-3 flex flex-col gap-2 my-3">
                <p className="font-semibold text-lg">{e.title}</p>
                <p className="md:text-sm text-xs md:h-40 h-32 text-gray-600 dark:text-gray-400">
                  {e.description}
                </p>
                <div className="flex gap-2  mt-0 md:mt-1">
                  <div className="font-semibold   text-sm">Tech Stack:</div>{" "}
                  <div className="text-gray-600 flex flex-wrap dark:text-gray-400">
                    {e.techStack.map((a, index) => (
                      <span key={index} className="text-xs mx-1">
                        {a}
                        {index === e.techStack.length - 1 ? "" : ","}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex justify-around mt-3 mb-5 ">
                <a
                  href={e.liveDeployment}
                  className="underline flex items-center gap-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoIosLink size={20} />{" "}
                  <span className="text-sm font-semibold">Live Preview</span>{" "}
                </a>
                <a
                  href={e.githubRepo}
                  className="underline flex items-center gap-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoLogoGithub size={20} />{" "}
                  <span className="text-sm font-semibold">View Code</span>{" "}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
