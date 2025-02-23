"use client";

import { motion, useAnimation, useMotionValue } from "framer-motion";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";

const Hero = () => {
  const controls = useAnimation();
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up");
  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("");
  const marqueeX = useMotionValue(0);
  const marqueeRef = useRef<HTMLDivElement>(null);

  // Track scroll direction
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollDirection(currentScrollY > lastScrollY ? "down" : "up");
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Initial offset for the marquee animation
  useEffect(() => {
    if (marqueeRef.current) {
      const marqueeWidth = marqueeRef.current.scrollWidth;
      const singleAbhinandanWidth = marqueeWidth / 20;
      const initialOffset = singleAbhinandanWidth * 2;
      marqueeX.set(-initialOffset);
    }
  }, [marqueeX]);

  // Update marquee animation based on scroll direction
  useEffect(() => {
    const currentX = marqueeX.get();
    controls.start({
      x: [
        currentX,
        scrollDirection === "down" ? currentX + 1000 : currentX - 1000,
      ],
      transition: {
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
        duration: 10,
      },
    });
  }, [scrollDirection, controls, marqueeX]);

  const handleScrollToSection = (e: any, sectionId: string, text: string) => {
    e.preventDefault();
    setLoading(true);
    setLoadingText(text);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => setLoading(false), 1000);
    }
  };

  return (
    <section className="h-screen relative flex flex-col items-center justify-center text-center overflow-hidden bg-gray-900 text-white font-lato">
      {/* Background Image */}
      <Image
        src="/images/bc.jpg"
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        priority
        className="absolute top-0 left-0 w-full h-full"
      />

      {/* Top Left Logo */}
      <div className="absolute top-5 left-5 sm:top-8 sm:left-8 flex items-center space-x-2 text-sm sm:text-base font-medium opacity-80 group transition-all duration-300">
        <span className="inline-block transform group-hover:rotate-180 transition-transform duration-500 ease-in-out">
          ©
        </span>
        <span className="relative overflow-hidden h-5 w-[100px] sm:w-[130px]">
          <span className="absolute top-0 left-0 transition-all duration-300 opacity-100 group-hover:opacity-0">
            Code with Abhi
          </span>
          <span className="absolute top-0 left-0 opacity-0 transition-all duration-300 group-hover:opacity-100">
            Abhinandan
          </span>
        </span>
      </div>

      {/* Navigation Links */}
      <div className="absolute top-5 right-5 sm:top-10 sm:right-10 flex space-x-5 sm:space-x-8 text-sm sm:text-lg font-medium">
        <a
          href="#projects"
          onClick={(e) => handleScrollToSection(e, "projects", " Projects...")}
          className="hover:opacity-75 transition"
        >
          PROJECTS
        </a>
        <a
          href="#education"
          onClick={(e) =>
            handleScrollToSection(e, "education", " Education...")
          }
          className="hover:opacity-75 transition"
        >
          EDUCATION
        </a>
        <a
          href="#skills"
          onClick={(e) => handleScrollToSection(e, "skills", " Skills...")}
          className="hover:opacity-75 transition"
        >
          SKILLS
        </a>
      </div>

      {/* Loader Overlay */}
      {loading && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md z-50">
          <h2 className="text-2xl sm:text-3xl font-bold text-white animate-pulse">
            {loadingText}
          </h2>
        </div>
      )}

      {/* Location Badge */}
      <div className="absolute left-0 top-1/3 flex items-center bg-gray-800 px-5 sm:px-8 py-3 sm:py-5 rounded-r-full shadow-xl scale-100 sm:scale-130">
        <span className="text-lg sm:text-xl font-bold leading-tight">
          Located <br /> in <br /> INDIA
        </span>
        <div className="w-10 sm:w-12 h-10 sm:h-12 ml-4 sm:ml-6 relative">
          <div className="w-full h-full rounded-full overflow-hidden animate-spin-slow">
            <img
              src="/globe.svg"
              alt="Globe"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Role Title */}
      <div className="absolute top-1/3 right-10 sm:right-32 text-right text-base sm:text-2xl font-bold">
        <span>Full Stack</span>
        <h4 className="font-semibold">Developer</h4>
      </div>

      {/* Infinite Scrolling Marquee */}
      {/* Infinite Scrolling Marquee */}
      <div className="absolute bottom-5 w-full overflow-hidden">
        <motion.div
          ref={marqueeRef}
          className="flex whitespace-nowrap min-w-[200%]" // Ensures smooth looping
          animate={controls}
          style={{ x: marqueeX }}
        >
          <span className="flex text-[8vw] sm:text-[150px]">
            {Array(10).fill("Abhinandan — ").join("")}
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
