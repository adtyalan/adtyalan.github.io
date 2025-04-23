import React from "react";
import NavBar from "./NavBar";
import Hero from "./Hero";
import Navigate from "./Navigate";
import AboutMe from "./AboutMe";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <NavBar></NavBar>
      <Hero></Hero>
      <Navigate></Navigate>
      <AboutMe></AboutMe>
      <Footer></Footer>
    </>
  );
};

export default Home;
