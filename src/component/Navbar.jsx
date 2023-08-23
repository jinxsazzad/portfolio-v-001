import { useEffect, useState } from "react";
import { FaBars, FaMoon, FaSun } from "react-icons/fa";
import logo from '../assets/SH_logo_png.png'

const Navbar = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const navItems = (
    <>
      <li>
        <a href="#home" >Home</a>
      </li>
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <a href="#skills">Skills</a>
      </li>
      <li>
        <a href="#portfolio">Portfolio</a>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
    </>
  );

  return (
    <>
      <nav className="navbar  mt-0 px-4 fixed z-50 bg-slate-800 text-gray-50 font-semibold">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <FaBars />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-1 shadow w-52 bg-slate-800 text-gray-50"
            >
              {navItems}
            </ul>
          </div>
          <div className="flex justify-center items-center gap-1">
            <img
              src={logo}
              alt=""
              className="h-10 hidden md:block"
            />
            <h3 className=" md:text-xl font-semibold">Sazzad Hossain</h3>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end">
          <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input
              type="checkbox"
              onChange={handleToggle}
              checked={theme === "light" ? false : true}
            />
            <FaSun className="swap-on" />
            <FaMoon className="swap-off" />
          </label>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
