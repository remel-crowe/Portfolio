import React from "react";
import Image from "next/image";

function Projects() {
  const projects = [1, 2, 3, 4, 5];
  return (
    <div className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-18 justify-evenly mx-auto items-center z-0">
      <h3 className=" absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        &lt; Projects /&gt;
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        {projects.map((project) => (
          <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
            <img src="/public/consulting.png" alt="" />
            <div>
              <h4>Project 1 of 3 : Clone</h4>
              <p>some shit about the project</p>
            </div>
          </div>
        ))}
        {/* Projects */}
        {/* Projects */}
        {/* Projects */}
      </div>

      <div className="w-full absolute top-[30%] bg-[#797371]/10 left-0 h-[500px] -skew-y-12"></div>
    </div>
  );
}

export default Projects;
