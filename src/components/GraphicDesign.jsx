import React from "react";
import NavBar from "./NavBar";
import AboutMe from "./AboutMe";
import Footer from "./Footer";

const PortfolioSection = ({ title, description, images }) => (
  <section>
    <h3 class="text-base my-4 font-medium">{title}</h3>
    <div class="portfolio-container">
      {images.map((image, index) => (
        <img
          key={index}
          src={image.src}
          alt={image.alt || ""}
          class="portfolio-img"
        />
      ))}
    </div>
    {description && <p class="mt-4">{description}</p>}
  </section>
);

const GraphicDesign = () => {
  const designImages = [
    { src: "../src/assets//image/Portfolio Desain/1.png" },
    { src: "../src/assets//image/Portfolio Desain/6.png" },
    { src: "../src/assets//image/Portfolio Desain/2.png" },
    { src: "../src/assets//image/Portfolio Desain/4.png" },
    { src: "../src/assets//image/Portfolio Desain/5.png" },
    { src: "../src/assets//image/Portfolio Desain/7.png" },
    { src: "../src/assets//image/Portfolio Desain/9.png" },
    { src: "../src/assets//image/Portfolio Desain/8.png" },
    { src: "../src/assets//image/Portfolio Desain/3.png" },
    { src: "../src/assets//image/Portfolio Desain/1portrait.png" },
    { src: "../src/assets//image/Portfolio Desain/2portrait.png" },
    { src: "../src/assets//image/Portfolio Desain/3portrait.png" },
    { src: "../src/assets//image/Portfolio Desain/4portrait.png" },
    { src: "../src/assets//image/Portfolio Desain/6portrait.png" },
    { src: "../src/assets//image/Portfolio Desain/5portrait.png" },
  ];

  const logoImages = [
    { src: "../src/assets//image/Portfolio Desain/LANYA-white.jpg" },
    { src: "../src/assets//image/Portfolio Desain/LANYA-navy.jpg" },
    { src: "../src/assets//image/Portfolio Desain/LANYA-black.jpg" },
  ];

  return (
    <>
      <NavBar></NavBar>
      <article id="portfolio" class="parent-card">
        <h2 class="text-xl font-semibold">Graphic Design</h2>

        {/* Design Section */}
        <section class="child-first-card">
          <h3 id="graphic-design" class="text-lg mb-4 font-medium">
            Design
          </h3>
          <PortfolioSection
            title="Instagram Post and Stories"
            images={designImages}
          />
          <PortfolioSection
            title="Design Competition"
            description="Currently, this is the one and only design competition I participated in. This competition is held by &#64;hensaadriano."
            images={[
              {
                src: "../src/assets//image/Portfolio Desain/Snapinsta.app_203507069_961454468027670_5814645778525152254_n_1080.jpg",
              },
            ]}
          />
          <PortfolioSection
            title="Logo Design"
            description="This is supposed to be my for-fun logo to be used on my Fiverr account as branding for my services. Lanya is an acronym for Alan Aditya."
            images={logoImages}
          />
          <p class="mt-8">
            I discovered this passion for design in my late high school.
            Unfortunately, right now I'm too busy with uni to create any other
            artworks. Anyway, here's some old designs I've made throughout 2023.
          </p>
        </section>

        {/* Frontend Developer Section */}
        <section id="web-application" class="child-first-card mb-20">
          <h3 class="text-lg mb-4 font-medium">Frontend Developer</h3>
          <p>
            I developed this skill when I went to college. Linear to my
            Informatics Engineering major, so I've decided to dive into this
            Computer Science-related world, and what caught my eye the most is
            Frontend Developing.
            <br />
            <br />
            There are still many bugs, and some of the features didn't work like
            they should. This is my first time creating an HTML CSS Web Project.
            Thank you for visiting!
            <br />
            <br />
            <u>
              Currently, my portfolio for FE Developer is this webpage you're on
              right now :D.
            </u>
          </p>
        </section>
      </article>
      <Footer></Footer>
    </>
  );
};

export default GraphicDesign;
