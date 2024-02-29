import React, { useRef } from "react";
import Details from "./newEx";
import { motion, useScroll } from "framer-motion";

function Experience() {
  const experienceData = [
    {
      id: 1,
      company: "Searchsavvy",
      position: "SEO Executive",
      date: "2023 - Present",
      description:
        "Actively research, develop, and executes SEO campaigns to boost client search engine rankings across diverse industries. Proficient in optimizing client websites through meticulous on-page and technical SEO strategies, prioritizing enhanced user experience. Successfully elevated organic search rankings from page 4 to page 1 for high-competition keywords, resulting in a notable 32% increase in organic web traffic for a local trades business. Demonstrated ability to deliver impactful results in dynamic SEO environments.",

      link: "",
    },
    {
      id: 2,
      company: "ADM",
      position: "IT Analyst",
      date: "October 2022 - September 2023",
      description:
        "Core member of the IT team handling all IT needs accross UK offices and two international operations. Successfully restructured and ran a national refresh project and developed automation scripts as part of this effort. Involved with UI/UX updates on the user portal and in charge of redisignning training material.",
    },
    {
      id: 3,
      company: "Astreya - Google",
      position: "Technical Support",
      date: "July 2021 - October 2022",
      description:
        "Provided expertise within laptop and desktop support accross multiple platforms: MacOS, Linux, Windows, iOS. Involved with inventory lifecycle management from start to end. Utilised SAP(S4) to resolve customer requests and issues within SLA targets.",
    },
    {
      id: 4,
      company: "Repairshack",
      position: "Lead Technician",
      date: "July 2019 - October 2023",
      description:
        "Delivering on-site technical support, handling hardware device repairs and providing troubleshooting solutions. Additionally, efficiently managed and supported a team of couriers responsible for transporting customer devices. By implementing a Just-in-Time (JIT) model, I effectively reduced storage overheads for the business. Furthermore, I took charge of organizing and leading training courses for a group of over 20 individuals, ensuring they were equipped with the necessary skills and knowledge.",
    },
  ];
  const [Searchsavvy, adm, astreya, repairshack] = [
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

      {/* <div ref={ref} className="w-[100%] md:w-[90%] mx-auto relative"> */}
      {/* <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute top-0 left-8 w-[4px] h-full bg-yellow-400 origin-top sm:hidden"
        /> */}

      <ul className="w-full lg:w-[70%] flex flex-col items-start justify-between ml-4">
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
        <Details
          position={repairshack.position}
          company={repairshack.company}
          companyLink={repairshack.link}
          time={repairshack.date}
          address="London, UK"
          work={repairshack.description}
        />
      </ul>
    </div>
  );
}

export default Experience;
