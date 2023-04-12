import React from "react";
import Image from "next/image";
import bitmoji from "/public/bitmoji.png";
import { motion } from "framer-motion";
import { FaReact } from "react-icons/Fa";
import { DiJavascript, DiCss3 } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";

function About() {
  return (
    <div className="h-screen">
      <h1 className=" font-poppins px-7 text-2xl mb-6 text-stone-300">
        <span className="text-cyan-500">01.</span> About Me
      </h1>
      <div
        id="heh"
        className="grid grid-flow-col grid-cols-2 align-middle justify-center px-7"
      >
        <div className="flex flex-col gap-3">
          <p className="font-poppins text-md text-stone-300 ">
            Hi visitor👋, my name is Remel and im an aspiring frontend engineer
            with a strong interest in developing online presences, wether it be
            through SEO, Content Creation or a mixture of both.
          </p>
          <p className="font-poppins text-md text-stone-300 ">
            My interest in web development sparked while in an IT position
            within the Google offices. Being surrounded by hundreds of software
            developers 5 days a week has it's way of turning you into one.. Or
            atleast a wannabe 😁
          </p>
          <p className="font-poppins text-md text-stone-300 ">
            Since then I've managed to create a few projects - including this
            webpage! Check them out below!
          </p>
        </div>
        <div id="img" className="flex justify-center">
          <Image src={bitmoji} className="" alt="me" />
        </div>
      </div>
      <div
        // initial={{
        //   y: 500,
        //   opacity: 0,
        //   scale: 0.5,
        // }}
        // animate={{
        //   y: 0,
        //   opacity: 1,
        //   scale: 1,
        // }}
        // transition={{
        //   duration: 2.5,
        // }}
        className="flex justify-center"
      >
        <div className="flex items-center gap-5">
          <FaReact className="text-cyan-500 w-7 h-7" />
          <DiJavascript className="text-yellow-500 w-7 h-7" />
          <DiCss3 className="text-orange-500 w-7 h-7" />
          <SiTailwindcss className="text-cyan-400 w-7 h-7" />
        </div>
      </div>
    </div>
  );
}

export default About;
