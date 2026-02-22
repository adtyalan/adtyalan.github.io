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
      initial={{ x: -20, opacity: 0, filter: "blur(10px)" }}
      animate={controls}
      className={`inline-block ${className}`}
    >
      <span
        className={`${disabled ? "" : "animate-shine"} bg-clip-text text-transparent`}
        style={{
          backgroundImage:
            "linear-gradient(120deg, currentColor 30%, rgba(255,255,255,0.8) 50%, currentColor 70%)",
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
