import React from "react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import Squares from "../kit/Backgrounds/Squares/Squares.jsx";
import Particles from "../kit/Backgrounds/Particles/Particles.jsx";
import BlurText from "../kit/TextAnimations/BlurText/BlurText.jsx";
import TiltedCard from "../kit/Components/TiltedCard/TiltedCard.jsx";
import ShinyText from "../kit/TextAnimations/ShinyText/ShinyText.jsx";

const Hero = () => {
  return (
    <>
      <article
        id="greeting-words"
        style={{ width: "100%", height: "100%", position: "relative" }}
      >
        <h1 class="py-40 sm:py-0 font-semibold absolute inset-y-10 md:inset-y-20   start-1/16 whitespace-pre-line tracking-wide">
          <BlurText
            text={
              "Hi! I'm Alan\nI'm an Informatics\nEngineering Student\nin State University of\nSemarang."
            }
            delay={10}
            animateBy="line"
            direction="top"
            className="text-2xl/8 sm:text-4xl/14 "
          />
          <button
            onClick={() => {
              window.open(
                "https://mail.google.com/mail/?view=cm&to=alanaditya96@gmail.com&su=Tawaran%20Kerja&body=Hai%20alan%20aku%20memiliki%20proyek%20yang%20ingin%20kamu%20kerjakan.%0A%0AProyek%20ini%20adalah%20tentang%20...%0A%0AKalau%20kamu%20berminat,%20silakan%20balas%20email%20ini.%0A%0ASalam,%0A[Your Name]",
                "_blank"
              );
            }}
            className="cursor-pointer mt-10 sm:mt-4"
          >
            <ShinyText
              text="Hire me"
              className="text-md font-regular"
              speed={3}
            />
          </button>
        </h1>
        <div
          className="hidden bottom-1/4 right-4 w-24 h-24 /* Ukuran mobile */
            sm:absolute sm:block sm:inset-y-20 sm:right-1/16 sm:w-[300px] sm:h-[300px] /* Ukuran desktop */
            z-10"
        >
          <TiltedCard
            className="w-full h-full"
            imageSrc="../src/assets/image/IMG_20230214_093208.jpg"
            altText="Kendrick Lamar - GNX Album Cover"
            captionText="Alan Aditya"
            containerHeight="100%"
            containerWidth="100%"
            imageHeight="100%"
            imageWidth="100%"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={<p className="tilted-card-demo-text"></p>}
          />
        </div>
        <div className="w-full h-dvh overflow-hidden">
          {/* <Particles
            particleColors={["#000000", "#000000"]}
            particleCount={200}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          /> */}
          <p></p>
        </div>
      </article>
    </>
  );
};

export default Hero;
