"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function CustomCursor() {
  const followerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const follower = followerRef.current;
    if (!follower) return;

    let hasMoved = false;

    const handleMouseMove = (e: MouseEvent) => {
      if (!hasMoved) {
        // First mouse move — set position immediately & show follower
        gsap.set(follower, {
          x: e.clientX - 20,
          y: e.clientY - 20,
        });
        setVisible(true);
        hasMoved = true;
        return;
      }

      // Animate smoothly after first move
      gsap.to(follower, {
        x: e.clientX - 20,
        y: e.clientY - 20,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={followerRef}
      className={`fixed top-0 left-0 w-7 h-7 border border-white rounded-full pointer-events-none z-[9999] mix-blend-difference transition-opacity duration-300 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    />
  );
}
