"use client";
import { useEffect, useState } from "react";
import Hero from "@/components/Hero";
import Projects from "./projects/page";
import EducationTimeline from "./education/page";
import Skills from "./skills/page";
import Footer from "@/components/fotter";
import Preloader from "@/components/Preloader";
import "../styles/globals.css";
import { motion } from "framer-motion";
import Lenis from "lenis"; // Fix: Proper import

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const lenisInstance = new Lenis(); // Fix: Proper variable name

    function raf(time: any) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="overflow-hidden">
      {loading ? (
        <Preloader onComplete={() => setLoading(false)} />
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }} // Smooth fade-in of content
        >
          <Hero />
          <Projects />
          <EducationTimeline />
          <Skills />
          <Footer />
        </motion.div>
      )}
    </div>
  );
}
