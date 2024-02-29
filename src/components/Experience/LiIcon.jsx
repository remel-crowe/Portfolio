import React from "react";
import { motion, useScroll } from "framer-motion";

function LiIcon({ reference }) {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["center end", "center center"],
  });

  return (
    <figure className="absolute left-[-22px] stroke-dark">
      <svg width="75" height="75" viewBox="0 0 100 100">
        <circle
          cx="75"
          cy="50"
          r="20"
          className="stroke-yellow-400 stroke-[5px] fill-none"
        />
        <motion.circle
          cx="75"
          cy="50"
          r="20"
          className="stroke-1 fill-[rgb(63,63,63)]"
          style={{
            pathLength: scrollYProgress,
          }}
        />
        <circle cx="75" cy="50" r="10" className="stroke-1 fill-yellow-400" />
      </svg>
    </figure>
  );
}

export default LiIcon;
