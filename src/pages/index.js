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
        <title>Remel Crowe 💻 | Front End Developer & SEO Expert</title>
        <meta
          name="description"
          content="London based front end developer and SEO Expert."
        />

        <link rel="icon" href="/favicon.png" />
      </Head>
      <body>
        <div className="bg-[rgb(36,36,36)] text-white h-screen overflow-y-scroll z-0 scrollbar gap-y-[400px] overflow-x-hidden scroll-smooth ">
          {/* LANDING PAGE */}
          <section
            id="hero-section"
            className="snap-center px-10 h-screen md:mb-10 lg:mb-24"
          >
            <Hero />
          </section>

          {/* ABOUT ME */}
          <section
            id="about-section"
            className="snap-center px-10 h-screen md:mb-10 lg:mb-16"
          >
            <About />
          </section>

          {/* Experience */}
          <section
            id="experience-section"
            className="snap-center h-screen md:mb-10 lg:mb-16"
          >
            <Experience />
          </section>

          {/* PROJECTS */}
          <section
            id="project-section"
            className="snap-center h-screen px-10 pt-10 overflow-y-scroll md:mb-10 lg:mb-16"
          >
            <ProjectsSection />
          </section>

          {/* CONTACT ME  */}
          <section id="contactMe" className="snap-center h-screen">
            <Contact />
          </section>
          <Nav />
        </div>
      </body>
    </div>
  );
}
