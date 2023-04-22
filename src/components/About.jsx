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
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
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
          className=" mt-10 -mb-15 md:mb-0 flex-shrink-0 w-60 h-70 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
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
    </>
  );
}

export default About;
