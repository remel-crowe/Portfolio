import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { VscLinkExternal } from "react-icons/Vsc";
import { useState, useEffect } from "react";
import logo from "../assets/mockup.jpg";
import Circles from "./circles";

function Projects() {
  return (
    <div className="flex flex-col items-center relative md:mb-10">
      <h1 className="absolute top-24 mt-12 md:top-24 uppercase tracking-[15px] md:tracking-[20px] text-gray-500 text-lg md:text-2xl">
        Projects
      </h1>
      <ul className="scrolling-container relative top-[300px] flex items-center overflow-x-scroll sm:gap-x-[1000px] w-full snap-x snap-mandatory ">
        <li className="scrolling-item flex flex-col md:flex-row items-center snap-center">
          <div className="project-content z-10 w-full md:w-[550px] p-4 md:p-8 rounded-lg text-center md:text-left">
            <p className="text-yellow-400">Featured Project</p>
            <h3 className="text-2xl font-bold mt-2 md:mt-4">
              <a href="#" className="text-white">
                Telegram Crypto Bot
              </a>
            </h3>
            <div className="project-description mt-4 bg-gray-600 text-gray-200 p-2 md:p-4 shadow-lg rounded-md">
              <p className="text-xs md:text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis omnis animi impedit eum. Quia itaque omnis, culpa
                voluptates saepe nostrum consectetur, inventore aliquam eaque
                fuga totam! In minus doloribus consectetur?
              </p>
            </div>
            <ul className="project-tech-list mt-4 flex flex-wrap text-gray-200 font-poppins text-xs md:text-sm">
              <li className="mb-2 md:mb-0 md:mr-4">VS Code</li>
              <li className="mb-2 md:mb-0 md:mr-4">Telegram</li>
              <li className="mb-2 md:mb-0 md:mr-4">Python</li>
              <li className="mb-2 md:mb-0">CoinGecko API</li>
            </ul>
            <div className="project-links mt-4 flex space-x-3">
              <a href="#" className="text-gray-100">
                <AiFillGithub className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-100">
                <VscLinkExternal className="w-5 h-6" />
              </a>
            </div>
          </div>
          <div className="project-image z-0 w-full md:w-[350px] h-[300px] relative mt-4 md:mt-0">
            <img
              src="https://i.ibb.co/wSv13y9/hero.png"
              alt="Crypto bot"
              className="object-cover w-full h-full object-fill rounded-sm"
            />
            <div className="cursor-pointer absolute w-full h-full inset-0 bg-gray-700 opacity-30 transition-opacity duration-300 hover:opacity-0"></div>
          </div>
        </li>

        <li className="scrolling-item flex items-center relative snap-center mx-auto">
          <div className="project-image z-0 w-[350px] h-[300px] -mr-[150px] relative">
            <img
              src="https://i.ibb.co/zFKBsXF/mockup.png"
              alt="This Portfolio"
              className="w-full h-full"
            />
            <div className=" cursor-pointer absolute w-[350px] h-[300px] inset-0 bg-gray-700 opacity-30 transition-opacity duration-300 hover:opacity-0"></div>
          </div>

          <div className="project-content z-10 w-[550px] h-[350px] p-8 rounded-lg ">
            <p className="text-yellow-400 text-right">Featured Project</p>
            <h3 className="text-2xl font-bold text-right">
              <a href="#" className="text-white">
                This Portfolio
              </a>
            </h3>
            <div className="project-description mt-4 bg-gray-900 bg-opacity-80 text-gray-200 p-4 shadow-lg ">
              <p></p>
            </div>
            <ul className="absolute project-tech-list inline-flex mt-4 space-x-4 text-gray-200 font-poppins text-sm right-10">
              <li>React</li>
              <li>Tailwind</li>
              <li>npm</li>
              <li>Vercel</li>
            </ul>
            <div className="inline-flex  space-x-3 mt-4 relative left-[420px] top-7 ">
              <a
                href="https://github.com/remel-crowe/Portfolio"
                className="text-gray-100"
                target="_blank"
              >
                <AiFillGithub className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-100">
                <VscLinkExternal
                  className="w-5 h-6"
                  title="This shoudln't work and it doesn't :)"
                />
              </a>
            </div>
          </div>
        </li>
        <li className=" scrolling-item flex items-center justify-center w-full relative snap-center mx-auto">
          <div className="project-image z-0 w-[350px] h-[300px] -mr-[150px] relative">
            <img
              src="https://i.ibb.co/ncQwStc/60dbee6106e855720aa3e286-Twitter-Feed-Clone.png"
              alt="Twitter Clone Showcase"
              className="object-cover w-full h-full"
            />
            <div className=" cursor-pointer absolute w-[350px] h-[300px] inset-0 bg-gray-700 opacity-30 transition-opacity duration-300 hover:opacity-0"></div>
          </div>

          <div className="project-content z-10 w-[550px] h-[350px] p-8 rounded-lg ">
            <p className="text-yellow-400 text-right">Featured Project</p>
            <h3 className="text-2xl font-bold text-right">
              <a href="#" className="text-white">
                Twitter Clone (UI/UX)
              </a>
            </h3>
            <div className="project-description mt-4 bg-gray-900 bg-opacity-80 text-gray-200 p-4 shadow-lg ">
              <p>
                Is that Twitter?! Yes... but not quite. This is a functional
                clone of the Twitter webapp, designed using Canva and brought to
                life using HTML, CSS and JS. This early project helped to
                develop my understanding of Grid and Flexboxes and was a great
                way for me to understand how a layered design works.
              </p>
            </div>
            <ul className="absolute project-tech-list inline-flex mt-4 space-x-4 text-gray-200 font-poppins text-sm right-10">
              <li>HTML5</li>
              <li>CSS</li>
              <li>Figma</li>
              <li>Adobe Illustrator</li>
            </ul>
            <div className="inline-flex  space-x-3 mt-4 relative left-[420px] top-7 ">
              <a href="#" className="text-gray-100">
                <AiFillGithub className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-100">
                <VscLinkExternal className="w-5 h-6" />
              </a>
            </div>
          </div>
        </li>
      </ul>
      <Circles />
    </div>
  );
}

export default Projects;
