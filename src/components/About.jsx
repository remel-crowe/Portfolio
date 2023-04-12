import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import bitmoji from "/public/bitmoji.png";
import { FaReact } from "react-icons/Fa";
import { DiJavascript, DiCss3 } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";

function About() {
  return (
    <div className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-18 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ x: 0 }}
        viewport={{ once: true }}
        src="https://i.ibb.co/nzbSNjf/IMG-3125.jpg"
      ></motion.img>
    </div>
  );
}

export default About;
