import React from "react";
import { Link } from "react-router-dom";
import Magnet from "../kit/Animations/Magnet/Magnet.jsx";
import { HashLink } from "react-router-hash-link";

const Navigate = () => {
  return (
    <>
    <div className="relative py-20 px-6 overflow-hidden">
      {/* Background Decorative Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black opacity-[0.07] dark:opacity-[0.04] whitespace-nowrap select-none pointer-events-none z-0">
        CREATIVE WORKS
      </div>

      <div className="relative z-10 flex flex-col items-center gap-10">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-6xl font-black text-zinc-900 dark:text-white mb-4 italic tracking-tighter">PROJECTS</h2>
          <div className="h-2 w-20 bg-teal-400 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl w-full">
          {[
            { label: "Graphic Design", href: "/graphic", color: "hover:bg-teal-400" },
            { label: "Photography", href: "/photography", color: "hover:bg-indigo-500" },
            { label: "UI/UX Design", href: "/uiux", color: "hover:bg-amber-400" },
            { label: "Web Application", href: "/web", color: "hover:bg-fuchsia-400" }
          ].map((item, idx) => (
            <Magnet key={idx} padding={50} disabled={false} magnetStrength={10}>
              <HashLink to={item.href} className="w-full">
                <button className={`w-full group relative overflow-hidden text-xl md:text-2xl font-black py-8 px-6 rounded-3xl border-2 border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 backdrop-blur-sm shadow-sm transition-all duration-500 ${item.color} text-zinc-900 dark:text-white hover:text-white hover:border-transparent cursor-pointer active:scale-95`}>
                  <span className="relative z-10 tracking-tight">{item.label}</span>
                  <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <img src="/icons/arrow-up-right.svg" alt="" className="w-6 h-6 invert group-hover:block hidden" />
                  </div>
                </button>
              </HashLink>
            </Magnet>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default Navigate;
