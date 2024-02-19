import React from "react";

import ExperienceCard from "./ExperienceCard";

function Experience() {
  const experienceData = [
    {
      id: 1,
      company: "Archer Daniels Midland | ADM",
      position: "IT Analyst & 2nd Line Support",
      date: "OCT 22 - SEP 23",
      description: "desc",
      image: "https://i.ibb.co/N3tfh74/ADM.jpg",
    },
    {
      id: 2,
      company: "Astreya | Google",
      position: "Inventory Management Tech & 1st Line Support",
      date: "JULY 21 - OCT 22",
      description:
        "Designed and implemented a dynamic image carousel using HTML, CSS, and JavaScript. This versatile solution seamlessly adjusts to different devices, showcasing a blend of creativity and technical skill. Perfect for enhancing user engagement and visual appeal on web projects.",
      image: "https://i.ibb.co/rpPhkcm/google.png",
    },
  ];
  const [adm, astreya] = [experienceData[0], experienceData[1]];
  return (
    <div className="min-h-screen flex flex-col relative text-center md:text-center md:flex-row max-w-7xl px-6 md:px-18 justify-evenly mx-auto items-center">
      <h2 className="absolute top-1 md:top-24 uppercase tracking-[20px] text-gray-500 text-2xl md:mt-0 w-full md:w-auto">
        Experience
      </h2>
      <div className="scrolling-container w-full mt-24 md:mt-24 flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 md:overflow-x-auto md:snap-mandatory md:snap-x">
        <ExperienceCard
          img={adm.image}
          position={adm.position}
          date={adm.date}
          description={adm.description}
        />
        <ExperienceCard
          img={astreya.image}
          position={astreya.position}
          date={astreya.date}
          description={astreya.description}
        />
      </div>
    </div>
  );
}

export default Experience;
