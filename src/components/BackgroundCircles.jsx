import React from "react";
import { motion } from "framer-motion";

function BackgroundCircles() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex justify-center items-center z-0"
    >
      <div className=" absolute border border-[#333333] rounded-full h-[150px] w-[150px] md:h-[200px] md:w-[200px] md:mt-52 mt-48 animate-ping" />
      <div className=" absolute border border-[#333333] rounded-full h-[250px] w-[250px] md:h-[300px] md:w-[300px] md:mt-52 mt-48" />
      <div className=" absolute border border-[#333333] rounded-full h-[450px] w-[450px] md:h-[500px] md:w-[500px] md:mt-52 mt-48" />
      <div className=" absolute border border-cyan-100 rounded-full h-[600px] w-[600px] md:h-[650px] md:w-[650px] md:mt-52 mt-48 animate-pulse" />
      <div className=" absolute border border-[#333333] rounded-full h-[700px] w-[700px] md:h-[800px] md:w-[800px] md:mt-52 mt-48" />
    </motion.div>
  );
}

export default BackgroundCircles;
