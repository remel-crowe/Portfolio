import React from "react";
import ExperienceCard1 from "./experience/ExperienceCard1";
import ExperienceCard2 from "./experience/ExperienceCard2";

function Experience() {
  return (
    <div className="min-h-screen flex flex-col relative text-center md:text-center md:flex-row max-w-7xl px-6 md:px-18 justify-evenly mx-auto items-center">
      <h1 className="absolute top-1 md:top-24 uppercase tracking-[20px] text-gray-500 text-2xl md:mt-0 w-full md:w-auto">
        Experience
      </h1>
      <div className="w-full mt-24 md:mt-24 flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 md:overflow-x-auto">
        <ExperienceCard2 />
        <ExperienceCard1 />
      </div>
    </div>
  );
}

export default Experience;
