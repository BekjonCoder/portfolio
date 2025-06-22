import React from 'react';

const projects = [
  {
    title: "Pomodoro Time",
    description: "This is made with React and all techniques have responsive design.",
    tech: "React, Tailwind",
    link: "https://pomodoro-sigma-ten.vercel.app/"
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio site showcasing skills, projects and contact form.",
    tech: "React, Tailwind, EmailJS",
    link: "https://portfolio-39se.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-base-100">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="bg-base-200 p-6 rounded-2xl shadow-md">
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-base-content mb-3">{project.description}</p>
              <p className="text-sm italic mb-4 text-primary">{project.tech}</p>
              <a href={project.link} className="btn btn-outline btn-primary" target="_blank" rel="noreferrer">
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
