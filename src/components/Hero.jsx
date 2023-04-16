import React from "react";
import { motion } from "framer-motion";

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
      <div className="flex flex-col space-y-8 items-center justify-center ">
        <BackgroundCircles />
        <h1 className=" dark:text-white py-2 font-unbounded text-6xl bg-clip-text text-white z-1">
          Remel Straker - Crowe
        </h1>
        <h3 className=" text-cyan-500 text-xl font-poppins">
          <span className="">{text}</span>
          <Cursor cursorColor="#F7AB8A" />
        </h3>
      </div>
    </div>
  );
}

export default Hero;
