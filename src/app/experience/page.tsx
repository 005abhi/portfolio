"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

const ExperienceSection: React.FC = () => {
  const experiences = [
    {
      title: "Software Engineer 1",
      company: "Velesium Labs",
      type: "Full-time",
      duration: "Jul 2025 - Present",
      location: "Bengaluru, India",
      description:
        "Developing agentic LLM workflows using LangGraph for incident analysis and operational automation on real-time enterprise data. Optimizing Elasticsearch data pipelines, migrating AI workflows to newer LLM models, and improving ES|QL queries for operational insights. Also led end-to-end development of a multi-tenant ticket management system using Next.js, TypeScript, PostgreSQL (Neon), and JWT-based authentication, with WhatsApp integration and AI-powered n8n workflows.",
      skills: ["LangGraph", "LLM", "Elasticsearch", "Next.js", "TypeScript", "PostgreSQL", "n8n", "GitHub Actions"],
      current: true,
    },
    {
      title: "DevOps Engineer",
      company: "Rooman Technologies",
      type: "Internship",
      duration: "Feb 2025 - Jun 2025",
      location: "Bengaluru, India",
      description:
        "Contributed to a full-stack blogging application as part of a DevOps-focused project. Designed and implemented a CI/CD pipeline using GitHub Actions to automate build and deployment workflows, enabling faster and more reliable releases. Deployed and managed the application on AWS EC2, configuring the server environment for smooth hosting. Worked with Git and GitHub for version control and collaborative development.",
      skills: [
        "DevOps",
        "CI/CD",
        "Docker",
        "AWS EC2",
        "GitHub Actions",
        "MERN Stack",
        "Git",
      ],
      current: false,
    },
    {
      title: "Project Intern",
      company: "SYP Solutions",
      type: "Internship",
      duration: "Oct 2023 - Nov 2023 · 2 mos",
      location: "Bengaluru, Karnataka, India · Hybrid",
      description:
        "Integrated Python and Excel to combine data analysis with management features, enhancing efficiency and accuracy. Developed Python scripts to automate Excel tasks, generating dynamic reports and performing complex calculations. Applied Python scripts for various tasks in Excel, solving practical problems effectively.",
      skills: [
        "Python",
        "Microsoft Excel",
        "Data Analysis",
        "Automation",
        "Microsoft Office",
      ],
      current: false,
    },
    {
      title: "Student Intern",
      company: "Dr. Ambedkar Institute of Technology",
      type: "Internship",
      duration: "Nov 2022 - Dec 2022 · 2 mos",
      location: "Bengaluru, Karnataka, India",
      description:
        "Acquired knowledge of basic MATLAB functions and learned to display outputs in graphical form, including analyzing circuits and examining frequency response of sine waves. Gained experience in calling functions through GUI and developed the ability to apply MATLAB functions to solve biomedical engineering problems.",
      skills: [
        "MATLAB",
        "GUI",
        "Teamwork",
        "Report Writing",
        "Team Leadership",
      ],
      current: false,
    },
  ];

  return (
    <div id="experience" className="min-h-screen py-16 px-4" style={{ background: "var(--bg-base)" }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="inline-block relative">
            <h1 className="text-4xl sm:text-5xl font-bold mb-2" style={{ color: "var(--ink-accent)" }}>
              ▶ EXPERIENCE ◀
            </h1>
            <div className="absolute -bottom-2 left-0 right-0 h-1 rounded-full" style={{ background: "var(--ink-accent-mid)" }} />
          </div>
        </motion.div>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="hidden md:block absolute left-8 top-0 w-0.5 h-full" style={{ background: "var(--ink-accent)" }}></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="hidden md:flex absolute left-8 transform -translate-x-1/2 w-4 h-4 rounded-full shadow-lg z-10 mt-6" style={{ background: "var(--ink-accent-mid)" }}></div>

                {/* Experience Card */}
                <motion.div
                  whileHover={{ y: -5, scale: 1.01 }}
                  transition={{ duration: 0.3 }}
                  className="md:ml-20 rounded-2xl p-6 border border-gray-300 shadow-sm hover:shadow-md transition-all duration-300"
                  style={{ background: "var(--bg-surface)" }}
                >
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-2xl font-bold" style={{ color: "var(--ink-primary)" }}>
                          {exp.title}
                        </h3>
                        {exp.current && (
                          <span className="px-3 py-1 text-xs font-semibold rounded-full border" style={{ background: "oklch(90% 0.04 255)", color: "var(--ink-accent)", borderColor: "var(--ink-accent-mid)" }}>
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-lg font-semibold mb-1" style={{ color: "var(--ink-accent-mid)" }}>
                        {exp.company} · {exp.type}
                      </p>
                      <div className="flex flex-col md:flex-row md:items-center gap-2 text-sm" style={{ color: "var(--ink-secondary)" }}>
                        <div className="flex items-center gap-1">
                          <FaCalendarAlt className="text-orange-400" />
                          <span className="text-orange-400 font-medium">{exp.duration}</span>
                        </div>
                        <span className="hidden md:inline">•</span>
                        <div className="flex items-center gap-1">
                          <FaMapMarkerAlt style={{ color: "var(--ink-gold-deep)" }} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <FaBriefcase className="text-4xl" style={{ color: "var(--ink-muted)" }} />
                    </div>
                  </div>

                  {/* Description */}
                  <p className="leading-relaxed mb-4" style={{ color: "var(--ink-secondary)" }}>
                    {exp.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-sm rounded-full border transition-colors duration-200"
                        style={{ background: "oklch(92% 0.03 255)", color: "var(--ink-accent)", borderColor: "oklch(78% 0.06 255)" }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-green-600/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-gray-800/5 rounded-full blur-3xl pointer-events-none"></div>
      </div>
    </div>
  );
};

export default ExperienceSection;
