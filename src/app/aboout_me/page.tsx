"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaRocket, FaBrain, FaLaptopCode } from "react-icons/fa";

const AboutMeSection: React.FC = () => {
  const highlights = [
    {
      icon: <FaCode className="text-3xl" />,
      title: "Full Stack Development",
      description:
        "Crafting with Next.js, React, and Node.js to build seamless digital experiences",
    },
    {
      icon: <FaRocket className="text-3xl" />,
      title: "Performance & Purpose",
      description:
        "Balancing beautiful design with fast, functional, and purposeful solutions",
    },
    {
      icon: <FaBrain className="text-3xl" />,
      title: "AI-Driven Innovation",
      description:
        "Exploring how AI and automation can shape smarter, scalable solutions",
    },
    {
      icon: <FaLaptopCode className="text-3xl" />,
      title: "Clean Code Philosophy",
      description:
        "Making technology feel effortless through clean, maintainable code",
    },
  ];

  return (
    <div
      id="about"
      className="min-h-screen bg-gray-300 py-10 sm:py-20 px-4 flex items-center relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.03, 0.05, 0.03],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-600 rounded-full blur-3xl"
        ></motion.div>
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
            opacity: [0.03, 0.05, 0.03],
          }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-800 rounded-full blur-3xl"
        ></motion.div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Main Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="inline-block mb-4">
                <h2 className="text-6xl font-bold mb-2 tracking-wide bg-gradient-to-r from-green-600 via-green-700 to-green-800 bg-clip-text text-transparent relative">
                  <span className="text-3xl">━━</span> ABOUT ME{" "}
                  <span className="text-3xl">━━</span>
                </h2>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Turning Ideas Into{" "}
                <span className="text-green-600">Digital Reality</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-gray-800 leading-relaxed"
            >
              I turn ideas into{" "}
              <span className="text-green-700 font-semibold">fast</span>,{" "}
              <span className="text-green-600 font-semibold">functional</span>,
              and{" "}
              <span className="text-green-800 font-semibold">beautiful</span>{" "}
              web experiences.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg text-gray-700 leading-relaxed"
            >
              A Full Stack Developer who loves crafting with{" "}
              <span className="text-gray-900 font-semibold">Next.js</span>,{" "}
              <span className="text-gray-900 font-semibold">React</span>, and{" "}
              <span className="text-gray-900 font-semibold">Node.js</span>, I
              build digital products that balance design, performance, and
              purpose.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="pt-4"
            >
              <p className="text-lg text-gray-700 leading-relaxed mb-2">
                Currently creating at{" "}
                <span className="text-green-700 font-semibold">
                  Velesium Labs
                </span>
                , exploring how AI and clean code can shape smarter, scalable
                solutions.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                I'm deeply curious about{" "}
                <span className="text-green-600 font-semibold">
                  AI-driven development
                </span>
                ,{" "}
                <span className="text-green-700 font-semibold">automation</span>
                , and how clean code can make technology feel effortless.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Side - Highlight Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="bg-white rounded-2xl p-6 border-2 border-gray-400 hover:border-green-600 transition-all duration-300 group shadow-lg"
              >
                <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-green-700 group-hover:text-green-600 transition-colors">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Stats or Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { label: "Projects Completed", value: "10+" },
            { label: "Technologies", value: "15+" },
            { label: "Internships", value: "4" },
            { label: "Certifications", value: "5+" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="text-center p-4 bg-white rounded-xl border-2 border-gray-400 shadow-md"
            >
              <div className="text-3xl md:text-4xl font-bold text-green-700 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-700 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMeSection;
