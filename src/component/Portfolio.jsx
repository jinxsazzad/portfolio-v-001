import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import SectionHeading from "./common/SectionHeading";
import { MdOpenInNew, MdPreview } from "react-icons/md";
import project_1 from "../../public/images/FireShot Capture 001 - Assignment Three - assignment-three-jinx.netlify.app.png";
import project_2 from "../../public/images/FireShot Capture 003 - Interactive Geometry - visionary-puppy-ec5a7c.netlify.app.png";
import project_3 from "../../public/images/FireShot Capture 005 - Quiz Hero - funny-gnome-4ac68b.netlify.app.png";
import project_4 from "../../public/images/FireShot Capture 006 - Hired.com - cool-caramel-2a3d25.netlify.app.png";
import project_5 from "../../public/images/FireShot Capture 007 - Indian Tadka - indian-tadka-400f2.web.app.png";
import project_6 from "../../public/images/FireShot Capture 008 - HH - Home - assignment-eleven-90f42.web.app.png";
import project_7 from "../../public/images/FireShot Capture 009 - Sport Spark - assignment-twelve-c0a24.web.app.png";
const Portfolio = () => {
  const projects = [
    {
      id: 1,
      name: "Justice Service",
      img: project_1,
      githubLink: "/",
      siteLink: "https://assignment-three-jinx.netlify.app/#",
    },
    {
      id: 2,
      name: "Area Calculator",
      img: project_2,
      githubLink: "/",
      siteLink: "https://visionary-puppy-ec5a7c.netlify.app/",
    },
    {
      id: 3,
      name: "QUIZ HERO",
      img: project_3,
      githubLink: "/",
      siteLink: "https://funny-gnome-4ac68b.netlify.app/",
    },
    {
      id: 4,
      name: "Hired.Com",
      img: project_4,
      githubLink: "/",
      siteLink: "https://cool-caramel-2a3d25.netlify.app/",
    },
    {
      id: 5,
      name: "Indian Tadka",
      img: project_5,
      githubLink: "/",
      siteLink: "https://indian-tadka-400f2.web.app/",
    },
    {
      id: 6,
      name: "Heros Hideout",
      img: project_6,
      githubLink: "/",
      siteLink: "https://assignment-eleven-90f42.web.app/",
    },
    {
      id: 7,
      name: "Sports Spark",
      img: project_7,
      githubLink: "/",
      siteLink: "https://assignment-twelve-c0a24.web.app/",
    },
  ];
  return (
    <div id="portfolio">
      <SectionHeading title={"< PORTFOLIO />"} subtitle={"MY AMAZING WORKS"} />
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {projects.map(({ id, name, img, githubLink, siteLink }) => (
          <SwiperSlide key={id}>
            <div className="card rounded-none shadow-xl my-10 bg-base-300">
              <div className="bg-cover h-60 flex items-start overflow-y-auto">
                <img src={img} alt="ProjectImg" className=" object-top" />
              </div>
              <div className="card-body">
                <h2 className=" card-title">{name}</h2>
                <div className="flex justify-start flex-wrap items-center gap-1">
                  <button
                    className="badge badge-secondary"
                    onClick={() => window.project_details.showModal()}
                  >
                    Details
                    <MdOpenInNew className="ms-2" />
                  </button>
                  <a href={siteLink} className="badge badge-secondary">
                    Preview <MdPreview className="ms-2" />
                  </a>
                </div>
                <p>If a dog chews shoes whose shoes does he choose?</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Modal for show project details*/}
      <dialog id="project_details" className="modal">
        <form method="dialog" className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg">Hello!</h3>
          <img src={""} alt="" />
          <p className="py-4">Click the button below to close</p>
          <div className="modal-action">
            {/* if there is a button, it will close the modal */}
            <button className="btn">Close</button>
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default Portfolio;
