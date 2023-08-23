import SectionHeading from "./common/SectionHeading";
import profile from '../assets/Sazzad-rounded-800x800.png'

const About = () => {
  return (
    <div id="about">
      <SectionHeading title={"< ABOUT ME />"} subtitle={""} />
      <div>
        <div className="flex justify-center items-center gap-10 mx-auto flex-col lg:flex-row">
          <img
            src={profile}
            className=" md:max-w-sm rounded-full shadow-2xl" data-aos="fade-right"
          />
          <div className=" md:border-s-4 md:border-red-700 md:ps-5 py-16" data-aos="fade-left">
            <h1 className=" text-xl md:text-4xl font-bold">I Can Design Anything You Want!</h1>
            <p className="py-6">
            I am a self-driven, ambitious, and enthusiastic front‑end developer. I have worked on several web development projects using HTML, CSS, JavaScript, React JS, and Node JS. I am very interested to work as a Frontend developer and I love to do it. The possibilities offered by the industry are endless and this motivates me to keep learning new methods and technologies every day. I would love to contribute to supporting the team’s objectives and outstanding performance.
            </p>
            <button className="btn btn-primary">Resume</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
