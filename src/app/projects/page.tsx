"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "ElevateIQ ",
    description:
      "ElevateIQ is a comprehensive platform addressing India's academia-industry skills gap, built with Next.js (TypeScript) for the frontend, MongoDB for the backend, and integrating APIs like Gemini AI, NewsAPI, and Elevenlabs.",
    image: "/images/n.png",
    link: "https://github.com/005abhi/Elevate-iq",
  },
  {
    id: 2,
    title: "Jarvis AI Chatbot",
    description:
      "Jarvis is a voice-enabled AI chatbot built with React and Node.js, integrating the Gemini API for image processing, speech recognition, and real-time interactions.",
    image: "/images/j.png",
    link: "https://github.com/005abhi/JARVIS-AI-CHATBOT",
  },
  {
    id: 3,
    title: "Coalesce",
    description:
      "Coalesce is a platform bridging academia and industry in India by offering skill assessments, industry insights, curriculum integration, job matching, professional development, collaboration hubs, and analytics dashboards.",
    image: "/images/c.jpeg",
    link: "https://github.com/005abhi/Coalesce",
  },
];

const ProjectCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

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
      className="relative flex flex-col items-center justify-center min-h-screen bg-gray-300 p-10 overflow-hidden"
    >
      <h1 className="text-4xl font-bold text-gray-900 z-10">PROJECT</h1>

      {/* Laptop & Project Cards */}
      <div className="relative z-10 w-[900px] max-w-full mt-0">
        <Image
          src="/images/lppp.png"
          alt="Laptop"
          width={4000}
          height={2000}
          className="w-full h-auto"
        />

        {/* Screen Content - Project Details */}
        <div className="absolute top-[11.6%] left-[11.7%] w-[76.5%] h-[77.5%] bg-white shadow-md overflow-hidden rounded-lg flex items-center justify-center">
          <div className="w-full h-full p-10 flex items-center justify-between text-black">
            <AnimatePresence mode="wait">
              <motion.div
                key={projects[currentIndex].id}
                className="flex items-center w-full h-full"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {/* Left - Image */}
                <div className="relative w-1/2 flex justify-center">
                  <Image
                    src={projects[currentIndex].image}
                    alt={projects[currentIndex].title}
                    width={600}
                    height={200}
                    className="rounded-xl w-full max-w-[500px] shadow-lg"
                  />
                </div>

                {/* Right - Project Info */}
                <div className="w-1/2 pl-6">
                  <motion.h2
                    className="text-2xl font-bold text-green-700"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {projects[currentIndex].title}
                  </motion.h2>
                  <motion.p
                    className="text-lg text-gray-900 mt-3"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    {projects[currentIndex].description}
                  </motion.p>
                  <Link
                    href={projects[currentIndex].link}
                    className="mt-4 inline-block px-6 py-3 bg-green-800 text-white text-lg font-semibold rounded-lg hover:bg-green-600 transition"
                  >
                    Visit Now
                  </Link>
                  <div className="mt-4 flex justify-start gap-4">
                    <motion.button
                      onClick={handlePrev}
                      className="p-3 bg-green-700 rounded-full text-white hover:bg-green-600 text-xl"
                      whileHover={{
                        rotate: [0, -10, 10, -10, 10, 0],
                        transition: { duration: 0.4 },
                      }}
                    >
                      <ArrowLeft size={16} />
                    </motion.button>
                    <motion.button
                      onClick={handleNext}
                      className="p-3 bg-green-700 rounded-full text-white hover:bg-green-600 text-xl"
                      whileHover={{
                        rotate: [0, 10, -10, 10, -10, 0],
                        transition: { duration: 0.4 },
                      }}
                    >
                      <ArrowRight size={16} />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectCard;
