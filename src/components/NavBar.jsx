import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import GooeyNav from "../kit/Components/GooeyNav/GooeyNav";

const NavBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: "Projects", href: "/graphic" },
    { label: "About", href: "/" },
    { label: "Contact", href: "#contact" },
  ];

  // Determine active index based on current path
  const getActiveIndex = () => {
    const projectsPaths = ["/graphic", "/photography", "/uiux", "/web"];
    if (projectsPaths.includes(location.pathname)) return 0;
    if (location.pathname === "/") return 1;
    return 1; // Default to About
  };

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
      <header className="sticky top-0 z-20 px-4 pt-4 md:px-6 md:pt-6">
        <div className="bg-white w-full flex justify-between items-center py-2 px-6 rounded-full shadow-md overflow-hidden">
          <div className="logo cursor-pointer">
            <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <h2 className="font-semibold text-lg">Alan Aditya.</h2>
            </Link>
          </div>
          
          {/* Mobile hamburger */}
          <div className="md:hidden">
            <button onClick={toggleDrawer} className="text-2xl p-2">
              &#9776;
            </button>
          </div>

          {/* GooeyNav for Desktop */}
          <nav className="nav-list hidden md:block">
            <GooeyNav 
              items={navItems} 
              initialActiveIndex={getActiveIndex()} 
            />
          </nav>
        </div>
      </header>

      {/* Offcanvas Drawer for mobile */}
      {isDrawerOpen && (
        <div className="fixed inset-0 z-30 flex bg-white animate-in fade-in duration-300">
          <div className="absolute top-11 right-7 flex justify-end items-start">
            <button className="p-2" onClick={toggleDrawer}>
              <img src="/icons/cross.svg" alt="close" className="w-6 h-6" />
            </button>
          </div>
          <div
            className="w-full h-full bg-white py-20 px-10 flex flex-col justify-start items-start"
          >
            <ul className="w-full flex flex-col gap-8 font-medium text-2xl">
              <li className="flex flex-row justify-between items-center border-b pb-4">
                <Link to="/graphic" onClick={() => { toggleDrawer(); window.scrollTo(0, 0); }}>
                  Projects
                </Link>
                <img
                  src="/icons/arrow-up-right.svg"
                  alt="arrow"
                  className="w-6 h-6 opacity-50"
                />
              </li>
              <li className="flex flex-row justify-between items-center border-b pb-4">
                <Link to="/" onClick={() => { toggleDrawer(); window.scrollTo(0, 0); }}>
                  About
                </Link>
                <img
                  src="/icons/arrow-up-right.svg"
                  alt="arrow"
                  className="w-6 h-6 opacity-50"
                />
              </li>
              <li className="flex flex-row justify-between items-center border-b pb-4">
                <a href="#contact" onClick={toggleDrawer}>
                  Contact
                </a>
                <img
                  src="/icons/arrow-up-right.svg"
                  alt="arrow"
                  className="w-6 h-6 opacity-50"
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

