"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Animated Image Carousel",
    description: "Responsive image carousel built with vanilla CSS",
    image: "https://i.ibb.co/RH6f5dD/Screenshot-2024-02-15-at-22-07-48.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/remel-crowe/Image-carousel",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "This Website!",
    description:
      "Responsive application built using Next.js to display personal projects",
    image: "https://i.ibb.co/zFKBsXF/mockup.png",
    tag: ["All", "Next.js"],
    gitUrl: "https://github.com/remel-crowe/Portfolio",
    previewUrl: "https://remcrw.me/#hero-section",
  },
  {
    id: 3,
    title: "Battleships",
    description: "Verse the computer in an interactive Battleships Game",
    image: "https://i.ibb.co/bbt7T2g/istockphoto-1411179874-612x612.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/remel-crowe/battleships",
    previewUrl: "https://battleshipsv1.netlify.app/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center uppercase tracking-[15px] text-2xl text-gray-500 mt-10 mb-16 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Next.js"
          isSelected={tag === "Next.js"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
