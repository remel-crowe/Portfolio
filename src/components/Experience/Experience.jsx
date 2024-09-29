import React, { useRef } from "react";
import Details from "./newEx";
import { motion, useScroll } from "framer-motion";

function Experience() {
  const experienceData = [
    {
      id: 1,
      company: "Digital Futures",
      position: "Software Engineering Trainee",
      date: "April 2024 - August 2024",
      description: "description",
    },
    {
      id: 2,
      company: "Searchsavvy",
      position: "SEO Executive",
      date: "2023 - Present",
      description:
        "Actively research, develop, and executes SEO campaigns to boost client search engine rankings across diverse industries. Proficient in optimizing client websites through meticulous on-page and technical SEO strategies, prioritizing enhanced user experience. Successfully elevated organic search rankings from page 4 to page 1 for high-competition keywords, resulting in a notable 32% increase in organic web traffic for a local trades business. Demonstrated ability to deliver impactful results in dynamic SEO environments.",

      link: "",
    },
    {
      id: 3,
      company: "ADM",
      position: "IT Analyst",
      date: "October 2022 - September 2023",
      description:
        "Core member of the IT team handling all IT needs accross UK offices and two international operations. Successfully restructured and ran a national refresh project and developed automation scripts as part of this effort. Involved with UI/UX updates on the user portal and in charge of redisignning training material.",
    },
    {
      id: 4,
      company: "Astreya - Google",
      position: "Technical Support",
      date: "July 2021 - October 2022",
      description:
        "Provided expertise within laptop and desktop support accross multiple platforms: MacOS, Linux, Windows, iOS. Involved with inventory lifecycle management from start to end. Utilised SAP(S4) to resolve customer requests and issues within SLA targets.",
    },
  ];
  const [Digitalfutures, Searchsavvy, adm, astreya] = [
    experienceData[0],
    experienceData[1],
    experienceData[2],
    experienceData[3],
  ];
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="flex flex-col items-center">
      <h2 className="uppercase tracking-[20px] text-gray-500 text-2xl w-full text-center mb-32">
        Experience
      </h2>

      <ul className="w-full lg:w-[70%] flex flex-col items-start justify-between ml-4">
        <Details
          position={Digitalfutures.position}
          company={Digitalfutures.company}
          companyLink={Digitalfutures.link}
          time={Digitalfutures.date}
          address="Online"
          work={Digitalfutures.description}
        />
        <Details
          position={Searchsavvy.position}
          company={Searchsavvy.company}
          companyLink={Searchsavvy.link}
          time={Searchsavvy.date}
          address="Remote, UK"
          work={Searchsavvy.description}
        />
        <Details
          position={adm.position}
          company={adm.company}
          companyLink={adm.link}
          time={adm.date}
          address="Erith, UK"
          work={adm.description}
        />
        <Details
          position={astreya.position}
          company={astreya.company}
          companyLink={astreya.link}
          time={astreya.date}
          address="London, UK"
          work={astreya.description}
        />
      </ul>
    </div>
  );
}

export default Experience;
