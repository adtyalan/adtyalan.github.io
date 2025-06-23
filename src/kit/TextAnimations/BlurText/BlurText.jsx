/*
	Installed from https://reactbits.dev/tailwind/
*/

import { motion } from "framer-motion";
import { useEffect, useRef, useState, useMemo } from "react";

const buildKeyframes = (from, steps) => {
  const keys = new Set([
    ...Object.keys(from),
    ...steps.flatMap((s) => Object.keys(s)),
  ]);

  const keyframes = {};
  keys.forEach((k) => {
    keyframes[k] = [from[k], ...steps.map((s) => s[k])];
  });
  return keyframes;
};

// ...existing code...
const BlurText = ({
  text = "",
  delay = 200,
  className = "",
  animateBy = "words",
  direction = "top",
  threshold = 0.1,
  rootMargin = "0px",
  animationFrom,
  animationTo,
  easing = (t) => t,
  onAnimationComplete,
  stepDuration = 0.35,
}) => {
  const lines = useMemo(() => text.split("\n"), [text]);
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold, rootMargin }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [threshold, rootMargin]);

  const defaultFrom = useMemo(
    () =>
      direction === "top"
        ? { filter: "blur(10px)", opacity: 0, y: -50 }
        : { filter: "blur(10px)", opacity: 0, y: 50 },
    [direction]
  );

  const defaultTo = useMemo(
    () => [
      {
        filter: "blur(5px)",
        opacity: 0.5,
        y: direction === "top" ? 5 : -5,
      },
      { filter: "blur(0px)", opacity: 1, y: 0 },
    ],
    [direction]
  );

  const fromSnapshot = animationFrom ?? defaultFrom;
  const toSnapshots = animationTo ?? defaultTo;

  const stepCount = toSnapshots.length + 1;
  const totalDuration = stepDuration * (stepCount - 1);
  const times = Array.from({ length: stepCount }, (_, i) =>
    stepCount === 1 ? 0 : i / (stepCount - 1)
  );

  let wordCount = 0;

  return (
    <div ref={ref} className={`blur-text ${className}`}>
      {lines.map((line, lineIndex) => {
        const segments =
          animateBy === "words" ? line.split(" ") : line.split("");
        return (
          <p key={lineIndex} className="flex flex-wrap">
            {segments.map((segment, segmentIndex) => {
              const animateKeyframes = buildKeyframes(
                fromSnapshot,
                toSnapshots
              );

              const spanTransition = {
                duration: totalDuration,
                times,
                delay: (wordCount * delay) / 1000,
                ease: easing,
              };

              const isLastWord =
                lineIndex === lines.length - 1 &&
                segmentIndex === segments.length - 1;
              wordCount++;

              return (
                <motion.span
                  className="inline-block will-change-[transform,filter,opacity]"
                  key={segmentIndex}
                  initial={fromSnapshot}
                  animate={inView ? animateKeyframes : fromSnapshot}
                  transition={spanTransition}
                  onAnimationComplete={
                    isLastWord ? onAnimationComplete : undefined
                  }
                >
                  {segment === " " ? "\u00A0" : segment}
                  {animateBy === "words" &&
                    segmentIndex < segments.length - 1 &&
                    "\u00A0"}
                </motion.span>
              );
            })}
          </p>
        );
      })}
    </div>
  );
};

export default BlurText;
