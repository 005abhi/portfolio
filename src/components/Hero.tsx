"use client";

import { motion, useAnimation, useMotionValue } from "framer-motion";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";

const Hero = () => {
  const controls = useAnimation();
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up");
  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("");
  const marqueeX = useMotionValue(0); // Track the current position of the marquee
  const marqueeRef = useRef<HTMLDivElement>(null); // Ref to measure marquee width

  // Track scroll direction
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate the initial offset to start from the 3rd "Abhinandan"
  useEffect(() => {
    if (marqueeRef.current) {
      const marqueeWidth = marqueeRef.current.scrollWidth; // Total width of the marquee content
      const singleAbhinandanWidth = marqueeWidth / 20; // Width of one "Abhinandan — " (since there are 20 in total)
      const initialOffset = singleAbhinandanWidth * 2; // Offset to start from the 3rd "Abhinandan"

      marqueeX.set(-initialOffset); // Set the initial position
    }
  }, [marqueeX]);

  // Update marquee animation based on scroll direction
  useEffect(() => {
    const currentX = marqueeX.get(); // Get the current position of the marquee

    if (scrollDirection === "down") {
      controls.start({
        x: [currentX, currentX + 1000], // Move right from the current position
        transition: {
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
          duration: 10, // Adjust speed
        },
      });
    } else {
      controls.start({
        x: [currentX, currentX - 1000], // Move left from the current position
        transition: {
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
          duration: 10, // Adjust speed
        },
      });
    }
  }, [scrollDirection, controls, marqueeX]);

  const handleScrollToSection = (e: any, sectionId: string, text: string) => {
    e.preventDefault();
    setLoading(true);
    setLoadingText(text);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });

      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };

  return (
    <section
      className={`h-screen relative flex items-center justify-center text-center overflow-hidden bg-gray-900 text-white `}
      style={{ fontFamily: "var(--font-lato)" }}
    >
      {/* Background Image */}
      <Image
        src="/images/bc.jpg"
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        priority
        className="absolute top-0 left-0 w-full h-full"
      />
      <div className="absolute top-10 left-8 flex items-center space-x-2 text-base font-medium opacity-80 group transition-all duration-300">
        <span className="inline-block transform group-hover:rotate-180 transition-transform duration-500 ease-in-out">
          ©
        </span>
        <span className="relative overflow-hidden h-5 w-[130px]">
          <span className="absolute top-0 left-0 transition-all duration-300 opacity-100 group-hover:opacity-0">
            Code with Abhi
          </span>
          <span className="absolute top-0 left-0 opacity-0 transition-all duration-300 group-hover:opacity-100">
            Abhinandan
          </span>
        </span>
      </div>
      {/* Navigation Links */}
      <div className="absolute top-10 right-10 flex space-x-8 text-lg font-medium">
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
          <h2 className="text-3xl font-bold text-white animate-pulse">
            {loadingText}
          </h2>
        </div>
      )}
      {/* Location Badge */}
      <div className="absolute left-0 top-1/3 flex items-center bg-gray-800 px-8 py-5 rounded-l-lg rounded-r-full shadow-xl scale-130">
        <span className="text-xl font-bold leading-tight">
          Located <br /> in <br /> INDIA
        </span>
        <div className="w-12 h-12 ml-6 relative">
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
      <div className="absolute top-1/3 right-32 text-right">
        <span className="text-2xl font-bold">Full Stack</span>
        <h4 className="text-2xl font-semibold">Developer</h4>
      </div>
      {/* Infinite Scrolling Marquee */}
      <div className="absolute bottom-5 w-full overflow-hidden">
        <motion.div
          ref={marqueeRef}
          className="flex text-[150px] whitespace-nowrap"
          animate={controls}
          style={{ x: marqueeX, display: "flex", whiteSpace: "nowrap" }}
        >
          <span className="flex">
            {Array(10).fill("Abhinandan — ").join("")}
          </span>
          <span className="flex">
            {Array(10).fill("Abhinandan — ").join("")}
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
