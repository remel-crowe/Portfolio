import React from "react";

import ExperienceCard from "./ExperienceCard";

function Experience() {
  const experienceData = [
    {
      id: 1,
      company: "Archer Daniels Midland | ADM",
      position: "IT Analyst & 2nd Line Support",
      date: "OCT 22 - SEP 23",
      description: (
        <>
          • Supervised the introduction of new devices to networks utilising MS
          Server and Active Directory
          <br />
          • Innovatively developed scripts to streamline and automate the
          imaging process for new PCs and laptops. Increased efficiency and
          accuracy while minimizing manual intervention.
          <br />
          • Utilised IBM Maximo to orchestrate and oversee the procurement
          process for all UK offices and international operations in Kenya and
          Ireland.
          <br />
          • 2nd Line Support through the use of ServiceNow. Resolved intricate
          technical issues promptly, contributing to the overall efficiency of
          IT support services.
          <br />• Directed the procurement procedure and contributed to network
          configurations for a new operational site.
        </>
      ),
      image: "https://i.ibb.co/N3tfh74/ADM.jpg",
    },
    {
      id: 2,
      company: "Astreya | Google",
      position: "Inventory Management Tech & 1st Line Support",
      date: "JULY 21 - OCT 22",
      description: (
        <>
          • Delivered comprehensive support for laptops and desktops across
          diverse platforms, including Windows, MacOS, Linux, and ChromeOS.
          Employed proactive troubleshooting strategies to ensure uninterrupted
          functionality and user satisfaction.
          <br />
          • Inventory life cycle management: receiving assets, accessories,
          imaging laptops & desktops, order fulfillment.
          <br />• Utilising SAP (S4) for efficient asset management and an in
          house ticketing system to fulfil and resolve customer requests,
          consistently meeting SLA targets.
        </>
      ),
      image: "https://i.ibb.co/rpPhkcm/google.png",
    },
  ];
  const [adm, astreya] = [experienceData[0], experienceData[1]];
  return (
    <div className="min-h-screen flex flex-col relative text-center md:text-center md:flex-row max-w-7xl px-6 md:px-18 justify-evenly mx-auto items-center">
      <h2 className="absolute top-1 md:top-21 uppercase tracking-[20px] text-gray-500 text-2xl md:mt-0 w-full md:w-auto">
        Experience
      </h2>
      <div className="scrolling-container overflow-x-auto w-full mt-24 md:mt-24 flex flex-row space-x-8 md:space-x-8 md:overflow-x-auto md:snap-mandatory md:snap-x">
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
