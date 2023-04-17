import React from "react";
import { motion } from "framer-motion";
import { FaReact } from "react-icons/Fa";
import { DiJavascript, DiCss3 } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

function Hero() {
  const [text, count] = useTypewriter({
    words: ["Web Developer", "Guy-who-loves-the-gym.jsx", "Pronounced: Rem-el"],
    loop: true,
    delaySpeed: 1500,
  });
  return (
    <div className=" relative h-screen flex flex-col justify-center">
      <motion.nav
        initial={{ x: -100 }}
        transition={{ duration: 1.5 }}
        whileInView={{ x: 0 }}
        className=" absolute top-0 py-10 mb-12"
      >
        <h1 className="text-xl font-raleway text-white">remcrw.dev</h1>
      </motion.nav>
      <div className="flex flex-col space-y-8 items-center justify-center text-center ">
        <BackgroundCircles />
        <h1 className=" dark:text-white py-2 font-unbounded text-6xl bg-clip-text text-white z-1">
          Remel Straker - Crowe
        </h1>
        <h3 className=" text-cyan-500 text-xl font-poppins">
          <span className="">{text}</span>
          <Cursor cursorColor="#F7AB8A" />
        </h3>
      </div>
      <motion.div
        initial={{
          y: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          y: 100,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex justify-center"
      >
        <div className="flex items-center gap-5">
          <FaReact className="text-cyan-500 w-7 h-7" />
          <DiJavascript className="text-yellow-500 w-7 h-7" />
          <DiCss3 className="text-orange-500 w-7 h-7" />
          <SiTailwindcss className="text-cyan-400 w-7 h-7" />
        </div>
      </motion.div>
    </div>
  );
}

export default Hero;
