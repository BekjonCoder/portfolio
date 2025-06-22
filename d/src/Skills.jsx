import React from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss,  SiTypescript, SiNodedotjs } from 'react-icons/si';

const skills = [
  { icon: <FaHtml5 />, name: 'HTML5' },
  { icon: <FaCss3Alt />, name: 'CSS3' },
  { icon: <FaJs />, name: 'JavaScript' },
  { icon: <FaReact />, name: 'React' },
  { icon: <SiTailwindcss />, name: 'Tailwind CSS' },
  { icon: <FaGitAlt />, name: 'Git' },
  { icon: <SiTypescript />, name: 'TypeScript' },
  { icon: <SiNodedotjs />, name: 'NodeJs' },
];

const Skills = () => {
  return (
    <section id ="skills" className="py-16 bg-base-200">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-10">My Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center gap-2 text-xl">
              <div className="text-5xl text-primary">{skill.icon}</div>
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
