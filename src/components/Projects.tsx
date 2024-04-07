import { IoLogoGithub, IoIosLink } from "react-icons/io";
import projects from "../data/projects.json";

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="min-h-screen md:px-12 pt-16 px-6 dark:text-white bg-white dark:bg-gray-900">
      <div>
        <h2 className="text-3xl font-extrabold">Projects</h2>
        <p className="mt-3">Check out some of my work which demonstrates my skills.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-14 md:mx-4 mx-1 mt-8">
        {projects.map((project, index) => (
          <article key={index} className="dark:bg-gray-800 rounded-xl shadow-effect">
            <div>
              <img className="rounded-t-xl" src={project.img} alt={`${project.title} Preview`} />
            </div>

            <div className="px-3 flex flex-col gap-2 my-3">
              <h3 className="font-semibold text-lg">{project.title}</h3>
              <p className="md:text-sm text-xs md:h-40 h-32 text-gray-600 dark:text-gray-400">
                {project.description}
              </p>
              <div className="flex gap-2 mt-0 md:mt-1">
                <span className="font-semibold text-sm">Tech Stack:</span>
                <div className="text-gray-600 flex flex-wrap dark:text-gray-400">
                  {project.techStack.map((tech, index) => (
                    <span key={index} className="text-xs mx-1">
                      {tech}{index === project.techStack.length - 1 ? "" : ","}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-around mt-3 mb-5">
              <a
                href={project.liveDeployment}
                className="underline flex items-center gap-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoIosLink size={20} aria-label="Live Preview" />
                <span className="text-sm font-semibold">Live Preview</span>
              </a>
              <a
                href={project.githubRepo}
                className="underline flex items-center gap-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoLogoGithub size={20} aria-label="View Code" />
                <span className="text-sm font-semibold">View Code</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
