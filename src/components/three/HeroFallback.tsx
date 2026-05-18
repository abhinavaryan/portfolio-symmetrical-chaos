"use client";

import { motion } from "motion/react";

export default function HeroFallback() {
  return (
    <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden md:hidden">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
          rotate: [0, 90, 0]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="w-64 h-64 rounded-full bg-gradient-to-tr from-indigo-600 to-cyan-400 blur-3xl opacity-40"
      />
    </div>
  );
}
