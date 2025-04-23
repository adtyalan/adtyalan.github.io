import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  return (
    <>
      <header className="bg-white w-full flex justify-between items-center py-5 px-10 sticky top-0 border-b-1 border-b-neutral-400 z-50">
        <div className="logo">
          <Link to="/">
            <h2 className="font-semibold">Alan Aditya.</h2>
          </Link>
        </div>
        {/* Ikon hamburger hanya tampil di mobile */}
        <div className="md:hidden">
          <button onClick={toggleDrawer} className="text-3xl">
            &#9776;
          </button>
        </div>
        {/* Menu navigasi tampil di breakpoint sm ke atas */}
        <nav className="nav-list hidden md:block">
          <ul className="flex justify-center gap-18">
            <li className="list-none">
              <Link
                to="/graphic"
                className="py-2 px-6 rounded-full no-underline font-normal text-black transition-all duration-300 ease-in-out hover:bg-[#1c4749] hover:text-white"
              >
                Projects
              </Link>
            </li>
            <li className="list-none">
              <a
                href="#about"
                className="py-2 px-6 rounded-full no-underline font-normal text-black transition-all duration-300 ease-in-out hover:bg-[#1c4749] hover:text-white"
              >
                About
              </a>
            </li>
            <li className="list-none">
              <a
                href="#contact"
                className="py-2 px-6 rounded-full no-underline font-normal text-black transition-all duration-300 ease-in-out hover:bg-[#1c4749] hover:text-white"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
      {/* Offcanvas Drawer untuk mobile */}
      {isDrawerOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div
            className="absolute inset-0 bg-black opacity-50 top-0
          left-0 grow"
            onClick={toggleDrawer}
          ></div>
          <div className="absolute top-0 right-0 w-64 h-full bg-white py-6 px-12 flex-none flex flex-col justify-start items-start">
            <button className="w-fit mb-4 text-xl" onClick={toggleDrawer}>
              &#128473;
            </button>
            <ul className="flex flex-col gap-4">
              <li>
                <Link to="/graphic" onClick={toggleDrawer}>
                  Projects
                </Link>
              </li>
              <li>
                <a href="#about" onClick={toggleDrawer}>
                  About
                </a>
              </li>
              <li>
                <a href="#contact" onClick={toggleDrawer}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
