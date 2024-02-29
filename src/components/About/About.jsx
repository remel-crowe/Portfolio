import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="h-screen flex flex-col relative text-center max-w-7xl px-2 md:px-18 justify-evenly mx-auto items-center md:text-left md:flex-row"
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
          className=" w-40 h-40 mt-[70px] md:mt-[120px] flex-shrink-0 rounded-full object-cover md:rounded-lg md:w-[300px] md:h-[400px] xl:w-[500px] xl:h-[600px]"
        ></motion.img>
        <div className="space-y-5 md:space-y-10 px-0 md:px-10 mb-[90px] md:pt-20 lg:mt-20">
          <h4 className="text-4xl">
            Heres a{" "}
            <span className="  text-xl underline text-yellow-400 hover:text-4xl hover:transition duration-300">
              little
            </span>{" "}
            Introduction
          </h4>
          <p className="font-poppins text-sm md:text-md text-slate-200 ">
            Hey there! 👋 I&apos;m Remel, a frontend engineer passionate about
            crafting captivating online experiences. My expertise lies in
            developing impactful solutions that seamlessly blend frontend
            development with elements of SEO and content creation. Whether
            it&apos;s optimizing for search engines or curating engaging
            content, I thrive on leveraging my skills to create meaningful
            digital journeys.
          </p>
          <p className="font-poppins text-sm md:text-md text-slate-200 ">
            My fascination with web development ignited during my time in an IT
            role at Google offices. Surrounded by a bustling community of
            software developers day in and day out, it was hard not to catch the
            bug &#8208; or at least aspire to! 😁
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
