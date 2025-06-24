import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const ShinyText = ({ text, disabled = false, speed = 5, className = "" }) => {
  const animationDuration = `${speed}s`;
  const controls = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start({
            x: 0,
            opacity: 1,
            filter: "blur(0px)",
            transition: { duration: 1, ease: "easeOut" },
          });
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ x: -60, opacity: 0, filter: "blur(10px)" }}
      animate={controls}
      className={`
        bg-radial-[at_50%_5%] from-neutral-300 via-zinc-800 to-black
        inline-block
        px-4 py-2 rounded-full
        ${className}
      `}
    >
      <span
        className={`
          bg-clip-text text-transparent
          ${disabled ? "" : "animate-shine"}
        `}
        style={{
          backgroundImage:
            "linear-gradient(120deg, #b5b5b5 30%, #ffffff 50%, #b5b5b5 70%)",
          backgroundSize: "200% 100%",
          WebkitBackgroundClip: "text",
          animationDuration: animationDuration,
        }}
      >
        {text}
      </span>
    </motion.div>
  );
};

export default ShinyText;
