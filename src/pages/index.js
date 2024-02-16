import Head from "next/head";
import { useState } from "react";
import Nav from "@/components/BottomNav";
import ProjectsSection from "@/components/ProjectSec";
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
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="bg-[rgb(36,36,36)] text-white h-screen overflow-y-scroll z-0 scrollbar gap-y-[400px] overflow-x-hidden snap-y snap-mandatory scroll-smooth ">
        {/* LANDING PAGE */}
        <section className="snap-center px-10 h-screen md:mb-0 lg:mb-0">
          <Hero />
        </section>

        {/* ABOUT ME */}
        <section id="about-section" className="snap-center px-10 h-screen">
          <About />
        </section>

        {/* Experience */}
        <section id="experience-section" className="snap-center h-screen">
          <Experience />
        </section>

        {/* PROJECTS */}
        <section
          id="project-section"
          className="snap-center h-screen px-10 pt-10 overflow-y-scroll"
        >
          <ProjectsSection />
        </section>

        {/* CONTACT ME  */}
        <section id="contactMe" className="snap-center h-screen">
          <Contact />
        </section>
        <Nav />
      </div>
    </div>
  );
}
