import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import GooeyNav from "../kit/Components/GooeyNav/GooeyNav";
import DarkModeToggle from "./DarkModeToggle";

const NavBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/graphic" },
    { label: "Experience", href: "/#experience" },
    { label: "About", href: "/#about" },
    { label: "Contact", href: "#contact" },
  ];

  // Determine active index based on current path
  const getActiveIndex = () => {
    const projectsPaths = ["/graphic", "/photography", "/uiux", "/web"];
    if (projectsPaths.includes(location.pathname)) return 1;
    if (location.pathname === "/") {
      if (location.hash === "#experience") return 2;
      if (location.hash === "#about") return 3;
      return 0; // Home
    }
    if (location.hash === "#contact") return 4;
    return 0; 
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
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 w-full flex justify-between items-center py-2 px-6 rounded-full shadow-xl overflow-hidden transition-colors duration-300">
          <div className="logo cursor-pointer">
            <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <h2 className="font-semibold text-lg text-zinc-900 dark:text-white">Alan Aditya.</h2>
            </Link>
          </div>
          
          <div className="flex items-center gap-2">
            {/* Dark Mode Toggle */}
            <DarkModeToggle />

            {/* Mobile hamburger */}
            <div className="md:hidden">
              <button onClick={toggleDrawer} className="text-2xl p-2 text-zinc-900 dark:text-white">
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
        </div>
      </header>

      {/* Offcanvas Drawer for mobile */}
      {isDrawerOpen && (
        <div className="fixed inset-0 z-30 flex bg-white dark:bg-zinc-950 animate-in fade-in duration-300">
          <div className="absolute top-11 right-7 flex justify-end items-start border border-zinc-200 dark:border-zinc-800 rounded-full bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm shadow-sm">
            <button className="p-2" onClick={toggleDrawer}>
              <img src="/icons/cross.svg" alt="close" className="w-6 h-6 dark:invert" />
            </button>
          </div>
          <div
            className="w-full h-full bg-white dark:bg-zinc-950 py-20 px-10 flex flex-col justify-start items-start"
          >
            <ul className="w-full flex flex-col gap-6 font-semibold text-3xl text-zinc-900 dark:text-white">
              <li className="flex flex-row justify-between items-center border-b border-zinc-100 dark:border-zinc-900 pb-4">
                <Link to="/" onClick={() => { toggleDrawer(); window.scrollTo(0, 0); }}>
                  Home
                </Link>
                <img src="/icons/arrow-up-right.svg" alt="arrow" className="w-6 h-6 opacity-30 dark:invert" />
              </li>
              <li className="flex flex-row justify-between items-center border-b border-zinc-100 dark:border-zinc-900 pb-4">
                <Link to="/graphic" onClick={() => { toggleDrawer(); window.scrollTo(0, 0); }}>
                  Projects
                </Link>
                <img src="/icons/arrow-up-right.svg" alt="arrow" className="w-6 h-6 opacity-30 dark:invert" />
              </li>
              <li className="flex flex-row justify-between items-center border-b border-zinc-100 dark:border-zinc-900 pb-4">
                <HashLink smooth to="/#experience" onClick={toggleDrawer}>
                  Experience
                </HashLink>
                <img src="/icons/arrow-up-right.svg" alt="arrow" className="w-6 h-6 opacity-30 dark:invert" />
              </li>
              <li className="flex flex-row justify-between items-center border-b border-zinc-100 dark:border-zinc-900 pb-4">
                <HashLink smooth to="/#about" onClick={toggleDrawer}>
                  About
                </HashLink>
                <img src="/icons/arrow-up-right.svg" alt="arrow" className="w-6 h-6 opacity-30 dark:invert" />
              </li>
              <li className="flex flex-row justify-between items-center border-b border-zinc-100 dark:border-zinc-900 pb-4">
                <HashLink smooth to="/#contact" onClick={toggleDrawer}>
                  Contact
                </HashLink>
                <img src="/icons/arrow-up-right.svg" alt="arrow" className="w-6 h-6 opacity-30 dark:invert" />
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;

