import React from "react";
import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa";
import { DiJavascript, DiCss3 } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

function Hero() {
  const [text, count] = useTypewriter({
    words: [
      "Pronounced: Rem-el",
      "Web Developer",
      "Guy-who-loves-travelling.jsx",
    ],
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
        <h1 className="text-xl font-raleway text-yellow-400">remcrw</h1>
      </motion.nav>
      <div className="flex flex-col space-y-8 items-center justify-center text-center ">
        <BackgroundCircles />
        <h1 className=" dark:text-white py-2 font-unbounded text-6xl bg-clip-text text-white z-1">
          Remel Straker - Crowe
        </h1>
        <h3 className=" text-yellow-400 text-xl font-poppins">
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
        <div className="flex items-center gap-5 ">
          <FaReact className="text-cyan-500 w-7 h-7" />
          <DiJavascript className="text-yellow-500 w-7 h-7" />
          <DiCss3 className="text-orange-500 w-7 h-7 z-20" />
          <SiTailwindcss className="text-cyan-400 w-7 h-7" />
        </div>
      </motion.div>
      <motion.img
        src="https://i.ibb.co/VpjGXsS/20230424-192023000-i-OS-removebg-preview.png"
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 2.5 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="hidden absolute md:block md:-bottom-[170px] md:-right-10 md:w-[300px] "
      ></motion.img>
    </div>
  );
}

export default Hero;
