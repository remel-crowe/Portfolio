import React from "react";

import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

function Hero() {
  const [text, count] = useTypewriter({
    words: ["Web Developer", "Guy-who-loves-the-gym.jsx", "Pro Gamer?"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col">
      <nav className="py-10 mb-12 flex justify-between">
        <h1 className="text-xl font-raleway text-white">remcrw.dev</h1>
      </nav>
      <div className="flex flex-col space-y-8 items-center justify-center m-auto">
        <BackgroundCircles />
        <h1 className=" dark:text-white py-2 font-unbounded text-6xl bg-clip-text text-white">
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
