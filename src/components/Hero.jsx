import React from "react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import Squares from "../kit/Backgrounds/Squares/Squares.jsx";
import Particles from "../kit/Backgrounds/Particles/Particles.jsx";

const Hero = () => {
  return (
    <>
      <article
        id="greeting-words"
        style={{ width: "100%", height: "100%", position: "relative" }}
        className="h-dvh"
      >
        <h1 class="py-10 font-semibold absolute inset-y-25 start-1/16 whitespace-pre-line text-5xl/16 tracking-wide">
          <Typewriter
            words={[
              "Hi, I'm Alan\nI'm an Informatics Engineering Student\nin State University of Semarang.",
            ]}
            loop={100}
            cursor
            cursorStyle="_"
            typeSpeed={30}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </h1>
        <div style={{ width: "100%", height: "600px", position: "relative" }}>
          <Particles
            particleColors={["#000000", "#000000"]}
            particleCount={200}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>
      </article>
    </>
  );
};

export default Hero;
