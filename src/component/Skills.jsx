import SectionHeading from "./common/SectionHeading";
import { FaBootstrap, FaCss3, FaHtml5, FaJs, FaNodeJs, FaNpm, FaReact } from "react-icons/fa";
import { SiExpress, SiFirebase, SiJsonwebtokens, SiMongodb, SiTailwindcss } from "react-icons/si";

const Skills = () => {
  const Skills = [
    {
      id: 1,
      name: "Html5",
      icon: <FaHtml5 />,
    },
    {
      id: 2,
      name: "CSS 3",
      icon: <FaCss3 />,
    },
    {
      id: 3,
      name: "Bootstrap",
      icon: <FaBootstrap />,
    },
    {
      id: 4,
      name: "Tailwind CSS",
      icon: <SiTailwindcss />,
    },
    {
      id: 5,
      name: "Java Script",
      icon: <FaJs />,
    },
    {
      id: 6,
      name: "NPM",
      icon: <FaNpm />,
    },
    {
      id: 7,
      name: "Node JS",
      icon:<FaNodeJs /> ,
    },
    {
      id: 8,
      name: "Express",
      icon: <SiExpress />,
    },
    {
      id: 9,
      name: "React",
      icon: <FaReact />,
    },
    {
      id: 10,
      name: "MongoDB",
      icon: <SiMongodb />,
    },
    {
      id: 11,
      name: "JWT",
      icon: <SiJsonwebtokens />,
    },
    {
      id: 12,
      name: "Firebase",
      icon: <SiFirebase />,
    },
    
  ];
  return (
    <div id="skills">
      <SectionHeading
        title={"< SKILLS />"}
        subtitle={
          "Skills are the expertise or talent needed in order to do a job or task."
        }
      />
      <div className="grid  grid-cols-3 lg:grid-cols-4 gap-4 mx-auto lg:w-3/5">
        {Skills.map(({ id, name, icon }) => (
          <div
            key={id}
            className="card bg-base-300 rounded-xl shadow-md hover:rotate-y-180 transform transition-all duration-500" data-aos="flip-up"
          >
            <div className="card-body justify-center items-center p-8">
              <h2 className="card-title text-4xl lg:text-7xl">{icon}</h2>
              <div className="card-text opacity-0 rounded-xl absolute inset-0 flex justify-center items-center transition-opacity duration-300 hover:opacity-100 bg-gray-700 text-white text-xl font-semibold">
                <p className="text-center">{name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
