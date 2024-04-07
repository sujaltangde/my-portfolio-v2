import icons from "../data/icons.json";

interface TechStackProps {
  theme: string;
}

export const TechStack: React.FC<TechStackProps> = (props) => {
  
  return (
    <section id="techstack" className="min-h-screen md:px-12 pt-16 px-6 dark:text-white bg-white dark:bg-gray-900">
      <div>
        <h2 className="text-3xl font-extrabold">My Tech Stack</h2>
        <p className="mt-3">Technologies I’ve been working with recently</p>
      </div>

      <div className="mt-8 w-full">
        <div className="grid grid-cols-4 md:grid-cols-6 justify-items-center">
          {icons.map((icon, index) => (
            <div key={index} className="flex md:w-28 my-2 w-16 flex-col justify-center items-center">
              <img src={props.theme === "dark" && icon.name === "Express.js" ? icon.img2 : icon.img} alt={icon.name} />
              <p className="text-xs md:text-base">{icon.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
