export const About = () => {
  return (
    <>
      <div
        id="about"
        className="min-h-screen md:px-12 pt-16 px-6 dark:text-white bg-white dark:bg-gray-900"
      >
        <div>
          <div>
          <p className="text-3xl font-extrabold">About Me</p>
          <p className="mt-3">
            My name is Sujal Tangde, and I'm a full-stack developer. I have an
            strong passion for coding and building high-quality web
            applications. I am constantly seeking opportunities to grow
            professionally and contribute my skills to good projects and
            organizations.
          </p>
          </div>

          <div className="md:mt-8 mt-5">
          <p className="text-2xl font-bold">Work Experience</p>

          <div className="md:w-1/3 border-b pt-3 md:pb-5 pb-3">
            <div className="flex justify-between ">
            <span className="md:text-lg font-medium">Software Development Intern</span>
            <p className="text-xs  bg-green-300 md:px-6 md:w-auto w-1/4 md:h-auto h-6 font-bold rounded-md text-green-700 text-center md:pt-1.5 pt-1">Full Time</p>
            </div>
            <div className="md:text-sm text-xs flex md:flex-row justify-between flex-col mt-2 md:gap-4 gap-1 ">
              <span>Rean WaterTech pvt ltd</span>
              <span>Remote</span>
              <span>Oct 2023 - Jan 2024</span>
            </div>
          </div>

          <div className="md:mt-8 mt-5">
          <p className="text-2xl font-bold">Education</p>
          <div className="md:w-1/3 border-b pt-3 md:pb-5 pb-3">
            <div className="flex justify-between ">
            <span className="md:text-lg font-medium">Bachelor of Computer Application</span>
            <p className="text-xs  bg-green-300 md:px-6 md:w-auto w-1/4 md:h-auto h-6 font-bold rounded-md text-green-700 text-center md:pt-1.5 pt-1">Full Time</p>
            </div>
            <div className="md:text-sm text-xs flex md:flex-row justify-between flex-col mt-2 md:gap-4 gap-1 ">
              <span>City Premier College, Nagpur</span>
          
              <span>Jun 2021 - Jun 2024</span>
            </div>
          </div>

          </div>

          </div>
        </div>
      </div>
    </>
  );
};
