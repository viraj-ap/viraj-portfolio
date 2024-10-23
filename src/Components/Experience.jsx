import { div } from 'framer-motion/client';
import React from 'react';

const Experience = () => {

    
    const experiences = [
        {
            title: 'Tech Team Member | KJSCE-ACM',
            description: `Currently developing the council website, ensuring a responsive and user-friendly design.
                            Conducted a web development workshop for 150+ students, delivering an in-depth session on foundational and advanced web development topics.
                             Also organized Artemis, an 8-hour front-end hackathon.`,
        },
        // {
        //     title: 'SDE intern | Global iSpice Platforms Private Limited',
        //     description: `Currently working on website using React and TypeScript.`,
        // },
        {
            title: 'Web Development Intern | Birla Copper, Aditya Birla Industries',
            description: `During my internship, I gained hands-on experience with HTML, CSS, and JavaScript and React, focusing on site maintenance and development. This role provided valuable corporate exposure, allowing me to work closely with industry professionals and understand real-world web development processes. I enhanced my technical skills by contributing to live projects, troubleshooting issues, and implementing updates. This experience improved my ability to collaborate effectively in a professional setting and deepened my understanding of web technologies.`,
        },
    ];

    return (
        <section id = "experience"  className="flex flex-col items-center md:ml-2">
            <div className="text-white text-center mb-10">
                <h1 className="text-5xl text-violet-300 font-bold hover:text-green-300 ">Experience</h1>
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
                        <div className="text-white font-medium">
                            {exp.description}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
