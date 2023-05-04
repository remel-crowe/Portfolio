import React from "react";

const projects = [
  {
    title: "Project 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl: "project1.jpg",
    demoUrl: "https://example.com/project1",
    codeUrl: "https://github.com/example/project1",
  },
  {
    title: "Project 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl: "project2.jpg",
    demoUrl: "https://example.com/project2",
    codeUrl: "https://github.com/example/project2",
  },
  // Add more projects as needed
];

const ProjectItem = ({ project }) => {
  return (
    <li className="flex flex-col md:flex-row items-center justify-center md:justify-between md:py-8">
      <div className="w-full md:w-2/5">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-auto rounded-lg"
        />
      </div>
      <div className="w-full md:w-3/5 md:pl-8">
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            {project.title}
          </h3>
          <p className="text-lg text-gray-600 mb-6">{project.description}</p>
        </div>
        <div className="flex justify-center md:justify-start">
          <a
            href={project.demoUrl}
            className="btn btn-primary mr-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            Demo
          </a>
          <a
            href={project.codeUrl}
            className="btn btn-secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Code
          </a>
        </div>
      </div>
    </li>
  );
};

const ProjectsSection = () => {
  return (
    <section className="py-20 flex flex-col">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          Projects
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <ProjectItem key={index} project={project} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProjectsSection;
