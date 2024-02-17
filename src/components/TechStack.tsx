import icons from "../data/icons.json";

interface TechStackProps {
  theme: string;
}

export const TechStack: React.FC<TechStackProps> = (props) => {
  
  return (
    <>
      <div
        id="techstack"
        className="min-h-screen md:px-12 pt-16 px-6 dark:text-white bg-white dark:bg-gray-900"
      >
        <div>
          <p className="text-3xl font-extrabold">My Tech Stack</p>
          <p className="mt-3">Technologies I’ve been working with recently </p>
        </div>

        <div className="mt-8 w-full ">


            <div className="grid  grid-cols-4 w-full md:grid-cols-6 justify-items-center">
            {icons.map((e) => (
            <>
              {props.theme === "dark" && e.name === "Express.js" ? (
                <div className="flex  md:w-28 my-2 w-16 flex-col justify-center items-center">
                  <img src={e.img2} alt={e.name} />
                  <p className="text-xs md:text-base ">{e.name}</p>
                </div>
              ) : (
                <div className="flex  md:w-28 my-2 w-16 flex-col justify-center items-center">
                  <img src={e.img}  alt={e.name} />
                  <p className="text-xs md:text-base ">{e.name}</p>
                </div>
              )}
            </>
          ))}
            </div>


        </div>
      </div>
    </>
  );
};
