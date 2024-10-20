import React, { useState } from 'react';
import logoNobg from '/assets/logo_nobg.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Scroll to the section using smooth scroll and fallback for mobile browsers
    const handleScroll = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            const yOffset = -50; // Adjust for fixed headers
            const yPosition = section.getBoundingClientRect().top + window.pageYOffset + yOffset;

            window.scrollTo({
                top: yPosition,
                behavior: 'smooth',
            });

            setIsOpen(false); // Close the menu after scrolling
        } else {
            console.error(`Section with id "${sectionId}" not found`);
        }
    };

    return (
        <nav className="z-[999] flex justify-center items-center fixed top-0 left-0 right-0">
            <div className="z-20 h-[65px] w-auto max-w-[800px] min-w-[70vw] backdrop-filter backdrop-blur-md bg-[rgba(255, 255, 255, 0.2)] border-2 border-solid shadow-2xl border-white border-opacity-10 rounded-xl flex items-center px-6 py-3 mt-7 justify-between">
                
                {/* Logo */}
                <div className="flex-shrink-0">
                    <img
                        onClick={() => handleScroll('hero')} // Adjust scroll for 'home' section
                        className='h-12 md:ml-10 cursor-pointer rounded' src={logoNobg} alt="Logo" />
                </div>

                {/* Hamburger Menu Button for Mobile */}
                <div className="md:hidden flex items-center">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>

                {/* Navigation Links (Desktop) */}
                <div className="hidden md:flex flex-grow justify-end items-center mr-10">
                    <ul className='flex gap-5 text-base font-semibold text-neutral-400'>
                        <li className='cursor-pointer hover:text-green-400 hover:translate-y-[-5px] transition-all duration-300' onClick={() => handleScroll('experience')}>Experience</li>
                        <li className='cursor-pointer hover:text-green-400 hover:translate-y-[-5px] transition-all duration-300' onClick={() => handleScroll('projects')}>Projects</li>
                        <li className='cursor-pointer hover:text-green-400 hover:translate-y-[-5px] transition-all duration-300' onClick={() => handleScroll('skills')}>Skills</li>
                        <li className='cursor-pointer hover:text-green-400 hover:translate-y-[-5px] transition-all duration-300' onClick={() => handleScroll('contact')}>Contact</li>
                    </ul>
                </div>
            </div>

            {/* Mobile Drawer Menu */}
            <div className={`fixed top-0 left-0 w-full h-full bg-[rgba(255,255,255,0.3)] backdrop-blur-lg border-2 border-white border-opacity-20 shadow-2xl transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-30 md:hidden`}>
                <div className="flex justify-end p-5">
                    <button onClick={() => setIsOpen(false)} className="text-white focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
                <ul className='flex flex-col items-center gap-4 mt-10 text-lg font-semibold whitespace-nowrap text-white'>
                    <li className='cursor-pointer hover:text-gray-300' onClick={() => handleScroll('hero')}>Home</li>
                    <li className='cursor-pointer hover:text-gray-300' onClick={() => handleScroll('experience')}>Experience</li>
                    <li className='cursor-pointer hover:text-gray-300' onClick={() => handleScroll('projects')}>Projects</li>
                    <li className='cursor-pointer hover:text-gray-300' onClick={() => handleScroll('skills')}>Skills</li>
                    <li className='cursor-pointer hover:text-gray-300' onClick={() => handleScroll('contact')}>Contact</li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
