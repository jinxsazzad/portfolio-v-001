import { Typewriter } from "react-simple-typewriter";
import { MdDownload, MdWavingHand } from "react-icons/md";
import { FaArrowDown, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <div
      className="hero min-h-screen bg-cover bg-center"
      id="home"
      style={{
        backgroundImage: "url(https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
      }}
    >
      <div className="hero-overlay bg-opacity-70"></div>
      <div className="hero-content flex-col text-center text-white">
        <div className="mt-14 lg:mt-40">
          <h1 className="text-2xl lg:text-7xl font-semibold   flex justify-center items-center">
            Hello{" "}
            <MdWavingHand className="ms-2 text-red-500 animate-pulse hidden md:block" />
            , I{`'`}am <br className="md:hidden" /> Sazzad Hossain
          </h1>
          <h1 className="md:mb-5 text-xl lg:text-3xl">
            I am a
            <span className="text-xl md:text-5xl font-bold text-orange-500 ms-2">
              <Typewriter
                words={[
                  "Frontend Developer",
                  "React Developer",
                  "Web Developer",
                ]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={70}
                delaySpeed={1000}
              />
            </span>
          </h1>
          <p className="mb-5 text-lg hidden md:block">
            Junior Frontend Developer with a passion for Web Applications
            Development. Passionate about learning new technologies. Seeking
            opportunities and challenges that will improve my skill set.
          </p>
        </div>
        <div
          className="flex justify-center items-center  text-2xl lg:text-5xl gap-5  mb-1 lg:mb-4"
          data-aos="fade-up"
        >
          <a href="https://www.facebook.com/jinxsazzad" target="blank">
            <FaFacebook />
          </a>{" "}
          <a href="https://github.com/jinxsazzad" target="blank">
            <FaGithub />
          </a>{" "}
          <a href="www.linkedin.com/in/jinxsazzad" target="blank">
            <FaLinkedin />
          </a>
        </div>
        <a
          href="/public/Sazzad Hossain's Resume.pdf"
          download={true}
          className="flex justify-center items-center text-center btn btn-primary mb-4"
        >
          RESUME <MdDownload className="animate-pulse" />
        </a>
        <FaArrowDown className="hidden lg:block animate-bounce lg:mt-32" />
      </div>
    </div>
  );
};

export default Hero;
