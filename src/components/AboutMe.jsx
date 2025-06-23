import React from "react";
import { Link } from "react-router-dom";
import ScrollVelocity from "../kit/TextAnimations/ScrollVelocity/ScrollVelocity.jsx";

const AboutMe = () => {
  return (
    <div id="about">
      <div class="w-auto text-white bg-black py-4 mt-30">
        <ScrollVelocity
          texts={[
            "Fullstack Web Developer ⚪ UI/UX Design ⚪ Graphic Design ⚪ Photography ⚪ Mobile Developer ⚪",
          ]}
          velocity={100}
          className="custom-scroll-text"
        />
      </div>
      <article class="mx-8 sm:mx-20 mt-30 mb-20">
        <section class="child-first-card-v2">
          <div class="flex flex-col m-10 justify-center items-center gap-4 mb-4">
            <img
              src="../src/assets/image/IMG_20230214_093208.jpg"
              alt=""
              class="object-cover w-32 h-32 rounded-full shadow-xl/10"
            />
            <h2 class="text-xl font-semibold">Who's Alan?</h2>
            <p class="text-pretty text-center">
              Hello there! i am Alan Aditya. Im currently living in Semarang for
              University. Im passionate at{" "}
              <span class="font-semibold">
                Web Development, Graphic Design, and Photography.
              </span>{" "}
              I strongly believe when{" "}
              <span class="font-semibold">art and technology</span> combined,
              they'll blend really well resulting in superb communicative
              visual.
            </p>
          </div>
          <ul class="flex flex-row justify-center items-center gap-4 mb-4 text-2xl">
            <li class="">
              <a href="https://www.linkedin.com/in/adtyalan" target="_blank">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </li>
            <li class="">
              <a href="https://www.instagram.com/adtyalan" target="_blank">
                <i class="fab fa-instagram"></i>
              </a>
            </li>
            <li class="">
              <a href="https://www.instagram.com/adtyalan" target="_blank">
                <i class="fab fa-youtube"></i>
              </a>
            </li>
            <li class="">
              <a href="https://www.github.com/adtyalan" target="_blank">
                <i class="fab fa-github"></i>
              </a>
            </li>
          </ul>
        </section>
      </article>
    </div>
  );
};

export default AboutMe;
