import Head from "next/head";
import { useState } from "react";
import Nav from "@/components/BottomNav";
import { CgDarkMode, CgHashtag } from "react-icons/cg";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className="">
      <Head>
        <title>Remel Crowe 💻</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0 scrollbar ">
        {/* LANDING PAGE */}
        <section id="hero" className="snap-center px-10">
          <Hero />
        </section>

        {/* ABOUT ME */}
        <section id="about-section" className="snap-center px-10">
          <About />
        </section>

        {/* Experience */}
        <section id="experience-section" className="snap-center">
          <Experience />
        </section>

        {/* PROJECTS */}
        <section id="project-section" className="snap-center">
          <Projects />
        </section>

        {/* CONTACT ME  */}
        <section id="contactMe" className="snap-center">
          <Contact />
        </section>
        <Nav />
      </div>
    </div>
  );
}

{
  /* <ul className="m-0">
            <li>
              <CgDarkMode
                onClick={() => setDarkMode(!darkMode)}
                className=" dark:text-white cursor-pointer text-2xl mr-6 h-4 w-4"
              />
            </li>
          </ul> */
}
