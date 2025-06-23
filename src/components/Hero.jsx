import React from "react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import Squares from "../kit/Backgrounds/Squares/Squares.jsx";
import Particles from "../kit/Backgrounds/Particles/Particles.jsx";
import BlurText from "../kit/TextAnimations/BlurText/BlurText.jsx";
import TiltedCard from "../kit/Components/TiltedCard/TiltedCard.jsx";

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
              "Hi, I'm Alan\nI'm an Informatics\nEngineering Student\nin State University of\nSemarang."
            }
            delay={10}
            animateBy="line"
            direction="top"
            className="text-2xl/10 sm:text-4xl/16"
          />
        </h1>
        <h1 class="py-40 sm:py-0 font-semibold absolute inset-y-10 md:inset-y-20   start-11/16 whitespace-pre-line tracking-wide">
          <TiltedCard
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
            imageSrc="../src/assets/image/IMG_20230214_093208.jpg"
            altText="Kendrick Lamar - GNX Album Cover"
            captionText="Alan Aditya"
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="300px"
            imageWidth="300px"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={<p className="tilted-card-demo-text"></p>}
          />
        </h1>
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
