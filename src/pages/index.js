import Head from "next/head";
import { CgDarkMode, CgHashtag } from "react-icons/cg";

import { FaReact } from "react-icons/Fa";
import { DiJavascript, DiCss3 } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { useState } from "react";
import Nav from "@/components/BottomNav";
import Image from "next/image";
import bitmoji from "/public/bitmoji.png";
import hastag from "/public/code.png";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Remel Crowe 💻</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="dark:bg-bluey px-10 min-h-max ">
        {/* LANDING PAGE */}
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-raleway dark:text-stone-400 text-bluey">
              remcrw.dev
            </h1>
            <ul className="flex items-center gap-5">
              <li class>
                <CgDarkMode
                  onClick={() => setDarkMode(!darkMode)}
                  className=" dark:text-white cursor-pointer text-2xl mr-6 h-4 w-4"
                />
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className=" dark:text-white py-2 font-unbounded text-6xl bg-clip-text text-bluey">
              Remel Straker - Crowe
            </h2>
            <h3 className="dark:text-white text-cyan-500 text-xl font-poppins">
              Web Developer | IT Analyst | Network Engineer
            </h3>
          </div>
          <div className="flex justify-center">
            <div className="flex items-center gap-5">
              <FaReact className="text-cyan-500 w-7 h-7" />
              <DiJavascript className="text-yellow-500 w-7 h-7" />
              <DiCss3 className="text-orange-500 w-7 h-7" />
              <SiTailwindcss className="text-cyan-400 w-7 h-7" />
            </div>
          </div>
          {/* <div className="flex justify-center align-bottom mt-20">
            <AiOutlineCaretDown className="animate-bounce w-6 h-6 text-teal-500" />
          </div> */}
          <Image
            src={hastag}
            className="absolute right-4 opacity-[35%]"
          ></Image>
          <Nav />
        </section>
        {/* ABOUT ME */}
        <section id="about-section" className="h-full ">
          <h1 className=" font-poppins px-7 text-2xl mb-6 text-stone-300">
            <span className="text-cyan-500">01.</span> About Me
          </h1>
          <div
            id="heh"
            className="grid grid-flow-col grid-cols-2 align-middle justify-center px-7"
          >
            <div className="flex flex-col gap-3">
              <p className="font-poppins text-md text-stone-300 ">
                Hi visitor👋, my name is Remel and im an aspiring frontend
                engineer with a strong interest in developing online presences,
                wether it be through SEO, Content Creation or a mixture of both.
              </p>
              <p className="font-poppins text-md text-stone-300 ">
                My interest in web development sparked while in an IT position
                within the Google offices. Being surrounded by hundreds of
                software developers 5 days a week has it's way of turning you
                into one.. Or atleast a wannabe 😁
              </p>
              <p className="font-poppins text-md text-stone-300 ">
                Since then I've managed to create a few projects - including
                this webpage! Check them out below!
              </p>
            </div>
            <div id="img" className="flex justify-center">
              <Image src={bitmoji} className="" />
            </div>
          </div>
        </section>
        {/* PROJECTS */}
        <section id="projectSection">
          <Image className="opacity-50" src={hastag}></Image>
          <div></div>
        </section>
      </main>
    </div>
  );
}
