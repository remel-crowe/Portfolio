import React from "react";
import { motion } from "framer-motion";
import { FaReact } from "react-icons/Fa";

function ExperienceCard() {
  return (
    <article
      className="flex flex-col rounded-lg items-left space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center p-10 bg-[#292929]
                        hover:opacity-100 opacity-50 cursor-pointer transition-opacity duration-200 overflow-hidden snap-mandatory h-[700px]"
    >
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="h-32 w-32 rounded-full object-cover xl:h-[200px] xl:w-[200px] object-center relative mx-auto"
        src="https://i.ibb.co/rpPhkcm/google.png"
      ></motion.img>
      <div className=" px-0 md:px-10 text-left">
        <h4 className="text-4xl font-light">Inventory Technician</h4>
        <p className="font-bold text-2xl mt-1">
          Google - Contracted by Astreya Partners
        </p>
        <div className="flex space-x-2 my-2">
          <FaReact className="h-10 rounded-full" />
          <FaReact className="h-10 rounded-full" />
          <FaReact className="h-10 rounded-full" />
        </div>
        <p className="uppercase py-5 text-white ">07/21 - 10/22</p>
        <ul className="list-disc space-y-4 ml-5 text-lg ">
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
