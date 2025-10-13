"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "ElevateIQ",
    description:
      "ElevateIQ is a platform addressing India's academia-industry skills gap, built with Next.js, MongoDB, and AI APIs.",
    image: "/images/n.png",
    link: "https://github.com/005abhi/Elevate-iq",
  },
  {
    id: 2,
    title: "Jarvis AI Chatbot",
    description:
      "Jarvis is a voice-enabled AI chatbot built with React and Node.js, integrating the Gemini API for real-time interactions.",
    image: "/images/j.png",
    link: "https://github.com/005abhi/JARVIS-AI-CHATBOT",
  },
  {
    id: 3,
    title: "Coalesce",
    description:
      "Coalesce is a platform bridging academia and industry in India through skill assessments, insights, and professional development.",
    image: "/images/c.jpeg",
    link: "https://github.com/005abhi/Coalesce",
  },
  {
    id: 4,
    title: "BLOGIFY",
    description:
      "Blogify is a full-stack blogging platform with user authentication, rich-text editing, blog categorization, and a CI/CD pipeline for seamless deployment.",
    image: "/images/b.png",
    link: "https://github.com/005abhi/BLOGIFY",
  },
];

const ProjectCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState("");

  // Update time every second
  useState(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const formattedTime = `${hours}:${minutes.toString().padStart(2, "0")}`;
      setCurrentTime(formattedTime);
    };

    updateTime(); // Set initial time
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  });

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  return (
    <section
      id="projects"
      className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 px-4 py-10"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <div className="inline-block relative">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">
            <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
              ✨ PROJECTS ✨
            </span>
          </h1>
          <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-green-600 to-transparent rounded-full" />
        </div>
      </motion.div>

      {/* Desktop/Laptop View */}
      <div className="hidden md:block relative w-full max-w-5xl">
        <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-3xl p-8 shadow-[0_20px_60px_rgba(0,0,0,0.5)] border border-gray-700">
          <div className="bg-gray-950 rounded-xl p-1 mb-4 shadow-inner border border-gray-800">
            <div className="flex items-center gap-2 px-4 py-3">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.6)] hover:brightness-110 transition-all cursor-pointer"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-[0_0_8px_rgba(234,179,8,0.6)] hover:brightness-110 transition-all cursor-pointer"></div>
                <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)] hover:brightness-110 transition-all cursor-pointer"></div>
              </div>
              <div className="flex-1 text-center text-gray-500 text-sm font-mono tracking-wide">
                project-showcase
              </div>
              <div className="w-16"></div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.3)] overflow-hidden border border-gray-200">
            <AnimatePresence mode="wait">
              <motion.div
                key={projects[currentIndex].id}
                className="flex flex-col md:flex-row items-center p-8"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
                  <img
                    src={projects[currentIndex].image}
                    alt={projects[currentIndex].title}
                    className="rounded-xl w-full max-w-md object-contain shadow-[0_10px_40px_rgba(0,0,0,0.25)] border border-gray-300"
                  />
                </div>

                <div className="w-full md:w-1/2 md:pl-8 text-center md:text-left">
                  <motion.h2
                    className="text-2xl sm:text-3xl font-bold text-green-700 mb-3"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {projects[currentIndex].title}
                  </motion.h2>
                  <motion.p
                    className="text-base sm:text-lg text-gray-800 mb-6 leading-relaxed"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    {projects[currentIndex].description}
                  </motion.p>
                  <a
                    href={projects[currentIndex].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 bg-green-700 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors shadow-[0_4px_15px_rgba(21,128,61,0.3)] hover:shadow-[0_6px_20px_rgba(21,128,61,0.4)]"
                  >
                    Visit Now
                  </a>
                  <div className="mt-6 flex justify-center md:justify-start gap-3">
                    <motion.button
                      onClick={handlePrev}
                      className="p-3 bg-gray-900 rounded-full text-white hover:bg-gray-800 shadow-[0_4px_15px_rgba(0,0,0,0.4)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.5)] transition-all"
                      whileHover={{
                        rotate: [0, -10, 10, -10, 10, 0],
                        transition: { duration: 0.4 },
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ArrowLeft size={20} />
                    </motion.button>
                    <motion.button
                      onClick={handleNext}
                      className="p-3 bg-gray-900 rounded-full text-white hover:bg-gray-800 shadow-[0_4px_15px_rgba(0,0,0,0.4)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.5)] transition-all"
                      whileHover={{
                        rotate: [0, 10, -10, 10, -10, 0],
                        transition: { duration: 0.4 },
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ArrowRight size={20} />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="sm:hidden w-full max-w-sm mx-auto px-2">
        {/* Mobile Frame */}
        <div className="relative bg-gray-900 rounded-[3rem] p-3 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
          {/* Mobile Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-gray-900 rounded-b-3xl z-20"></div>

          {/* Mobile Screen */}
          <div className="relative bg-white rounded-[2.5rem] overflow-hidden shadow-inner border-4 border-gray-800">
            {/* Status Bar */}
            <div className="bg-gray-50 px-6 py-2 flex justify-between items-center text-xs border-b border-gray-200">
              <span className="font-semibold text-gray-900">
                {currentTime || "9:41"}
              </span>
              <div className="flex gap-1 items-center">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                </svg>
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M17.778 8.222c-4.296-4.296-11.26-4.296-15.556 0A1 1 0 01.808 6.808c5.076-5.077 13.308-5.077 18.384 0a1 1 0 01-1.414 1.414zM14.95 11.05a7 7 0 00-9.9 0 1 1 0 01-1.414-1.414 9 9 0 0112.728 0 1 1 0 01-1.414 1.414zM12.12 13.88a3 3 0 00-4.242 0 1 1 0 01-1.415-1.415 5 5 0 017.072 0 1 1 0 01-1.415 1.415zM9 16a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  className="w-4 h-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm4.5 8.5a1 1 0 000 2h5a1 1 0 000-2h-5z" />
                </svg>
              </div>
            </div>

            <div className="p-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={projects[currentIndex].id}
                  className="flex flex-col items-center text-center"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={projects[currentIndex].image}
                    alt={projects[currentIndex].title}
                    className="rounded-xl w-full mb-4 object-contain shadow-[0_8px_25px_rgba(0,0,0,0.2)] border border-gray-200"
                  />
                  <h2 className="text-xl font-bold text-green-700 mb-2">
                    {projects[currentIndex].title}
                  </h2>
                  <p className="text-sm text-gray-800 mb-4 leading-relaxed">
                    {projects[currentIndex].description}
                  </p>
                  <a
                    href={projects[currentIndex].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-5 py-2 bg-green-700 text-white text-sm font-semibold rounded-lg hover:bg-green-600 transition-colors mb-4 shadow-[0_4px_12px_rgba(21,128,61,0.3)]"
                  >
                    Visit Now
                  </a>
                  <div className="flex justify-center gap-3">
                    <motion.button
                      onClick={handlePrev}
                      className="p-2 bg-gray-900 rounded-full text-white hover:bg-gray-800 shadow-[0_4px_12px_rgba(0,0,0,0.3)] transition-all"
                      whileTap={{ scale: 0.95 }}
                    >
                      <ArrowLeft size={16} />
                    </motion.button>
                    <motion.button
                      onClick={handleNext}
                      className="p-2 bg-gray-900 rounded-full text-white hover:bg-gray-800 shadow-[0_4px_12px_rgba(0,0,0,0.3)] transition-all"
                      whileTap={{ scale: 0.95 }}
                    >
                      <ArrowRight size={16} />
                    </motion.button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Home Indicator */}
            <div className="pb-2 flex justify-center">
              <div className="w-32 h-1 bg-gray-900 rounded-full opacity-40"></div>
            </div>
          </div>

          {/* Mobile Buttons */}
          <div className="absolute right-0 top-24 w-1 h-12 bg-gray-800 rounded-l-sm"></div>
          <div className="absolute right-0 top-40 w-1 h-16 bg-gray-800 rounded-l-sm"></div>
          <div className="absolute left-0 top-32 w-1 h-8 bg-gray-800 rounded-r-sm"></div>
        </div>
      </div>
    </section>
  );
};

export default ProjectCard;
