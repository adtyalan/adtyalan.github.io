import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ScrollVelocity from "../kit/TextAnimations/ScrollVelocity/ScrollVelocity.jsx";

const AboutMe = () => {
  return (
    <section id="about" className="py-20 px-6 md:px-20 relative overflow-hidden">
      <div className="w-full text-white bg-zinc-900 dark:bg-white dark:text-zinc-900 py-6 mb-20 rotate-[-1deg] shadow-xl">
        <ScrollVelocity
          texts={[
            "Fullstack Web Developer ⚪ UI/UX Design ⚪ Graphic Design ⚪ Photography ⚪ Mobile Developer ⚪",
          ]}
          velocity={20}
          className="text-2xl md:text-4xl font-black uppercase tracking-tighter py-4"
        />
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 mt-10">
        <div className="flex-1 w-full">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="child-first-card-v2 p-10 relative overflow-hidden group"
          >
             {/* Decorative element inside card */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl group-hover:bg-indigo-500/20 transition-colors" />
            
            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
              <div className="flex-shrink-0">
                <img
                  src="/image/IMG_20230214_093208.jpg"
                  alt="Alan Aditya"
                  className="object-cover w-32 h-32 md:w-48 md:h-48 rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-black mb-6 text-zinc-900 dark:text-blue-500 tracking-tighter italic">WHO'S ALAN?</h2>
                <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8">
                  Hello there! I'm <span className="text-zinc-900 dark:text-white font-bold">Alan Aditya</span>. 
                  Currently pursuing Informatics Engineering in Semarang. 
                  I am a creative technologist passionate about bridging the gap between <span className="font-bold underline decoration-indigo-500 underline-offset-4">design and code</span>.
                </p>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed italic">
                  "I strongly believe when art and technology combined, they'll blend really well resulting in superb communicative visuals."
                </p>

                <ul className="flex flex-row justify-center md:justify-start gap-6 mt-10">
                  {[
                    { icon: "fa-linkedin-in", href: "https://www.linkedin.com/in/adtyalan" },
                    { icon: "fa-instagram", href: "https://www.instagram.com/adtyalan" },
                    { icon: "fa-github", href: "https://www.github.com/adtyalan" }
                  ].map((social, idx) => (
                    <li key={idx}>
                      <a 
                        href={social.href} 
                        target="_blank" 
                        rel="noreferrer"
                        className="text-2xl text-zinc-400 hover:text-indigo-500 dark:text-zinc-500 dark:hover:text-white transition-colors"
                      >
                        <i className={`fab ${social.icon}`}></i>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
