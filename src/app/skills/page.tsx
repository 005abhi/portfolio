import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
const skills = [
  { name: "HTML", logo: "/icons/html.png" },
  { name: "CSS", logo: "/icons/css.png" },
  { name: "JAVA SCRIPT", logo: "/icons/js.png" },
  { name: "NODE JS", logo: "/icons/nodejs.png" },
  { name: "EXPRESS JS", logo: "/icons/E.png" },
  { name: "REACT JS", logo: "/icons/reactjs.png" },
  { name: "NEXT JS", logo: "/icons/nextjs.png" },
  { name: "TAILWIND CSS", logo: "/icons/t.png" },
  { name: "JAVA", logo: "/icons/java.png" },
  { name: "MY SQL", logo: "/icons/sql.png" },
  { name: "POSTGRESQL", logo: "/icons/pq.png" },
  { name: "MONGODB", logo: "/icons/mongodb.png" },
];

const Skills: React.FC = () => {
  return (
    <div id="skills" className="bg-gray-300 py-10 px-5">
      <div className="text-center mb-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="inline-block relative">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">
              <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
                ⚡ MY SKILLS ⚡
              </span>
            </h1>
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-green-600 to-transparent rounded-full" />
          </div>
        </motion.div>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 gap-5 place-items-center">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-white w-32 h-32 p-4 rounded-xl shadow-lg border-2 border-gray-400 transition-transform transform hover:scale-105 hover:border-green-600"
          >
            <img
              src={skill.logo}
              alt={skill.name}
              className="w-16 h-16 mb-2 object-contain"
            />
            <p className="text-sm text-center text-gray-900">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
