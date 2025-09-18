"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function LayoutTextFlip({
  text = "Build Amazing",
  words = ["Landing Pages", "Component Blocks", "Page Sections", "3D Shaders"],
  duration = 2000,
}: {
  text: string;
  words: string[];
  duration?: number;
}): React.ReactElement {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <motion.span
        layoutId="subtext"
        className="xs:text-3xl md:text-4xl font-bold tracking-tight drop-shadow-lg"
      >
        {text}
      </motion.span>

      <motion.span
        layout
        className="relative w-full overflow-hidden rounded-md border border-transparent px-2 py-1 font-sans sm:text-3xl md:text-4xl font-bold">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={currentIndex}
            initial={{ y: -40, filter: "blur(10px)" }}
            animate={{
              y: 0,
              filter: "blur(0px)",
            }}
            exit={{ y: 50, filter: "blur(10px)", opacity: 0 }}
            transition={{
              duration: 0.5,
            }}
            className="inline-block whitespace-nowrap"
          >
            {words[currentIndex]}
          </motion.span>
        </AnimatePresence>
      </motion.span>
    </>
  );
};
