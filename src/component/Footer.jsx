import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer items-center p-4 bg-neutral text-neutral-content">
      <div className="items-center grid-flow-col">
        <img src="../assets/SH_logo_png.png" alt="" />
        <p>Copyright © 2023 - All right reserved</p>
      </div>
      <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
      <a href="https://www.facebook.com/jinxsazzad" target="blank" ><FaFacebook /></a> <a href="https://github.com/jinxsazzad" target="blank" ><FaGithub /></a> <a href="www.linkedin.com/in/jinxsazzad" target="blank" ><FaLinkedin /></a>
      </div>
    </footer>
  );
};

export default Footer;
