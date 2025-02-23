"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaCertificate } from "react-icons/fa";

const EducationTimeline: React.FC = () => {
  return (
    <div
      id="education"
      className="bg-gray-300 min-h-screen flex flex-col items-center py-12 px-4"
    >
      <h1 className="text-4xl font-bold text-gray-900 z-10">
        Education & Certification
      </h1>
      <br></br> <br></br>
      <div className="max-w-2xl w-full relative">
        <div className="absolute left-4 top-0 w-1 bg-gray-400 h-full"></div>
        <div className="relative space-y-8">
          {[
            {
              title: "Bachelor's Degree in Computer Science",
              date: "2021 - 2025",
              description:
                "Completed studies at Dr. Ambedkar Institute of Technology with a CGPA of 7.44, gaining strong theoretical and practical skills.",
              icon: <FaGraduationCap className="text-blue-500 text-2xl" />,
            },
            {
              title: "PUC",
              date: "2019 - 2021",
              description:
                "Completed PUC at MES Kishora Kendra with 73%, specializing in PCMC (Physics, Chemistry, Mathematics, and Computer Science).",
              icon: <FaGraduationCap className="text-blue-500 text-2xl" />,
            },
            {
              title: "SSLC",
              date: "2018 - 2019",
              description:
                "Completed SSLC at MES Kishora Kendra with 76%, building a solid academic foundation.",
              icon: <FaGraduationCap className="text-blue-500 text-2xl" />,
            },
            {
              title: "JAVA FULL STACK",
              date: "Jun 2023 - Jan 2024",
              description:
                "Completed Java Full Stack Development at Besant Technologies, gaining expertise in front-end (HTML, CSS, JavaScript, React.js), back-end (Core & Advanced Java), and database management (MySQL).",
              icon: <FaCertificate className="text-blue-700 text-2xl" />,
            },
            {
              title: "Certified Ethical Hacker (CEH)",
              date: "April 2024 - June 2024",
              description:
                "Completed Certified Ethical Hacker (CEH) from EC COUNCIL, acquiring hands-on experience in cybersecurity, network security, vulnerability assessment, and threat mitigation.",
              icon: <FaCertificate className="text-blue-700 text-2xl" />,
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="relative flex items-start space-x-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-md">
                {item.icon}
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md w-full">
                <h4 className="text-xl font-bold text-green-900">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm">{item.date}</p>
                <p className="text-gray-700 mt-2">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EducationTimeline;
