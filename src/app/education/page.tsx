"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGraduationCap, FaCertificate } from "react-icons/fa";

const EducationTimeline = () => {
  const [activeTab, setActiveTab] = useState("education");

  const educationData = [
    {
      title: "Bachelor's Degree in Computer Science",
      date: "2021 - 2025",
      description:
        "Completed studies at Dr. Ambedkar Institute of Technology with a CGPA of 7.7, gaining strong theoretical and practical skills.",
      icon: <FaGraduationCap className="text-2xl" />,
    },
    {
      title: "PUC",
      date: "2019 - 2021",
      description:
        "Completed PUC at MES Kishora Kendra with 73%, specializing in PCMC (Physics, Chemistry, Mathematics, and Computer Science).",
      icon: <FaGraduationCap className="text-2xl" />,
    },
    {
      title: "SSLC",
      date: "2018 - 2019",
      description:
        "Completed SSLC at MES Kishora Kendra with 76%, building a solid academic foundation.",
      icon: <FaGraduationCap className="text-2xl" />,
    },
  ];

  const certificationData = [
    {
      title: "Super Learner",
      date: "October 2025",
      description:
        "Completed Super Learner certification from McKinsey, enhancing learning strategies, memory techniques, and productivity skills.",
      icon: <FaCertificate className="text-2xl" />,
    },
    {
      title: "Master Full Stack Development",
      date: "September 2025 - October 2025",
      description:
        "Completed Master Full Stack Development course on Udemy, mastering comprehensive web development skills.",
      icon: <FaCertificate className="text-2xl" />,
    },
    {
      title: "Node.js - Beginner to Advance",
      date: "August 2025 - September 2025",
      description:
        "Completed Node.js course on Udemy, gaining advanced knowledge in server-side JavaScript, APIs, and Express.js.",
      icon: <FaCertificate className="text-2xl" />,
    },
    {
      title: "Certified Ethical Hacker (CEH)",
      date: "April 2024 - June 2024",
      description:
        "Completed CEH from EC COUNCIL, acquiring hands-on experience in cybersecurity, network security, and vulnerability assessment.",
      icon: <FaCertificate className="text-2xl" />,
    },
    {
      title: "Hackathon - Cognavi India Pvt Ltd",
      date: "January 2024",
      description:
        "Participated in hackathon at Indian Institute of Science. Developed Coalesce, a platform bridging the gap between educational institutions and industry demands.",
      icon: <FaCertificate className="text-2xl" />,
    },
    {
      title: "Java Full Stack Development",
      date: "Jun 2023 - Jan 2024",
      description:
        "Completed at Besant Technologies, gaining expertise in HTML, CSS, JavaScript, React.js, Core & Advanced Java, and MySQL.",
      icon: <FaCertificate className="text-2xl" />,
    },
  ];

  const displayData =
    activeTab === "education" ? educationData : certificationData;

  return (
    <div
      id="education"
      className="min-h-screen bg-gray-300 py-16 px-4 flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="inline-block relative pb-4">
            {" "}
            {/* Added padding-bottom to make room for line */}
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">
              <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
                🎓 EDUCATION & CERTIFICATIONS 📜{" "}
              </span>
            </h1>
            {/* Moved the line slightly closer to text, not over the buttons */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-green-600 to-transparent rounded-full" />
          </div>

          {/* Buttons stay below the line */}
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={() => setActiveTab("education")}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === "education"
                  ? "bg-green-900 text-white shadow-lg scale-105"
                  : "bg-white text-gray-900 hover:bg-gray-100 border-2 border-gray-400"
              }`}
            >
              <FaGraduationCap className="inline mr-2" />
              Education
            </button>
            <button
              onClick={() => setActiveTab("certification")}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === "certification"
                  ? "bg-green-900 text-white shadow-lg scale-105"
                  : "bg-white text-gray-900 hover:bg-gray-100 border-2 border-gray-400"
              }`}
            >
              <FaCertificate className="inline mr-2" />
              Certifications
            </button>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {displayData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white rounded-2xl p-6 border-2 border-gray-400 hover:border-green-600 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="inline-block p-4 rounded-xl mb-4 bg-green-100">
                  <div className="text-green-700">{item.icon}</div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm font-semibold mb-3 text-green-700">
                  {item.date}
                </p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
export default EducationTimeline;
