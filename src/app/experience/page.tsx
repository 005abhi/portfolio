"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

const ExperienceSection: React.FC = () => {
  const experiences = [
    {
      title: "Web Developer",
      company: "Velesium Labs",
      type: "Internship",
      duration: "Jul 2025 - Present · 4 mos",
      location: "Remote",
      description:
        "Contributed to 4+ projects, including the company's flagship public-facing website, focusing on creating responsive, scalable, and maintainable solutions using Next.js, React.js, and Node.js. Collaborated closely with designers and developers to implement new features, optimize performance across devices and browsers, and streamline the development workflow.",
      skills: ["Front-End Development", "React.js", "Next.js", "Node.js"],
      current: true,
    },
    {
      title: "DevOps Engineer",
      company: "Rooman Technologies",
      type: "Internship",
      duration: "Feb 2025 - May 2025 · 4 mos",
      location: "Remote",
      description:
        "Developed and deployed a full-stack blogging platform using the MERN stack, integrating CI/CD pipelines with GitHub Actions and deploying to AWS EC2, improving deployment efficiency by 60%. Gained hands-on experience in core DevOps practices including CI/CD, containerization with Docker, version control using Git & GitHub, and cloud deployment on AWS.",
      skills: [
        "DevOps",
        "CI/CD",
        "Docker",
        "AWS EC2",
        "GitHub Actions",
        "MERN Stack",
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
    <div id="experience" className="min-h-screen bg-gray-300 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="inline-block relative">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">
              <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
                ▶ EXPERIENCE ◀
              </span>
            </h1>
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-green-600 to-transparent rounded-full" />
          </div>
        </motion.div>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="hidden md:block absolute left-8 top-0 w-0.5 h-full bg-gradient-to-b from-green-700 via-gray-600 to-gray-800"></div>

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
                <div className="hidden md:flex absolute left-8 transform -translate-x-1/2 w-4 h-4 rounded-full bg-green-700 shadow-lg z-10 mt-6"></div>

                {/* Experience Card */}
                <motion.div
                  whileHover={{ y: -5, scale: 1.01 }}
                  transition={{ duration: 0.3 }}
                  className="md:ml-20 bg-white rounded-2xl p-6 border-2 border-gray-400 shadow-xl hover:shadow-2xl hover:border-green-600 transition-all duration-300"
                >
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-2xl font-bold text-gray-900">
                          {exp.title}
                        </h3>
                        {exp.current && (
                          <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full border-2 border-green-700">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-lg text-green-700 font-semibold mb-1">
                        {exp.company} · {exp.type}
                      </p>
                      <div className="flex flex-col md:flex-row md:items-center gap-2 text-gray-700 text-sm">
                        <div className="flex items-center gap-1">
                          <FaCalendarAlt className="text-green-700" />
                          <span>{exp.duration}</span>
                        </div>
                        <span className="hidden md:inline">•</span>
                        <div className="flex items-center gap-1">
                          <FaMapMarkerAlt className="text-green-700" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <FaBriefcase className="text-4xl text-gray-400" />
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-800 leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-green-50 text-green-700 text-sm rounded-full border border-green-600 hover:bg-green-100 transition-colors duration-200"
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
