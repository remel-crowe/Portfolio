import React from "react";
import Image from "next/image";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Project 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageSrc: "/src/assets/project1-image.png", // Replace with the actual image URL
    },
    {
      id: 2,
      title: "Project 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageSrc: "/src/assets/project2-image.png", // Replace with the actual image URL
    },
    {
      id: 3,
      title: "Project 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageSrc: "/src/assets/project3-image.png", // Replace with the actual image URL
    },
    {
      id: 4,
      title: "Project 4",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageSrc: "/src/assets/project4-image.png", // Replace with the actual image URL
    },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4 text-center">
          Some Things I've Built
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative aspect-w-16 aspect-h-9">
                <Image
                  src={project.imageSrc}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-700">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
