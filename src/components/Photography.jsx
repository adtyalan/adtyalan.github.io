import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Photography = () => {
  const photographyImages = [
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
          <h3 class="text-lg mb-4 font-medium">Photography</h3>
          <div class="portfolio-container">
            {photographyImages.map((image, index) => (
              <img
                key={index}
                src={image.src}
                alt={image.alt || ""}
                class="portfolio-img"
              />
            ))}
          </div>
          <p class="mt-8">
            When I was in junior high school - high school, I was quite active
            in learning and practicing photography, especially on mobile phone
            camera. I have some shots that can be seen on my Instagram
            &#64;adtyalan. Currently, I participated at Screenshot and CLIC
            UNNES. They're community organization in my University focusing on
            Photography and Cinematography.
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

export default Photography;
