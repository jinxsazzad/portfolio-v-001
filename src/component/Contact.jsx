import { MdAlternateEmail, MdMessage } from "react-icons/md";
import { BsSendFill } from "react-icons/bs";
import SectionHeading from "./common/SectionHeading";
import { FaFacebook, FaGithub, FaLinkedin, FaUser } from "react-icons/fa";
const Contact = () => {
  return (
    <div className="mb-4" id="contact">
      <SectionHeading
        title={"< CONTACT ME />"}
        subtitle={"Feel free to contact with me."}
      />
      <div className="flex flex-col justify-center items-center md:flex-row">
        <div
          className="relative w-full h-[25rem] bg-cover bg-center md:w-1/2 flex flex-col items-center justify-center p-4"
          style={{ backgroundImage: "url(https://i.gifer.com/Idcy.gif)" }}
        >
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="relative text-white text-center">
            <h4 className=" text-lg font-semibold mb-3">Find me on</h4>
            <div className="flex justify-center items-center text-2xl lg:text-5xl gap-5 mb-1 lg:mb-4">
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
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-4">Get in touch</h2>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className=" gap-2 mb-2 flex justify-start items-center"
                >
                  <FaUser /> Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className=" gap-2 mb-2 flex justify-start items-center"
                >
                  <MdAlternateEmail /> Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className=" gap-2 mb-2 flex justify-start items-center"
                >
                  <MdMessage /> Message
                </label>
                <textarea
                  id="message"
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className=" btn btn-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 flex justify-center items-center gap-2"
              >
                Send <BsSendFill />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
