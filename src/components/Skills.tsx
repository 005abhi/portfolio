"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const categories = [
  {
    label: "Frontend",
    skills: [
      { name: "HTML",       logo: "/icons/html.png",    accent: "#e34c26" },
      { name: "CSS",        logo: "/icons/css.png",     accent: "#264de4" },
      { name: "JavaScript", logo: "/icons/js.png",      accent: "#d4a900" },
      { name: "React.js",   logo: "/icons/reactjs.png", accent: "#61dafb" },
      { name: "Next.js",    logo: "/icons/nextjs.png",  accent: "#888888" },
      { name: "Tailwind",   logo: "/icons/t.png",       accent: "#38bdf8" },
    ],
  },
  {
    label: "Backend",
    skills: [
      { name: "Node.js",    logo: "/icons/nodejs.png",  accent: "#68a063" },
      { name: "Express.js", logo: "/icons/E.png",       accent: "#888888" },
      { name: "Java",       logo: "/icons/java.png",    accent: "#f89820" },
    ],
  },
  {
    label: "Databases",
    skills: [
      { name: "PostgreSQL", logo: "/icons/pq.png",      accent: "#336791" },
      { name: "MongoDB",    logo: "/icons/mongodb.png", accent: "#4db33d" },
      { name: "MySQL",      logo: "/icons/sql.png",     accent: "#00758f" },
    ],
  },
];

const Skills = () => {
  return (
    <div id="skills" className="min-h-screen py-16 px-4" style={{ background: "var(--bg-base)" }}>
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-block relative pb-4">
            <h1 className="text-4xl sm:text-5xl font-bold mb-2" style={{ color: "var(--ink-accent)" }}>
              ⚡ MY SKILLS ⚡
            </h1>
            <div className="absolute bottom-0 left-0 right-0 h-1 rounded-full" style={{ background: "var(--ink-accent-mid)" }} />
          </div>
          <p className="mt-6 text-base" style={{ color: "var(--ink-secondary)" }}>
            Technologies I work with daily
          </p>
        </motion.div>

        {/* Categories */}
        <div className="space-y-10">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: ci * 0.1 }}
            >
              {/* Category label */}
              <div className="flex items-center gap-3 mb-5">
                <span className="text-xs font-bold tracking-[0.2em] uppercase" style={{ color: "var(--ink-muted)" }}>
                  {cat.label}
                </span>
                <div className="flex-1 h-px bg-gray-200" />
              </div>

              {/* Cards */}
              <div className="flex flex-wrap gap-3">
                {cat.skills.map((skill, si) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: si * 0.06 }}
                    whileHover={{ y: -5 }}
                    className="group relative flex items-center gap-3 px-4 py-3 rounded-xl border bg-white transition-all duration-300 cursor-default"
                    style={{
                      borderColor: "rgba(0,0,0,0.08)",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = `${skill.accent}60`;
                      (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 24px ${skill.accent}25`;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,0,0,0.08)";
                      (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 8px rgba(0,0,0,0.06)";
                    }}
                  >
                    {/* Icon */}
                    <div className="relative w-8 h-8 flex-shrink-0">
                      <Image src={skill.logo} alt={skill.name} fill className="object-contain" />
                    </div>

                    {/* Name */}
                    <span className="text-sm font-semibold whitespace-nowrap" style={{ color: "var(--ink-primary)" }}>
                      {skill.name}
                    </span>

                    {/* Accent dot */}
                    <div className="w-1.5 h-1.5 rounded-full flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: skill.accent }} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
