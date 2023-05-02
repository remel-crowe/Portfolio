import React from "react";
import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa";

function ExperienceCard() {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-4 md:items-left flex-shrink-0 w-full max-w-[500px] md:max-w-[600px] xl:max-w-[900px] p-5 md:p-10 bg-[#292929] hover:opacity-100 opacity-50 cursor-pointer transition-opacity duration-200 overflow-hidden">
      {" "}
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="h-24 w-24 md:h-32 md:w-32 object-cover object-center mx-auto rounded-full"
        src="https://i.ibb.co/rpPhkcm/google.png"
      />
      <div className="px-2 md:px-10 text-center md:text-left">
        <h4 className="text-lg md:text-4xl font-light">Inventory Technician</h4>
        <p className="font-bold text-md md:text-2xl mt-1">
          Google - Contracted by Astreya Partners
        </p>
        <div className="flex space-x-1 md:space-x-2 my-2">
          <FaReact className="h-4 md:h-10 rounded-full" />
          <FaReact className="h-4 md:h-10 rounded-full" />
          <FaReact className="h-4 md:h-10 rounded-full" />
        </div>
        <p className="uppercase py-1 md:py-5 text-white text-sm md:text-lg">
          07/21 - 10/22
        </p>
        <ul className="list-disc space-y-1 md:space-y-4 ml-2 md:ml-5 text-sm md:text-lg">
          <li>SAP</li>
          <li>LINUX</li>
          <li>IOS</li>
          <li>GUTS - Ticketing System</li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
