import React from 'react';
import Example from './BubbleText/BubbleText';
import heroImg from '/assets/hero_img.png';

const Hero = () => {
    return (
        <div id="hero" className='flex flex-col-reverse items-center justify-center md:ml-12 mt-12 md:flex-row md:mt-0 space-y-8 md:space-y-0'> {/* Adjusted layout for mobile and larger screens */}
            <div className='flex justify-center w-full px-4 md:w-1/2 md:ml-12'>
                <Example />
            </div>
            <div className='flex justify-center w-full px-4 md:w-1/2'>
                <img 
                    className='w-full md:w-3/4 hover:translate-y-[-10px] hover:translate-x-[-10px] transition-all duration-300 max-w-xs md:max-w-none' 
                    src={heroImg}  
                    alt="Hero Image" 
                />
            </div>
        </div>
    );
};

export default Hero;
