import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import BlurText from "../kit/TextAnimations/BlurText/BlurText.jsx";
import TiltedCard from "../kit/Components/TiltedCard/TiltedCard.jsx";
import ShinyText from "../kit/TextAnimations/ShinyText/ShinyText.jsx";

const Hero = () => {
  return (
    <article
      id="greeting-words"
      className="relative w-full min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20 py-10 md:py-20 overflow-hidden"
    >
      {/* Artsy background elements */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-teal-400/20 dark:bg-teal-500/10 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-indigo-500/20 dark:bg-indigo-600/10 rounded-full blur-[150px] -z-10 animate-pulse" style={{ animationDelay: '2s' }} />
      
      <div className="flex-1 w-full z-10 text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto md:mx-0"
        >
          <div className="inline-block px-3 py-1 mb-6 rounded-full bg-zinc-900/5 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 backdrop-blur-sm">
            <span className="text-[10px] md:text-xs font-bold text-zinc-800 dark:text-zinc-400 tracking-wider uppercase">Available for freelance</span>
          </div>
          
          <h1 className="font-bold tracking-tight mb-6 text-zinc-900 dark:text-white">
            <BlurText
              text={"Crafting Digital\nExperiences\nwith Art & Logic."}
              delay={30}
              animateBy="words"
              direction="top"
              className="text-3xl sm:text-5xl md:text-5xl leading-[1.1] text-zinc-900 dark:text-white"
            />
          </h1>
          
          <p className="text-base md:text-xl text-zinc-800 dark:text-zinc-400 leading-relaxed max-w-lg mb-10 mx-auto md:mx-0 font-medium">
            Informatics student based in Semarang. I bridge the gap between aesthetics and functionality through Web Development and Design.
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <button
              onClick={() => {
                window.open(
                  "https://mail.google.com/mail/?view=cm&to=alanaditya96@gmail.com&su=Project%20Inquiry",
                  "_blank"
                );
              }}
              className="cursor-pointer group relative px-6 md:px-8 py-2 md:py-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-2xl font-bold transition-all hover:scale-105 active:scale-95 shadow-xl shadow-zinc-200 dark:shadow-none"
            >
              <ShinyText text="Hire me" speed={3} className="text-white dark:text-zinc-900" />
            </button>
            <a 
              href="#about"
              className="px-6 md:px-8 py-2 md:py-3 bg-transparent border border-zinc-200 dark:border-zinc-800 rounded-2xl font-medium text-zinc-900 dark:text-white transition-all hover:bg-zinc-50 dark:hover:bg-zinc-900/50"
            >
              About me
            </a>
          </div>
        </motion.div>
      </div>

      <div className="flex-1 w-full flex justify-center md:justify-end items-center mt-16 md:mt-0 z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[400px] md:h-[400px]"
        >
          <TiltedCard
            className="w-full h-full"
            imageSrc="/image/IMG_20230214_093208.jpg"
            altText="Alan Aditya"
            captionText="Alan Aditya"
            containerHeight="100%"
            containerWidth="100%"
            imageHeight="100%"
            imageWidth="100%"
            rotateAmplitude={8}
            scaleOnHover={1.05}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={<div className="p-4" />}
          />
          {/* Decorative tag for photo */}
          <div className="absolute -bottom-4 -left-4 md:-left-8 bg-zinc-900 dark:bg-zinc-900 p-3 md:p-4 rounded-xl md:rounded-2xl shadow-xl border border-zinc-800 rotate-[-4deg] z-20">
             <p className="text-[10px] md:text-xs font-semibold text-zinc-500">EST. 2004</p>
             <p className="font-bold text-sm md:text-base text-white uppercase tracking-tight">Alan Aditya</p>
          </div>
        </motion.div>
      </div>
    </article>
  );
};

export default Hero;
