import React from "react";
import { motion } from "framer-motion";
import styles from "./bubble.module.css";
import EButton from "../EButton";
import { FaGithub, FaLinkedin } from 'react-icons/fa';  // Importing social icons
import { MdEmail } from 'react-icons/md';
import DinoEasterEgg from "../DinoEasterEgg";

const Example = () => {
    return (
        <div id="home" className=" cursor-pointer grid h-auto place-content-center px-4 lg:px-8 lg:pt-16">
            {/* Adjusted padding for larger screens */}
            <BubbleText />
        </div>
    );
};

const BubbleText = () => {
    return (
        <>
            <motion.h2
                className="text-white text-center text-lg sm:text-xl lg:text-2xl xl:text-3xl font-poppins"  // Adjusted font size for iPads
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                Hi there,
            </motion.h2>

            <motion.h2
                className="text-white text-center text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-poppins" // Adjusted for iPads
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
            >
                I'm <span className="text-green-400">Viraj</span>
            </motion.h2>

            <motion.h2
                className="text-white text-center text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-poppins" // Adjusted for iPads
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
            >
                Full Stack
            </motion.h2>

            <motion.h2
                className="text-center text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-thin text-indigo-300" // Adjusted font size
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                {"WebDeveloper".split("").map((child, idx) => (
                    <span className={styles.hoverText} key={idx}>
                        {child}
                    </span>
                ))}
            </motion.h2>

            <motion.h2
                className="text-white text-center text-lg sm:text-xl lg:text-2xl xl:text-3xl font-poppins" // Adjusted font size
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                based in{" "}
                <span className="text-orange-400">In</span>
                <span className="text-white">d</span>
                <span className="text-green-400">ia</span>
            </motion.h2>

            <EButton />
            <div className="flex justify-center space-x-8 text-2xl sm:text-3xl invert mt-3">
                {/* GitHub */}
                <a href="https://github.com/viraj-ap" target="_blank" rel="noopener noreferrer" className="hover:text-violet-300">
                    <FaGithub />
                </a>
                {/* LinkedIn */}
                <a href="https://linkedin.com/in/viraj-ap" target="_blank" rel="noopener noreferrer" className="hover:text-violet-300">
                    <FaLinkedin />
                </a>
                {/* Email */}
                <a href="mailto:viraj25092004@gmail.com" target="_blank" className="hover:text-violet-300">
                    <MdEmail />
                </a>
            </div>
            <div className="flex items-center justify-center">
                <DinoEasterEgg />
            </div>
        </>
    );
};

export default Example;
