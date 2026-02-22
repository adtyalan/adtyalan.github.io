import React from "react";
import Hero from "./Hero";
import Navigate from "./Navigate";
import Skills from "./Skills";
import AboutMe from "./AboutMe";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="flex flex-col gap-10">
      <Hero />
      <div className="h-px bg-zinc-100 dark:bg-zinc-900 mx-20" />
      <Navigate />
      <Skills />
      <AboutMe />
      <Footer />
    </div>
  );
};

export default Home;
