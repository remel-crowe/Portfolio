import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="min-h-screen flex flex-col relative text-center max-w-7xl px-6 md:px-18 justify-evenly mx-auto items-center md:text-left md:flex-row"
      >
        <h3 className=" absolute uppercase top-1 tracking-[15px] md:top-24 md:tracking-[20px] text-gray-500 text-2xl">
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
          src="https://i.ibb.co/F6bW78t/IMG-0897.jpg"
          className=" w-40 h-40 mt-[70px] md:mt-[100px] flex-shrink-0 rounded-full object-cover md:rounded-lg md:w-[300px] md:h-[400px] xl:w-[500px] xl:h-[600px]"
        ></motion.img>
        <div className="space-y-5 md:space-y-10 px-0 md:px-10 mb-[100px] md:pt-20">
          <h4 className="text-4xl">
            Heres a{" "}
            <span className="  text-xl underline text-yellow-400 hover:text-4xl hover:transition duration-300">
              little
            </span>{" "}
            Introduction
          </h4>
          <p className="font-poppins text-sm md:text-md text-slate-200 ">
            Hi visitor👋, my name is Remel and I&apos;m a frontend engineer with
            a strong interest in developing engaging and meaningful online
            experiences, whether it be through SEO, Content Creation or a
            mixture of both.
          </p>
          <p className="font-poppins text-sm md:text-md text-slate-200 ">
            My interest in web development sparked while in an IT position
            within the Google offices. Being surrounded by hundreds of software
            developers 5 days a week has its way of turning you into one... Or
            at least a wannabe 😁
          </p>
          <p className="font-poppins text-sm md:text-md text-slate-200 ">
            Since then, I&apos;ve managed to start a{" "}
            <a
              href="http://instagram.com/repairshack"
              className="text-cyan-400 hover:underline"
              target="_blank"
            >
              business
            </a>
            , become more obsessed with crypto, travel to a few new{" "}
            <a
              href="http://polarsteps.com/Remelcrowe"
              className="text-green-400 hover:underline"
              target="_blank"
            >
              countries
            </a>{" "}
            and create a few projects — including this webpage! Check them
            out&nbsp;
            <a
              href="#project-section"
              className="animate-pulse text-yellow-400"
            >
              below!
            </a>
          </p>
        </div>
      </motion.div>
    </>
  );
}

export default About;
