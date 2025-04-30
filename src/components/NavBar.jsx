import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => (document.body.style.overflow = "");
  }, [isDrawerOpen]);

  return (
    <>
      <header className="bg-white w-full flex justify-between items-baseline py-5 px-6 sticky top-0 border-b-2 border-b-neutral-300 z-50">
        <div className="logo">
          <Link to="/">
            <h2 className="font-semibold">Alan Aditya.</h2>
          </Link>
        </div>
        {/* Ikon hamburger hanya tampil di mobile */}
        <div className="md:hidden">
          <button onClick={toggleDrawer} className="text-2xl">
            &#9776;
          </button>
        </div>
        {/* Menu navigasi tampil di breakpoint sm ke atas */}
        <nav className="nav-list hidden md:block">
          <ul className="flex justify-center gap-18">
            <li className="list-none">
              <Link
                to="/graphic"
                className="py-2 px-6 rounded-full no-underline font-normal text-black transition-all duration-300 ease-in-out hover:bg-black hover:text-white hover:shadow-lg"
              >
                Projects
              </Link>
            </li>
            <li className="list-none">
              <Link
                to="/"
                className="py-2 px-6 rounded-full no-underline font-normal text-black transition-all duration-300 ease-in-out hover:bg-black hover:text-white hover:shadow-lg"
              >
                About
              </Link>
            </li>
            <li className="list-none">
              <a
                href="#contact"
                className="py-2 px-6 rounded-full no-underline font-normal text-black transition-all duration-300 ease-in-out hover:bg-black hover:text-white hover:shadow-lg"
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
          <div className="absolute top-6.5 right-2 flex justify-end items-start w-full pr-4">
            <button className="bg-white w-fit mb-4" onClick={toggleDrawer}>
              <img
                src="../public/icons/cross.svg"
                alt="close"
                className="w-5 h-5"
              />
            </button>
          </div>
          <div
            className="absolute top-[77px] right-0 w-screen bg-white py-6 px-6 flex-none flex flex-col justify-start items-start"
            style={{ height: "calc(100% - 77px)" }}
          >
            <ul className="w-full flex flex-col gap-4 font-medium">
              <li className="flex flex-row justify-between items-center">
                <Link to="/graphic" onClick={toggleDrawer}>
                  Projects
                </Link>
                <img
                  src="../public/icons/arrow-up-right.svg"
                  alt="arrow"
                  className="w-4 h-4"
                />
              </li>
              <li className="flex flex-row justify-between items-center">
                <a href="/#about" onClick={toggleDrawer}>
                  About
                </a>
                <img
                  src="../public/icons/arrow-up-right.svg"
                  alt="arrow"
                  className="w-4 h-4"
                />
              </li>
              <li className="flex flex-row justify-between items-center">
                <a href="#contact" onClick={toggleDrawer}>
                  Contact
                </a>
                <img
                  src="../public/icons/arrow-up-right.svg"
                  alt="arrow"
                  className="w-4 h-4"
                />
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
