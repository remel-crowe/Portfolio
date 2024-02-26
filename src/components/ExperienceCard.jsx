import React from "react";
import { motion } from "framer-motion";
import { FaPython, FaApple } from "react-icons/fa";
import { VscFileSubmodule } from "react-icons/vsc";

function ExperienceCard({ img, position, company, date, description }) {
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
      className="flex flex-col overflow-x-hidden rounded-lg items-center w-screen space-y-4 md:items-left flex-shrink-0 max-w-[500px] md:max-w-[600px] xl:max-w-[900px] p-5 md:p-10 bg-[#292929] cursor-pointer md:snap-center lg:max-h-[500px]"
    >
      <img
        className="h-24 w-24 md:h-32 md:w-32 object-cover mx-auto rounded-md"
        src={img}
        alt="Company Logo"
      />
      <div className="px-2 md:px-10 text-center md:text-center">
        <h4 className="text-lg md:text-3xl font-light">{position}</h4>
        <p className="font-bold text-md md:text-2xl mt-1">{company}</p>
        <div className="flex space-x-1 md:space-x-2 my-2 justify-center">
          <FaPython className="h-4 md:h-10 md:w-6 rounded-full" />
          <FaApple className="h-4 md:h-10 md:w-6 rounded-full" />
          <VscFileSubmodule className="h-4 md:h-10 md:w-6 rounded-full" />
        </div>
        <p className="uppercase py-1 md:py-5 text-white text-sm md:text-lg">
          {date}
        </p>
        <div className=" ml-2 md:ml-5 text-sm md:text-lg">{description}</div>
      </div>
    </motion.article>
  );
}

export default ExperienceCard;
