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
      class="w-full flex flex-col py-4 gap-8 pb-25 px-30 sm:flex-row sm:justify-between"
    >
      <p className="w-full sm:w-fit text-center">
        Made with{" "}
        <span
          className="inline-block relative overflow-hidden align-middle"
          style={{ height: "1.5em" }} // Naikkan ukuran container bila perlu
        >
          <AnimatePresence mode="wait">
            {showHeart ? (
              <motion.span
                key="heart"
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                exit={{ y: "-100%", opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="block" // Gunakan block agar mengikuti alur teks
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
                className="block"
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
