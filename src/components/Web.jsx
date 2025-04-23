import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Web = () => {
  const webImages = [
    { src: "../src/assets/image/Portfolio Foto/1660654478867.jpg" },
    { src: "../src/assets/image/Portfolio Foto/2019-06-26 01.13.28 1.jpg" },
    { src: "../src/assets/image/Portfolio Foto/IMG_20221111_172822.jpg" },
    { src: "../src/assets/image/Portfolio Foto/2019-11-20 07.59.41 1.jpg" },
    { src: "../src/assets/image/Portfolio Foto/fotoTangan2.jpg" },
    { src: "../src/assets/image/Portfolio Foto/fotoKost3.jpg" },
  ];

  return (
    <>
      <NavBar></NavBar>
      <article id="portfolio" class="parent-card">
        {/* Photography Section */}
        <section id="uiux-design" class="child-first-card mb-12">
          <h3 class="text-lg mb-4 font-medium">Web Applications</h3>
          <div class="portfolio-container">
            {webImages.map((image, index) => (
              <img
                key={index}
                src={image.src}
                alt={image.alt || ""}
                class="portfolio-img"
              />
            ))}
          </div>
          <p class="mt-8">
            This is my main field of interest. I have a lot of experience in
            building web apps. I gained my experience starting from my college
            days, where I learned a lot about web development. I also have
            experience in building a websites for Dicoding Bootcamp submission
            projects, which can be seen on my GitHub &#64;adtyalan.
          </p>
        </section>
      </article>
      <Footer></Footer>
    </>
  );
};

export default Web;
