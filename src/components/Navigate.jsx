import React from "react";
import { Link } from "react-router-dom";
import Magnet from "../kit/Animations/Magnet/Magnet.jsx";
import { HashLink } from "react-router-hash-link";

const Navigate = () => {
  return (
    <>
      <div class="m-20 flex flex-col items-center gap-4 mb-4">
        <div class="w-full p-4 flex flex-col justify-between items-center justify-items-end gap-4 mb-20 text-center md:flex-row">
          <h2 class="text-4xl grow-2">Projects</h2>
          <h2 class="text-lg grow-6">Projects</h2>
          <h2 class="text-xs grow-6">Projects</h2>
          <h2 class="text-lg grow-6">Projects</h2>
          <h2 class="text-4xl grow-2">Projects</h2>
        </div>
        <Magnet padding={50} disabled={false} magnetStrength={10}>
          <HashLink to="/graphic#">
            <button class="text-2xl font-medium border-2 py-4 px-4 rounded-2xl shadow-xl/10 hover:bg-teal-400 hover:text-white transition duration-300 ease-in-out cursor-pointer">
              Graphic Design
            </button>
          </HashLink>
        </Magnet>
        <Magnet padding={50} disabled={false} magnetStrength={10}>
          <HashLink to="/photography#">
            <button class="text-2xl font-medium border-2 py-4 px-4 rounded-2xl shadow-xl/10 hover:bg-indigo-500 hover:text-white transition duration-300 ease-in-out cursor-pointer">
              Photography
            </button>
          </HashLink>
        </Magnet>
        <Magnet padding={50} disabled={false} magnetStrength={10}>
          <HashLink to="/uiux#">
            <button class="text-2xl font-medium border-2 py-4 px-4 rounded-2xl shadow-xl/10 hover:bg-amber-300 hover:text-white transition duration-300 ease-in-out cursor-pointer">
              UI/UX Design
            </button>
          </HashLink>
        </Magnet>
        <Magnet padding={50} disabled={false} magnetStrength={10}>
          <HashLink to="/web#">
            <button class="text-2xl font-medium border-2 py-4 px-4 rounded-2xl shadow-xl/10 hover:bg-fuchsia-400 hover:text-white transition duration-300 ease-in-out cursor-pointer">
              Web Application
            </button>
          </HashLink>
        </Magnet>
        <div class="w-full p-4 flex flex-col justify-between items-center justify-items-end gap-4 mt-20 text-center md:flex-row">
          <h2 class="text-4xl grow-2">Projects</h2>
          <h2 class="text-lg grow-6">Projects</h2>
          <h2 class="text-xs grow-6">Projects</h2>
          <h2 class="text-lg grow-6">Projects</h2>
          <h2 class="text-4xl grow-2">Projects</h2>
        </div>
      </div>
    </>
  );
};

export default Navigate;
