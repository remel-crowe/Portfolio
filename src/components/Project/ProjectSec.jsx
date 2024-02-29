"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Netflix Clone",
    description:
      "Crafted using React, this Netflix Clone utilises The Movie Database API to dynamically fetch movies. Styled with Sass, it offers an authenication flow through Google's Firebase ",
    image: "https://i.ibb.co/K50KqjW/Screenshot-2024-02-29-at-15-52-38.png",
    tag: ["All", "Frontend"],
    gitUrl: "https://github.com/remel-crowe/Netflix-Clone",
    previewUrl: "https://n-clone-remcrw.netlify.app",
  },
  {
    id: 2,
    title: "Electric Vehicle Data API",
    description:
      "Backend API for searching cars by model name, leveraging Node.js, Express.js, regular expressions, and MongoDB. This API provides a straightforward way for users to retrieve car data based on their specific search criteria.",
    image: "https://i.ibb.co/zH8VbfV/Screenshot-2024-02-29-at-10-33-51.png",
    tag: ["All", "Backend"],
    gitUrl: "https://github.com/remel-crowe/ev-data-api",
    previewUrl: "",
  },
  {
    id: 3,
    title: "Animated Image Carousel",
    description: "Responsive image carousel built with HTML, JS and CSS",
    image: "https://i.ibb.co/RH6f5dD/Screenshot-2024-02-15-at-22-07-48.png",
    tag: ["All", "Frontend"],
    gitUrl: "https://github.com/remel-crowe/Image-carousel",
    previewUrl: "",
  },
  {
    id: 4,
    title: "This Website!",
    description:
      "Responsive application built using Next.js to display personal projects",
    image: "https://i.ibb.co/zFKBsXF/mockup.png",
    tag: ["All", "Frontend"],
    gitUrl: "https://github.com/remel-crowe/Portfolio",
    previewUrl: "https://remcrw.me/#hero-section",
  },
  {
    id: 5,
    title: "Battleships",
    description:
      "Interactive Battleships game where you face off against the computer, built with HTML, CSS, and JavaScript.",
    image: "https://i.ibb.co/8zbFMFb/Screenshot-2024-02-23-at-13-23-08.png",
    tag: ["All", "Frontend"],
    gitUrl: "https://github.com/remel-crowe/Battleships",
    previewUrl: "https://battleshipsv1.netlify.app",
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
      <h2 className="text-center uppercase tracking-[15px] text-2xl text-gray-500 mb-12 md:mb-12">
        Latest Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Frontend"
          isSelected={tag === "Frontend"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Backend"
          isSelected={tag === "Backend"}
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
