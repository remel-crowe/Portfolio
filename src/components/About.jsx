import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaReact } from "react-icons/Fa";
import { DiJavascript, DiCss3 } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";

function About() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="h-screen flex flex-col relative text-center max-w-7xl px-18 justify-evenly mx-auto items-center md:text-left md:flex-row"
      >
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
          &lt;About / &gt;
        </h3>
        <motion.img
          initial={{
            x: -200,
            opacity: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          src="https://i.ibb.co/nzbSNjf/IMG-3125.jpg"
          className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
        ></motion.img>
        <div className="space-y-10 px-0 md:px-10">
          <h4 className="text-4xl">
            Heres a <span className="text-xl underline">little</span>{" "}
            Introduction
          </h4>
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
            webpage! Check them out{" "}
            <a href="#" className="animate-pulse">
              below!
            </a>
          </p>
        </div>
      </motion.div>
      <motion.div
        initial={{
          y: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          y: -200,
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
      ;
    </>
  );
}

export default About;
