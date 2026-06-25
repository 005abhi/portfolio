"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const categories = [
  {
    label: "Frontend",
    accent: "#3b82f6",
    skills: [
      { name: "HTML", logo: "/icons/html.png" },
      { name: "CSS", logo: "/icons/css.png" },
      { name: "JavaScript", logo: "/icons/js.png" },
      { name: "React.js", logo: "/icons/reactjs.png" },
      { name: "Next.js", logo: "/icons/nextjs.png" },
      { name: "Tailwind CSS", logo: "/icons/t.png" },
    ],
  },
  {
    label: "Backend",
    accent: "#10b981",
    skills: [
      { name: "Node.js", logo: "/icons/nodejs.png" },
      { name: "Express.js", logo: "/icons/E.png" },
      { name: "Java", logo: "/icons/java.png" },
    ],
  },
  {
    label: "Databases",
    accent: "#f59e0b",
    skills: [
      { name: "PostgreSQL", logo: "/icons/pq.png" },
      { name: "MongoDB", logo: "/icons/mongodb.png" },
      { name: "MySQL", logo: "/icons/sql.png" },
    ],
  },
];

const Skills = () => {
  return (
    <div id="skills" className="min-h-screen py-16 px-4" style={{ background: "var(--bg-base)" }}>
      <div className="max-w-6xl mx-auto">

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
        <div className="space-y-12">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: ci * 0.1 }}
            >
              {/* Category label */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-3 h-3 rounded-full" style={{ background: cat.accent }} />
                <h2 className="text-sm font-bold tracking-[0.15em] uppercase" style={{ color: cat.accent }}>
                  {cat.label}
                </h2>
                <div className="flex-1 h-px" style={{ background: `${cat.accent}30` }} />
              </div>

              {/* Skill cards */}
              <div className="flex flex-wrap gap-4">
                {cat.skills.map((skill, si) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: si * 0.06 }}
                    whileHover={{ y: -6, boxShadow: `0 12px 30px ${cat.accent}25` }}
                    className="flex flex-col items-center justify-center gap-2 w-28 h-28 rounded-2xl border transition-all duration-300 cursor-default"
                    style={{
                      background: "var(--bg-surface)",
                      borderColor: `${cat.accent}25`,
                      borderTopWidth: "3px",
                      borderTopColor: cat.accent,
                    }}
                  >
                    <div className="w-12 h-12 relative">
                      <Image
                        src={skill.logo}
                        alt={skill.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <p className="text-xs font-semibold text-center leading-tight px-1" style={{ color: "var(--ink-primary)" }}>
                      {skill.name}
                    </p>
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
