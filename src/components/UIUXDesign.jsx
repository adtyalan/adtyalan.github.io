import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import NavBar from "./NavBar";
import Footer from "./Footer";

const UIUXDesign = () => {
  const uiuxImages = [
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
          <h3 class="text-lg mb-4 font-medium">UI/UX Design</h3>
          <div class="portfolio-container">
            {uiuxImages.map((image, index) => (
              <img
                key={index}
                src={image.src}
                alt={image.alt || ""}
                class="portfolio-img"
              />
            ))}
          </div>
          <p class="mt-8">
            UI/UX Design is one of my favorite fields. I have a lot of
            experience in this field, especially in designing web/mobile apps. I
            gained my experience from participated in a few competitions, where
            I teamed up with my friends to create a product. I also have
            experience in designing a website for my own project, which can be
            seen on my GitHub &#64;adtyalan.
            <br />
            <br />
            <u>Fun fact: All of the photos above are taken with a phone.</u>
          </p>
        </section>
      </article>
      <Footer></Footer>
    </>
  );
};

export default UIUXDesign;
