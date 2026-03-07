import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CircularText from "../kit/TextAnimations/CircularText/CircularText.jsx";

const Footer = () => {
  const [showHeart, setShowHeart] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowHeart((prev) => !prev);
    }, 2000); // Ubah tiap 2 detik
    return () => clearInterval(interval);
  }, []);

  return (
    <footer
      id="contact"
      className="w-full flex flex-col py-10 gap-8 pb-32 px-6 md:px-30 sm:flex-row sm:justify-between border-t border-zinc-200 dark:border-zinc-900 mt-20"
    >
      <p className="w-full sm:w-fit text-center text-zinc-600 dark:text-zinc-400 font-medium">
        Made with{" "}
        <span
          className="inline-block relative overflow-hidden align-middle w-5 h-6"
        >
          <AnimatePresence mode="wait">
            {showHeart ? (
              <motion.span
                key="heart"
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                exit={{ y: "-100%", opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="block"
              >
                ❤️
              </motion.span>
            ) : (
              <motion.span
                key="love"
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                exit={{ y: "-100%", opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="block text-[10px] font-black"
              >
                LOVE
              </motion.span>
            )}
          </AnimatePresence>
        </span>{" "}
        by &#169;Alan Aditya
      </p>
      <CircularText
        className="hidden sm:block"
        text="ALAN*ADITYA*PORTFOLIO*"
        onHover="speedUp"
        spinDuration={20}
      />
    </footer>
  );
};

export default Footer;
