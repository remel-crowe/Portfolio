import React from "react";
import ExperienceCard1 from "./experience/ExperienceCard1";
import ExperienceCard2 from "./experience/ExperienceCard2";

function Experience() {
  return (
    <div className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-18 justify-evenly mx-auto items-center">
      <h1 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h1>
      <div className="w-full flex space-x-20 p-10 overflow-x-scroll snap-x snap-mandatory snap-center">
        <ExperienceCard1 />
        <ExperienceCard2 />
      </div>
    </div>
  );
}

export default Experience;
