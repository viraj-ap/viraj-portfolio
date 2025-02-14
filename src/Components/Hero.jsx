import React, { useState, useEffect, useRef } from "react";
import Example from "./BubbleText/BubbleText";
import heroImg from "/assets/hero_img.png";

const Hero = () => {
    const [isGravityOn, setIsGravityOn] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const heroRef = useRef(null);
    const [containerHeight, setContainerHeight] = useState(0);

    useEffect(() => {
        const updateContainerHeight = () => {
            if (heroRef.current) {
                const rect = heroRef.current.getBoundingClientRect();
                setContainerHeight(rect.height);
            }
        };

        // Update container height on mount and window resize
        updateContainerHeight();
        window.addEventListener('resize', updateContainerHeight);

        return () => {
            window.removeEventListener('resize', updateContainerHeight);
        };
    }, []);

    const toggleGravity = () => {
        if (!isGravityOn) {
            setIsGravityOn(true);
            setShowMessage(false);

            // Restore position and show message after 3 seconds
            setTimeout(() => {
                setIsGravityOn(false);
                setShowMessage(true);
                setTimeout(() => setShowMessage(false), 2000);
            }, 2000);
        }
    };

    // Enhanced randomization with increased horizontal spread
    const scrambleStyle = () => {
        const randomX = Math.floor(Math.random() * 200); // Increased horizontal spread
        const randomRotation = Math.floor(Math.random() * 40) - 20; // Reduced rotation range

        // Calculate fall distance
        const fallDistance = containerHeight * 0.38;

        return {
            transform: `translate(${randomX}px, ${fallDistance}px) rotate(${randomRotation}deg)`,
            transition: 'transform 0.7s ease-in-out'
        };
    };

    return (
        <div
            ref={heroRef}
            className="relative min-h-screen overflow-hidden mt-24" // Reduced margin top from mt-24 to mt-12
        >
            <div className="text-violet-300 text-xs font-semibold w-56 rounded-lg m-5 cursor-help">
                There are a lot of easter eggs hidden in here try and find them out :)
                <span className="hidden md:block text-[10px]">hint: your cursor might help</span>
            </div>
            {/* Gravity Toggle Button */}
            <div className="absolute top-4 right-4 flex flex-col items-center">
                <div className="relative inline-flex items-center">
                    <div
                        className={`w-8 h-4 rounded-full shadow-lg transition-colors duration-300 ${isGravityOn ? "bg-violet-500" : "bg-violet-200"}`}
                    >
                        <div
                            className={`w-4 h-4 bg-white rounded-full shadow-md absolute top-0 transition-transform duration-300 ${isGravityOn ? "right-0" : "left-0"}`}
                        />
                    </div>
                    <input
                        type="checkbox"
                        className="absolute inset-0 opacity-0 cursor-pointer z-10"
                        checked={isGravityOn}
                        onChange={toggleGravity}
                    />
                </div>
                <span className="mt-1 text-[10px] font-bold text-violet-700 whitespace-nowrap cursor-help">
                    Turn on Gravity
                </span>
            </div>

            {/* "Back to Normal" Message */}
            {showMessage && (
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded shadow">
                    Back to Zero Gravity!
                </div>
            )}

            {/* Hero Section */}
            <div
                id="hero"
                className={`flex flex-col-reverse items-center justify-center md:ml-12 md:flex-row space-y-8 md:space-y-0 transition-transform duration-700`}
            >
                {/* Text Section */}
                <div
                    className={`flex justify-center w-full md:w-1/2 md:ml-12 transition-all duration-700`}
                    style={isGravityOn ? scrambleStyle() : {}}
                >
                    <Example />
                </div>

                {/* Hero Image */}
                <div
                    className={`flex justify-center w-full md:w-1/2 transition-all duration-700`}
                    style={isGravityOn ? scrambleStyle() : {}}
                >
                    <img
                        className="
                            w-full hover:translate-y-[-10px] 
                            hover:translate-x-[-10px] 
                            transition-all duration-300 
                            max-w-xs md:max-w-none
                        "
                        src={heroImg}
                        alt="Hero Image"
                    />
                </div>
            </div>

            {/* Ground Line */}
            {isGravityOn && (
                <hr
                    className="
                        absolute w-full border-t-2 border-white 
                        z-10 left-0 right-0
                    "
                    style={{
                        bottom: `${containerHeight * 0.001}px`, // Adjusted the position to move it higher
                        transition: 'bottom 0.7s ease-in-out',
                        height: '2px', // Adjust height of the line
                        backgroundColor: 'rgba(255, 255, 255, 0.6)', // Changed color and made it semi-transparent
                    }}
                />
            )}
        </div>
    );
};

export default Hero;
