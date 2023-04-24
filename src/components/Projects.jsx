import React from "react";
import Image from "next/image";

function Projects() {
  const projects = [1, 2, 3];
  return (
    <div className=" scrollbar scrollbar-track-gray-500 scrollbar-thumb-yellow-400 scrollbar-thin h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-18 justify-evenly mx-auto items-center z-0">
      <h3 className=" absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        &lt; Projects /&gt;
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden z-20">
        {projects.map((project) => (
          <div className="w-full flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
            <img
              src="https://i.ibb.co/R71Wwfn/travel-ecommerce-app-mockup.png"
              alt="project"
              className="rounded-lg w-[100px] h-[100px]"
            />
            <div>
              <h4>
                Project {project} of {projects.length} : Telegram Crypto Bot
              </h4>
              <p>some shit about the project</p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-screen absolute top-[30%] bg-[#797371]/10  h-[500px] -skew-y-12"></div>
      <div className="absolute w-[250px] h-[250px] bottom-[150px] -left-[200px]">
        <img
          src="https://i.ibb.co/VpjGXsS/20230424-192023000-i-OS-removebg-preview.png"
          alt="20230424-192023000-i-OS-removebg-preview"
          className="hidden"
        ></img>
      </div>
    </div>
  );
}

export default Projects;
