import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const images = [
  "/skills/2.png",
  "/skills/3.png",
  "/skills/4.png",
  "/skills/5.png",
  "/skills/6.png",
  "/skills/7.png",
  "/skills/8.png",
  "/skills/9.png",
  "/skills/10.png",
  "/skills/11.png",
  "/skills/12.png",
];

const Skills = () => {
  const sliderRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false); // Track hover state

  useEffect(() => {
    const slider = sliderRef.current;
    let scrollSpeed = 1;
    let animationFrameId;

    const loop = () => {
      if (!isHovered && slider) {
        // Only scroll if not hovered
        slider.scrollLeft += scrollSpeed;

        if (slider.scrollLeft >= slider.scrollWidth / 2) {
          slider.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(loop);
    };

    loop();

    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered]); // Depend on isHovered

  return (
    <div>
      <div id="skills" className="text-violet-300 text-center text-5xl font-semibold mt-10 hover:text-green-300">
        Things I've Worked With
      </div>
      <section className="overflow-hidden py-8">
        <div
          className="relative flex w-full"
          onMouseEnter={() => setIsHovered(true)} 
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div className="flex gap-4 overflow-hidden w-full" ref={sliderRef}>
            {[...images, ...images].map((imgSrc, index) => (
              <div key={index} className="flex-shrink-0">
                <img
                  src={imgSrc}
                  alt={`Slide ${index}`}
                  className="w-[120px] h-[120px] sm:w-[200px] sm:h-[200px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[300px] object-cover"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
