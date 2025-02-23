"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const greetings = [
  " · Hello",
  " · こんにちは",
  " · Hola",
  " · 안녕하세요",
  " · Bonjour",
  " · Привет",
  " · Ciao",
  " · ನಮಸ್ಕಾರ",
];

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [index, setIndex] = useState(0);
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev < greetings.length - 1 ? prev + 1 : prev));
    }, 200); // Faster transitions (every 400ms)

    setTimeout(() => {
      clearInterval(interval);
      setShowPreloader(false);
      onComplete();
    }, greetings.length * 250); // Ends quickly but smoothly

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {showPreloader && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black text-white text-6xl font-bold"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.6, ease: "easeInOut" },
          }} // Smooth fade-out
        >
          <motion.span
            key={greetings[index]}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }} // Faster appearance
          >
            {greetings[index]}
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
