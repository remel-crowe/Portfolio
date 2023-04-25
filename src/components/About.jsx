import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

function About() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="h-screen flex flex-col relative text-center max-w-7xl px-18 justify-evenly mx-auto items-center md:text-left md:flex-row"
      >
        <h3 className="absolute uppercase top-10 tracking-[15px] md:top-24 md:tracking-[20px] text-gray-500 text-2xl">
          About
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
          className=" w-40 h-40 mt-[300px] md:mt-[200px] md:-mb-15  flex-shrink-0 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
        ></motion.img>
        <div className="space-y-6 md:space-y-10 px-0 md:px-10 mb-[100px]">
          <h4 className="text-4xl">
            Heres a{" "}
            <span className="  text-xl underline text-yellow-400 hover:text-4xl hover:transition duration-300">
              little
            </span>{" "}
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
            Since then I've managed to start a{" "}
            <a
              href="http://instagram.com/repairshack"
              className="text-cyan-400 hover:underline"
            >
              business
            </a>
            , become more obsessed with crypto and create a few projects -
            including this webpage! Check them out&nbsp;
            <a href="#project-section" className="animate-pulse">
              below!
            </a>
          </p>
        </div>
      </motion.div>
    </>
  );
}

export default About;
