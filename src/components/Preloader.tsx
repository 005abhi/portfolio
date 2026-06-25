"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const terminalLines = [
  { text: "Initializing portfolio...", tag: "OK" },
  { text: "Loading modules...", tag: "OK" },
  { text: "Connecting to servers...", tag: "OK" },
  { text: "Compiling assets...", tag: "OK" },
  { text: "System ready. Launching...", tag: "DONE" },
];

const greetings = [
  "Hello",
  "こんにちは",
  "Hola",
  "안녕하세요",
  "Bonjour",
  "Привет",
  "Ciao",
  "ನಮಸ್ಕಾರ",
];

type Phase = "terminal" | "greetings" | "exit";

const appendTag = (i: number) =>
  (t: number[]) => [...t, i];

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [lineIndex, setLineIndex] = useState(0);
  const [visibleTags, setVisibleTags] = useState<number[]>([]);
  const [greetingIndex, setGreetingIndex] = useState(0);
  const [phase, setPhase] = useState<Phase>("terminal");
  const [showPreloader, setShowPreloader] = useState(true);

  // Terminal phase: stagger lines in every 500ms
  useEffect(() => {
    if (phase !== "terminal") return;

    let current = 0;
    const tagTimers: ReturnType<typeof setTimeout>[] = [];
    let transitionTimer: ReturnType<typeof setTimeout>;

    const interval = setInterval(() => {
      const i = current;
      const tagTimer = setTimeout(
        () => setVisibleTags(appendTag(i)),
        200,
      );
      tagTimers.push(tagTimer);
      current += 1;
      setLineIndex(current);
      if (current >= terminalLines.length) {
        clearInterval(interval);
        transitionTimer = setTimeout(() => setPhase("greetings"), 400);
      }
    }, 500);

    return () => {
      clearInterval(interval);
      tagTimers.forEach(clearTimeout);
      clearTimeout(transitionTimer);
    };
  }, [phase]);

  // Greetings phase: cycle every 180ms then exit
  useEffect(() => {
    if (phase !== "greetings") return;

    let idx = 0;
    const interval = setInterval(() => {
      idx += 1;
      if (idx < greetings.length) {
        setGreetingIndex(idx);
      } else {
        clearInterval(interval);
        setPhase("exit");
        setTimeout(() => {
          setShowPreloader(false);
          onComplete();
        }, 500);
      }
    }, 180);

    return () => clearInterval(interval);
  }, [phase, onComplete]);

  return (
    <AnimatePresence>
      {showPreloader && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black overflow-hidden"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
        >
          {/* Scanline overlay */}
          <div
            className="pointer-events-none absolute inset-0 z-10"
            style={{
              background:
                "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.08) 2px, rgba(0,0,0,0.08) 4px)",
            }}
          />

          {/* Terminal panel — top 60% */}
          <div className="w-full max-w-2xl px-6 mb-10 z-20">
            {/* Terminal header */}
            <div
              className="flex items-center gap-2 mb-4 pb-2 font-mono text-xs text-blue-400/60"
              style={{ borderBottom: "1px solid rgba(96,165,250,0.2)" }}
            >
              <span className="animate-pulse">▋</span>
              <span>&gt;_&nbsp;terminal</span>
            </div>

            {/* Terminal lines */}
            <div className="font-mono text-sm space-y-2">
              {terminalLines.slice(0, lineIndex).map((line, i) => (
                <motion.div
                  key={line.text}
                  className="flex items-center justify-between"
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  <span>
                    <span className="text-blue-400 mr-2">&gt;</span>
                    <span className="text-white/70">{line.text}</span>
                  </span>
                  {visibleTags.includes(i) && (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.15 }}
                      className={
                        line.tag === "DONE"
                          ? "text-blue-400 font-bold"
                          : "text-green-400"
                      }
                    >
                      [{line.tag}]
                    </motion.span>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Greetings zone — bottom 40% */}
          <AnimatePresence>
            {phase === "greetings" || phase === "exit" ? (
              <motion.div
                className="z-20 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <motion.span
                  key={greetingIndex}
                  className="glitch text-6xl sm:text-7xl font-black text-white tracking-tight"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.12 }}
                >
                  {greetings[greetingIndex]}
                </motion.span>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
