import { div } from "framer-motion/client";
import React from "react";

const Experience = () => {
  const experiences = [
    {
      title: "Web Developer | EventStrati.Ai",
      description: `Designed and developed a fully responsive mobile-friendly website using React and Tailwind CSS.
      Integrated interactive components, animations, and hover effects to enhance engagement.
      Ensured seamless responsiveness across devices by leveraging Tailwind’s utility classes and React’s
      component-driven architecture.`,
    },
    {
      title: "Tech Team Member | KJSCE-ACM",
      description: `Spearheading the development of the Official Council Website using React.js and Tailwind CSS, improving
                          SEO rankings and enhancing mobile responsiveness.
                          Engineered custom recruitment platform using Firebase and React, replacing Google Forms, optimizing hiring
                          efficiency by 25% and reducing application processing time from 5 days to 1 day
                          Developed college fest website incorporating SEO best practices, achieving 15% increase in organic traffic
                          Led technical workshops on full-stack development, mentoring 150+ students with 92% positive feedback`,
    },
    {
      title: "Web Development Intern | Birla Copper, Aditya Birla Industries",
      description: `During my internship, I gained hands-on experience with HTML, CSS, and JavaScript and React, focusing on site maintenance and development. This role provided valuable corporate exposure, allowing me to work closely with industry professionals and understand real-world web development processes. I enhanced my technical skills by contributing to live projects, troubleshooting issues, and implementing updates. This experience improved my ability to collaborate effectively in a professional setting and deepened my understanding of web technologies.`,
    },
  ];

  return (
    <section id="experience" className="flex flex-col items-center md:ml-2">
      <div className="text-white text-center mb-10">
        <h1 className="text-5xl text-violet-300 font-bold hover:text-green-300 ">
          Experience
        </h1>
      </div>
      <div className="flex flex-col items-center space-y-5 cursor-pointer">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="group w-full sm:max-w-[90%] md:max-w-[700px] border rounded-xl shadow-lg p-6 transition-transform transform hover:scale-105 hover:text-green-300"
          >
            {/* Apply group-hover to change title color on hover */}
            <div className="text-2xl font-poppins font-semibold text-violet-600 mb-2 group-hover:text-green-300">
              {exp.title}
            </div>
            <div className="text-white font-medium">{exp.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
