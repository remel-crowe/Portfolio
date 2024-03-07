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
          className=" w-40 h-40 mt-[180px] md:mt-[120px] flex-shrink-0 rounded-full object-cover md:rounded-lg md:w-[300px] md:h-[400px] xl:w-[500px] xl:h-[600px]"
        ></motion.img>
        <div className="space-y-5 md:space-y-10 px-0 md:px-10 mb-[90px] md:pt-20 lg:mt-20">
          <h4 className="text-4xl">
            Heres a{" "}
            <span className="  text-xl underline text-yellow-400 hover:text-4xl hover:transition duration-300">
              little
            </span>{" "}
            Introduction
          </h4>
          <p className=" text-xs md:text-lg text-slate-200 ">
            Hey there! 👋 I&apos;m Remel, a frontend engineer passionate about
            crafting captivating online experiences. After nearly 4 years in the
            IT industry, I decided it was time for a change and made the bold
            decision to transition into software development. It&apos;s a move
            fueled by passion, curiosity and a desire to challenge myself in new
            ways.
          </p>
          <p className=" text-xs md:text-lg text-slate-200 ">
            Well, talk about a rollercoaster ride! One day, I&apos;m deep diving
            into project refactoring and the next i&apos;m scratching my head
            over how to center a div. But hey, I guess its all part of the
            process, right? I can&apos;t wait to see whats around the corner for
            me and im on the lookout for that junior position!
          </p>
          <p className=" text-xs md:text-lg text-slate-200 ">
            When i&apos;m not at work, i&apos;m probably on the move, exploring
            different corners of the world! My Goal? To visit 100 countries! My
            latest adventure? A Three-month solo trip through Southeast Asia.
            Curious? Click{" "}
            <a
              href="http://polarsteps.com/Remelcrowe"
              className="text-yellow-400 hover:underline font-bold"
              target="_blank"
            >
              here
            </a>{" "}
            to dive into the adventure. Oh, and by the way - Yes, I did eat a
            scorpion.
          </p>
        </div>
      </motion.div>
    </>
  );
}

export default About;
