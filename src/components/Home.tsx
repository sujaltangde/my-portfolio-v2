import { FaExternalLinkAlt } from "react-icons/fa";

export const Home: React.FC = () => {
  return (
    <section id="home" className="min-h-screen dark:text-white bg-white dark:bg-gray-900">
      <div className="flex sm:flex-row flex-col items-center justify-center sm:pb-32 pb-12 sm:pt-0 pt-12">
        <div className="sm:w-1/2 h-96 sm:hidden flex justify-center items-center">
          <div className="mx-auto flex min-h-screen max-w-screen-sm items-center justify-center">
            <div className="blob"></div>
          </div>
        </div>

        <div className="sm:w-1/2 flex flex-col sm:pl-44 w-full px-6 sm:gap-2 font-bold sm:pt-12 text-3xl sm:text-5xl text-gray-900 dark:text-white">
          <div className="flex gap-2 items-left justify-start">Hi <span className="flex"><img src="/images/handIcon.png" className="sm:h-12 h-8" alt="" />,</span> </div>
          <p>My name is</p>
          <p className="bg-clip-text bg-gradient-to-r sm:pb-1 text-transparent from-blue-500 to-red-500">
            Sujal Tangde{" "}
          </p>
          <p>I build things for web.</p>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://drive.google.com/file/d/1e1oVMN_0YsP8Wql17LsHGZ64Jdndtpb_/view"
            className="sm:text-lg mt-2 w-2/5 sm:w-1/3 text-white text-base sm:px-8 px-6 py-1 rounded-md font-medium bg-blue-700"
          >
            <div className="flex justify-center items-center gap-1">
              <FaExternalLinkAlt size={12} />
              <span>Resume</span>
            </div>
          </a>
        </div>

        <div className="sm:w-1/2 sm:flex hidden justify-center items-center">
          <div className="mx-auto flex min-h-screen max-w-screen-sm items-center justify-center">
            <div className="blob"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
