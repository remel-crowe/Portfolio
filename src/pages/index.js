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
      <div className="bg-[rgb(36,36,36)] text-white h-screen overflow-y-scroll z-0 scrollbar gap-y-[400px] overflow-x-hidden ">
        {/* LANDING PAGE */}
        <section className="md:snap-center px-10 h-screen md:mb-0 lg:mb-0">
          <Hero />
        </section>

        {/* ABOUT ME */}
        <section id="about-section" className="md:snap-center px-10 h-screen">
          <About />
        </section>

        {/* Experience */}
        <section id="experience-section" className="md:snap-center h-screen">
          <Experience />
        </section>

        {/* PROJECTS */}
        <section id="project-section" className="md:snap-center h-screen">
          <Projects />
        </section>

        {/* CONTACT ME  */}
        <section id="contactMe" className="md:snap-center h-screen">
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
