"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const ROLES = [
  "Software Engineer",
  "Full Stack Developer",
  "React Developer",
  "DevOps Enthusiast",
  "Cloud Computing Learner",
  "AI Enthusiast",
  "Problem Solver",
];

const NAV_LINKS = [
  { id: "about", label: "ABOUT" },
  { id: "projects", label: "PROJECTS" },
  { id: "experience", label: "EXPERIENCE" },
  { id: "education", label: "EDUCATION" },
];

const Hero = () => {
  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("");
  const [showMenu, setShowMenu] = useState(false);

  // Typing animation state
  const [displayed, setDisplayed] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing effect
  useEffect(() => {
    const current = ROLES[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(
        () => setDisplayed(current.slice(0, displayed.length + 1)),
        80,
      );
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(
        () => setDisplayed(current.slice(0, displayed.length - 1)),
        45,
      );
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  const handleScrollToSection = (
    e: React.MouseEvent,
    sectionId: string,
    text: string,
  ) => {
    e.preventDefault();
    setShowMenu(false);
    setLoading(true);
    setLoadingText(text);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => setLoading(false), 1000);
    }
  };

  return (
    <section className="h-screen relative flex flex-col items-center justify-center text-center overflow-hidden bg-gray-900 text-white">
      {/* Background Image */}
      <Image
        src="/images/bc.png"
        alt="Background"
        layout="fill"
        objectFit="cover"
        priority
        className="absolute top-0 left-0 w-full h-full object-[55%_30%] sm:object-[50%_60%]"
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/40 z-[1]" />

      {/* Faded watermark */}
      <div
        aria-hidden
        className="absolute inset-0 flex items-center justify-center z-[2] pointer-events-none select-none"
      >
        <span className="text-[18vw] font-black text-white opacity-[0.04] tracking-tighter whitespace-nowrap">
          ABHINANDAN
        </span>
      </div>

      {/* ── Glass Navbar ── */}
      <nav
        className="fixed top-5 left-1/2 -translate-x-1/2 z-50 flex items-center gap-6 px-7 py-3 rounded-full text-sm font-medium text-white"
        style={{
          background: "rgba(20,20,20,0.45)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          border: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        {/* Logo */}
        <div className="flex items-center gap-1.5 opacity-80 group transition-all duration-300 mr-2">
          <span className="inline-block group-hover:rotate-180 transition-transform duration-500">
            ©
          </span>
          <span className="relative overflow-hidden h-5 w-[100px]">
            <span className="absolute top-0 left-0 transition-all duration-300 opacity-100 group-hover:opacity-0 whitespace-nowrap">
              Code with Abhi
            </span>
            <span className="absolute top-0 left-0 opacity-0 transition-all duration-300 group-hover:opacity-100 whitespace-nowrap">
              Abhinandan
            </span>
          </span>
        </div>

        {/* Desktop links */}
        <div className="hidden sm:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) =>
                handleScrollToSection(e, link.id, ` ${link.label}...`)
              }
              className="hover:text-blue-400 transition-colors duration-200 tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile menu */}
        <div className="sm:hidden relative">
          <button
            onClick={() => setShowMenu((p) => !p)}
            className="text-xl focus:outline-none"
          >
            ⋮
          </button>
          {showMenu && (
            <div
              className="absolute right-0 top-10 w-44 rounded-xl overflow-hidden flex flex-col text-sm"
              style={{
                background: "rgba(20,20,20,0.85)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              {NAV_LINKS.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) =>
                    handleScrollToSection(e, link.id, ` ${link.label}...`)
                  }
                  className="px-4 py-3 hover:bg-white/10 transition text-left"
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* ── Hero Content ── */}
      <div className="relative z-10 flex flex-col items-center gap-3 px-4">
        {/* Hello I'm */}
        <p className="text-sm sm:text-base font-medium text-white/80 tracking-[0.2em] uppercase">
          Hello, I&apos;m
        </p>

        {/* Name */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight leading-none text-white">
          ABHINANDAN
        </h1>

        {/* Typing role */}
        <div className="h-8 sm:h-10 flex items-center justify-center text-lg sm:text-2xl font-semibold text-white/90">
          <span>{displayed}</span>
          <span className="ml-0.5 inline-block w-[2px] h-6 sm:h-7 bg-blue-400 animate-pulse" />
        </div>

        {/* Tech badges */}
        <div className="flex flex-wrap justify-center gap-2 mt-1">
          {[
            "Powered by Coffee ☕",
            "Bug Fixer 🐛",
            "Stack Overflower 🔍",
            "Ships at 3AM 🌙",
          ].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-medium rounded-full border border-white/20 text-white/60 bg-white/5 tracking-wide"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Social icons */}
        <div className="flex items-center gap-5 mt-4">
          <a
            href="https://github.com/005abhi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-white transition-colors duration-200"
            aria-label="GitHub"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/abhinandan-p-2a217b286/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-white transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Loader Overlay */}
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-md z-50">
          <h2 className="text-2xl sm:text-3xl font-bold text-white animate-pulse">
            {loadingText}
          </h2>
        </div>
      )}
    </section>
  );
};

export default Hero;
