import Head from "next/head";
import { useState } from "react";
import Nav from "@/components/BottomNav";
import ProjectsSection from "@/components/Project/ProjectSec";
import About from "@/components/About/About";
import Experience from "@/components/Experience/Experience";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Remel Crowe 💻 | Front End Developer & SEO Expert</title>
        <meta
          name="description"
          content="London based Front End Developer and SEO Expert."
        />

        <link rel="icon" href="/favicon.png" />
      </Head>
      <body>
        <div className="bg-[rgb(36,36,36)] text-white min-h-screen overflow-y-scroll z-0  gap-y-[400px] overflow-x-hidden scroll-smooth ">
          {/* LANDING PAGE */}
          <section
            id="hero-section"
            className="px-10 h-screen mb-20 md:mb-24 lg:mb-24"
          >
            <Hero />
          </section>

          {/* ABOUT ME */}
          <section id="about-section" className=" px-10 md:mb-10 lg:mb-16">
            <About />
          </section>

          {/* Experience */}
          <section id="experience-section" className="md:mb-10 lg:mb-16">
            <Experience />
          </section>

          {/* PROJECTS */}
          <section
            id="project-section"
            className="px-10 pt-10 overflow-y-scroll md:mb-10 lg:mb-16"
          >
            <ProjectsSection />
          </section>

          {/* CONTACT ME  */}
          <section id="contactMe" className="">
            <Contact />
          </section>
          <Nav />
        </div>
      </body>
    </div>
  );
}
