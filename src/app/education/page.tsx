"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGraduationCap, FaCertificate, FaCalendarAlt } from "react-icons/fa";

const educationData = [
  {
    title: "Bachelor's in Computer Science",
    institution: "Dr. Ambedkar Institute of Technology",
    date: "2021 – 2025",
    bullets: [
      "CGPA: 7.69",
      "Computer Science & Engineering",
      "4 Years",
      "Bangalore",
    ],
    chips: ["B.E", "CSE", "CGPA 7.69"],
    accent: "#3b82f6",
  },
  {
    title: "Pre-University (PCMC)",
    institution: "MES Kishora Kendra P.U. College",
    date: "2019 – 2021",
    bullets: ["Percentage: 73%", "Physics, Chemistry, Maths & CS", "2 Years"],
    chips: ["PUC", "PCMC", "73%"],
    accent: "#8b5cf6",
  },
  {
    title: "SSLC",
    institution: "MES Kishora Kendra",
    date: "2018 – 2019",
    bullets: ["Percentage: 76%", "Strong academic foundation"],
    chips: ["SSLC", "76%"],
    accent: "#06b6d4",
  },
];

const certificationData = [
  {
    title: "McKinsey Forward Program",
    institution: "McKinsey & Company",
    date: "October 2025",
    bullets: [
      "Learning strategies & memory techniques",
      "Productivity skills",
      "Credly Digital Badge",
    ],
    chips: ["Leadership", "Productivity"],
    accent: "#3b82f6",
  },
  {
    title: "Master Full Stack Development",
    institution: "Udemy",
    date: "Sep – Oct 2025",
    bullets: [
      "Comprehensive web development",
      "Frontend & Backend",
      "Real-world projects",
    ],
    chips: ["React", "Node.js", "Full Stack"],
    accent: "#a855f7",
  },
  {
    title: "Node.js – Beginner to Advance",
    institution: "Udemy",
    date: "Aug – Sep 2025",
    bullets: [
      "Server-side JavaScript",
      "Express.js & REST APIs",
      "MongoDB integration",
    ],
    chips: ["Node.js", "Express", "MongoDB"],
    accent: "#10b981",
  },
  {
    title: "Certified Ethical Hacker (CEH)",
    institution: "EC-Council",
    date: "Apr – Jun 2024",
    bullets: [
      "Network security",
      "Vulnerability assessment",
      "Cybersecurity hands-on",
    ],
    chips: ["CEH", "Cybersecurity", "Networking"],
    accent: "#ef4444",
  },
  {
    title: "Hackathon – Cognavi India",
    institution: "Indian Institute of Science",
    date: "January 2024",
    bullets: [
      "Built 'Coalesce' platform",
      "Bridging education & industry",
      "Team collaboration",
    ],
    chips: ["Hackathon", "Next.js", "AI"],
    accent: "#f59e0b",
  },
  {
    title: "Java Full Stack Development",
    institution: "Besant Technologies",
    date: "Jun 2023 – Jan 2024",
    bullets: [
      "Core & Advanced Java",
      "React.js & MySQL",
      "HTML, CSS, JavaScript",
    ],
    chips: ["Java", "React.js", "MySQL"],
    accent: "#06b6d4",
  },
];

const EducationTimeline = () => {
  const [activeTab, setActiveTab] = useState("education");
  const displayData =
    activeTab === "education" ? educationData : certificationData;

  return (
    <div
      id="education"
      className="min-h-screen py-16 px-4 flex items-center"
      style={{ background: "var(--bg-base)" }}
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="inline-block relative pb-4">
            <h1
              className="text-4xl sm:text-5xl font-bold mb-2"
              style={{ color: "var(--ink-accent)" }}
            >
              🎓 EDUCATION & CERTIFICATIONS 📜
            </h1>
            <div
              className="absolute bottom-0 left-0 right-0 h-1 rounded-full"
              style={{ background: "var(--ink-accent-mid)" }}
            />
          </div>

          <div className="flex justify-center gap-4 mt-6">
            {["education", "certification"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="px-8 py-3 rounded-full font-semibold transition-all duration-300 capitalize flex items-center gap-2"
                style={
                  activeTab === tab
                    ? {
                        background: "var(--ink-accent)",
                        color: "#fff",
                        transform: "scale(1.05)",
                      }
                    : {
                        background: "var(--bg-surface)",
                        color: "var(--ink-primary)",
                        border: "1px solid oklch(80% 0.01 240)",
                      }
                }
              >
                {tab === "education" ? <FaGraduationCap /> : <FaCertificate />}
                {tab === "education" ? "Education" : "Certifications"}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {displayData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{
                  y: -10,
                  rotate: 0.5,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
                }}
                className="rounded-2xl border border-gray-200 overflow-hidden transition-all duration-300 group"
                style={{
                  background: "var(--bg-surface)",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
                }}
              >
                {/* Colored top border */}
                <div
                  className="h-1.5 w-full"
                  style={{ background: item.accent }}
                />

                <div className="p-6 pt-8 relative">
                  {/* Floating icon */}
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:rotate-12"
                    style={{
                      background: `${item.accent}18`,
                      border: `1.5px solid ${item.accent}40`,
                    }}
                  >
                    <span style={{ color: item.accent, fontSize: "1.5rem" }}>
                      {activeTab === "education" ? (
                        <FaGraduationCap />
                      ) : (
                        <FaCertificate />
                      )}
                    </span>
                  </div>

                  {/* Title & institution */}
                  <h3
                    className="text-lg font-bold mb-0.5 leading-tight"
                    style={{ color: "var(--ink-primary)" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-sm font-medium mb-3"
                    style={{ color: "var(--ink-secondary)" }}
                  >
                    {item.institution}
                  </p>

                  {/* Date pill */}
                  <div
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full mb-4 text-xs font-semibold"
                    style={{
                      background: `${item.accent}15`,
                      color: item.accent,
                      border: `1px solid ${item.accent}30`,
                    }}
                  >
                    <FaCalendarAlt className="text-[10px]" />
                    {item.date}
                  </div>

                  {/* Bullet points */}
                  <ul className="space-y-1.5 mb-4">
                    {item.bullets.map((b, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm"
                        style={{ color: "var(--ink-secondary)" }}
                      >
                        <span
                          className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ background: item.accent }}
                        />
                        {b}
                      </li>
                    ))}
                  </ul>

                  {/* Chips */}
                  <div className="flex flex-wrap gap-1.5">
                    {item.chips.map((chip, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-0.5 text-xs font-medium rounded-full"
                        style={{
                          background: `${item.accent}15`,
                          color: item.accent,
                          border: `1px solid ${item.accent}30`,
                        }}
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
export default EducationTimeline;
