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
        "Building end-to-end products with Next.js, React, Node.js, TypeScript, and PostgreSQL — from UI to deployment.",
    },
    {
      icon: <FaRocket className="text-3xl" />,
      title: "DevOps & Cloud",
      description:
        "CI/CD pipelines with GitHub Actions, AWS EC2 deployments, Docker containerization, and scalable cloud infrastructure.",
    },
    {
      icon: <FaBrain className="text-3xl" />,
      title: "AI-Driven Workflows",
      description:
        "Building agentic LLM workflows using LangGraph, integrating Gemini AI, and automating intelligent operations at scale.",
    },
    {
      icon: <FaLaptopCode className="text-3xl" />,
      title: "Backend & Databases",
      description:
        "Designing APIs with Express.js, FastAPI, and Flask, backed by PostgreSQL, MongoDB, MySQL, and Elasticsearch.",
    },
  ];

  return (
    <div
      id="about"
      className="min-h-screen py-10 sm:py-20 px-4 flex items-center relative overflow-hidden"
      style={{ background: "var(--bg-base)" }}
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
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{ background: "var(--ink-accent)" }}
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
                <h2 className="text-6xl font-bold mb-2 tracking-wide relative" style={{ color: "var(--ink-accent)" }}>
                  <span className="text-3xl">━━</span> ABOUT ME{" "}
                  <span className="text-3xl">━━</span>
                </h2>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6" style={{ color: "var(--ink-primary)" }}>
                Building Things That{" "}
                <span style={{ color: "var(--ink-accent-mid)" }}>Actually Work</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl leading-relaxed" style={{ color: "var(--ink-primary)" }}
            >
              CS graduate from{" "}
              <span className="font-semibold" style={{ color: "var(--ink-accent-mid)" }}>Dr. Ambedkar Institute of Technology</span>{" "}
              with over a year of professional experience in software engineering and DevOps.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg leading-relaxed" style={{ color: "var(--ink-secondary)" }}
            >
              Currently working as a{" "}
              <span className="font-semibold" style={{ color: "var(--ink-primary)" }}>Software Engineer at Velesium Labs</span>,
              building agentic LLM workflows with LangGraph, optimizing Elasticsearch pipelines,
              and developing multi-tenant full-stack platforms with Next.js, TypeScript, and PostgreSQL.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-lg leading-relaxed" style={{ color: "var(--ink-secondary)" }}
            >
              Previously interned at{" "}
              <span className="font-semibold" style={{ color: "var(--ink-accent-mid)" }}>Rooman Technologies</span>{" "}
              as a DevOps Engineer — designing CI/CD pipelines with GitHub Actions and deploying on{" "}
              <span className="font-semibold" style={{ color: "var(--ink-primary)" }}>AWS EC2</span>.
              Passionate about cloud technologies and pursuing expertise in scalable cloud solutions.
            </motion.p>
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
                className="rounded-2xl p-6 border border-gray-300 hover:border-[oklch(44%_0.13_150)] transition-all duration-300 group shadow-sm hover:shadow-md"
                style={{ background: "var(--bg-surface)" }}
              >
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300" style={{ background: "oklch(90% 0.04 255)" }}>
                  <div style={{ color: "var(--ink-accent)" }}>
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ color: "var(--ink-primary)" }}>
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--ink-secondary)" }}>
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-14"
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="text-xs font-bold tracking-[0.2em] uppercase" style={{ color: "var(--ink-muted)" }}>Tech Stack</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              { name: "Python",        logo: "/icons/python.png"   },
              { name: "React.js",      logo: "/icons/reactjs.png"  },
              { name: "Next.js",       logo: "/icons/nextjs.png"   },
              { name: "Tailwind CSS",  logo: "/icons/t.png"        },
              { name: "Node.js",       logo: "/icons/nodejs.png"   },
              { name: "Express.js",    logo: "/icons/E.png"        },
              { name: "FastAPI",       logo: "/icons/fastapi.png"  },
              { name: "PostgreSQL",    logo: "/icons/pq.png"       },
              { name: "MongoDB",       logo: "/icons/mongodb.png"  },
              { name: "MySQL",         logo: "/icons/sql.png"      },
              { name: "Elasticsearch", logo: "/icons/elastic.png"  },
              { name: "AWS",           logo: "/icons/aws.png"      },
              { name: "Docker",        logo: "/icons/docker.png"   },
            ].map((s) => (
              <div
                key={s.name}
                className="flex items-center gap-2.5 px-5 py-2.5 rounded-full border bg-white text-base font-medium"
                style={{ borderColor: "rgba(0,0,0,0.1)", color: "var(--ink-primary)" }}
              >
                {s.logo && <img src={s.logo} alt={s.name} className="w-5 h-5 object-contain" />}
                {s.name}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Stats or Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { label: "Projects Built", value: "3+" },
            { label: "Technologies", value: "20+" },
            { label: "Work Experience", value: "1yr" },
            { label: "Certifications", value: "6+" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="text-center p-4 rounded-xl border border-gray-300 shadow-sm"
              style={{ background: "var(--bg-surface)" }}
            >
              <div className="text-3xl md:text-4xl font-bold mb-2" style={{ color: "var(--ink-accent)" }}>
                {stat.value}
              </div>
              <div className="text-sm" style={{ color: "var(--ink-secondary)" }}>{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMeSection;
