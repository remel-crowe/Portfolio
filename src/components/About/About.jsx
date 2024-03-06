import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="h-screen flex flex-col relative text-center max-w-7xl px-2 md:px-18 justify-evenly mx-auto items-center md:text-left md:flex-row my-24"
      >
        <h2 className=" absolute uppercase top-1 tracking-[15px] md:top-24 md:tracking-[20px] text-gray-500 text-2xl ">
          About
        </h2>
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
          src="https://i.ibb.co/vmHYkGt/IMG-3125.jpg"
          className=" w-40 h-40 mt-[170px] md:mt-[120px] flex-shrink-0 rounded-full object-cover md:rounded-lg md:w-[300px] md:h-[400px] xl:w-[500px] xl:h-[600px]"
        ></motion.img>
        <div className="space-y-5 md:space-y-10 px-0 md:px-10 mb-[90px] md:pt-20 lg:mt-20">
          <h4 className="text-4xl">
            Heres a{" "}
            <span className="  text-xl underline text-yellow-400 hover:text-4xl hover:transition duration-300">
              little
            </span>{" "}
            Introduction
          </h4>
          <p className="font-poppins text-md md:text-lg text-slate-200 ">
            Hey there! 👋 I&apos;m Remel, a frontend engineer passionate about
            crafting captivating online experiences. After nearly 4 years in the
            IT industry, I decided it was time for a change and made the bold
            decision to transition into software development. It&apos;s a move
            fueled by passion, curiosity and a desire to challenge myself in new
            ways.
          </p>
          <p className="font-poppins text-md md:text-lg text-slate-200 ">
            While it hasn&apos;t been the easiest transition, it has surely been
            fun! Some days I wake up and crunch through refactoring a project
            and others I forget how to center a div. But I guess its all part of
            the process. I&apos;m excited for the opportunities that lie ahead
            and I&apos;m actively looking for a junior position.
          </p>
          <p className="font-poppins text-md md:text-lg text-slate-200 ">
            Outside of the workplace, I love to{" "}
            <a
              href="http://polarsteps.com/Remelcrowe"
              className="text-yellow-400 hover:underline font-bold"
              target="_blank"
            >
              travel
            </a>{" "}
            and Im on a mission to visit 100 countries. My last trip was a 3
            month solo adventure through southeast Asia. Click 'travel' to check
            it out! And yes... I did eat a scorpion.
          </p>
        </div>
      </motion.div>
    </>
  );
}

export default About;
