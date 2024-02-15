import React from "react";
import { motion } from "framer-motion";
import { SiSap, SiGooglemeet } from "react-icons/si";
import { FcLinux } from "react-icons/fc";

function ExperienceCard() {
  const cardVariants = {
    initial: {
      y: -100,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.2,
        delay: 0.5, // Add a delay to the animation
      },
    },
  };

  return (
    <motion.article
      variants={cardVariants}
      initial="initial"
      animate="animate"
      className="flex flex-col rounded-lg items-center space-y-4 md:items-left flex-shrink-0 w-full max-w-[500px] md:max-w-[600px] xl:max-w-[900px] p-5 md:p-10 bg-[#292929] hover:opacity-100 opacity-50 cursor-pointer transition-opacity duration-200 overflow-hidden"
    >
      <img
        className="h-24 w-24 md:h-32 md:w-32 object-cover object-center mx-auto rounded-full"
        src="https://i.ibb.co/rpPhkcm/google.png"
        alt="Google Logo"
      />
      <div className="px-2 md:px-10 text-center md:text-left">
        <h4 className="text-lg md:text-4xl font-light">Inventory Technician</h4>
        <p className="font-bold text-md md:text-2xl mt-1">
          Google - Contracted by Astreya Partners
        </p>
        <div className="flex space-x-1 md:space-x-2 my-2">
          <SiSap className="h-5 md:h-10 md:w-7 rounded-full text-blue-400" />
          <FcLinux className="h-5 md:h-10 md:w-7 rounded-full" />
          <SiGooglemeet className="h-5 md:h-10 md:w-7 rounded-full" />
        </div>
        <p className="uppercase py-1 md:py-5 text-white text-sm md:text-lg">
          July 2021 - October 2022
        </p>
        <ul className="list-disc space-y-1 md:space-y-4 ml-2 md:ml-5 text-sm md:text-lg">
          <li>SAP</li>
          <li>LINUX</li>
          <li>IOS</li>

          <li>GUTS - Ticketing System</li>
        </ul>
      </div>
    </motion.article>
  );
}

export default ExperienceCard;
