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
      <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory md:snap-y md:snap-mandatory overflow-y-scroll z-0 scrollbar gap-y-5 overflow-x-hidden ">
        {/* LANDING PAGE */}
        <section
          id="hero"
          className="md:snap-center px-10 h-screen mb-[100px] md:mb-0 lg:mb-0"
        >
          <Hero />
        </section>

        {/* ABOUT ME */}
        <section id="about-section" className="md:snap-center px-10 h-full">
          <About />
        </section>

        {/* Experience */}
        <section id="experience-section" className="md:snap-center">
          <Experience />
        </section>

        {/* PROJECTS */}
        <section id="project-section" className="md:snap-center">
          <Projects />
        </section>

        {/* CONTACT ME  */}
        <section id="contactMe" className="md:snap-center">
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
