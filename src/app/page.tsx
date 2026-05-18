"use client";

import HeroScene from "@/components/three/HeroScene";
import HeroFallback from "@/components/three/HeroFallback";
import Link from "next/link";
import { motion } from "motion/react";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 }
  }
};

export default function Home() {
  return (
    <div className="relative min-h-[calc(100vh-72px)] flex flex-col items-center py-12">
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full max-w-7xl px-6"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {/* Main Hero Card - 12 Columns */}
        <motion.div 
          variants={itemVariants}
          className="col-span-1 md:col-span-12 relative overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 rounded-[2rem] p-10 md:p-16 min-h-[400px] flex flex-col justify-center items-center text-center shadow-xl group"
        >
          <div className="absolute inset-0 z-0 opacity-50 transition-opacity duration-700 group-hover:opacity-100">
            <HeroScene />
            <HeroFallback />
          </div>
          
          <div className="z-10 relative">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 text-white">
              Abhinav <span className="text-indigo-400">Chauhan</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto font-light mb-8">
              AI & Software Engineer crafting intelligent systems, agents, and symmetrical chaos.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center">
              <Link 
                href="/projects" 
                className="px-8 py-4 rounded-full bg-indigo-600 hover:bg-indigo-500 transition-all duration-300 font-medium shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:shadow-[0_0_30px_rgba(99,102,241,0.6)] text-white hover:scale-105 active:scale-95"
              >
                Explore Projects
              </Link>
              <a 
                href="/resume.pdf" 
                target="_blank"
                className="px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/20 transition-all duration-300 font-medium text-white hover:scale-105 active:scale-95"
              >
                Download Resume
              </a>
            </div>
          </div>
        </motion.div>

        {/* Journey Card - 6 Columns (Left) */}
        <motion.div 
          variants={itemVariants}
          className="col-span-1 md:col-span-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-[2rem] p-10 flex flex-col justify-between shadow-lg hover:shadow-indigo-500/20 transition-all duration-500 group relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity duration-500 blur-2xl">
            <div className="w-32 h-32 bg-indigo-500 rounded-full" />
          </div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4 text-white tracking-tight">The Journey</h2>
            <p className="text-gray-300 mb-8 leading-relaxed font-light">
              Explore my trajectory through software engineering, exploring AI, and building intelligent agents from scratch.
            </p>
          </div>
          <Link 
            href="/journey"
            className="w-full py-4 text-center rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors text-indigo-300 font-medium z-10"
          >
            Trace Timeline &rarr;
          </Link>
        </motion.div>

        {/* Expertise Card - 6 Columns (Right) */}
        <motion.div 
          variants={itemVariants}
          className="col-span-1 md:col-span-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-[2rem] p-10 flex flex-col justify-between shadow-lg hover:shadow-purple-500/20 transition-all duration-500 group relative overflow-hidden"
        >
          <div className="absolute bottom-0 left-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity duration-500 blur-2xl">
            <div className="w-32 h-32 bg-purple-500 rounded-full" />
          </div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4 text-white tracking-tight">Expertise</h2>
            <p className="text-gray-300 mb-8 leading-relaxed font-light">
              Specialized in scalable architectures, large language models, CrewAI, LangGraph, and full-stack Next.js applications.
            </p>
          </div>
          <Link 
            href="/projects"
            className="w-full py-4 text-center rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors text-purple-300 font-medium z-10"
          >
            View Work &rarr;
          </Link>
        </motion.div>

        {/* Full Width Footer Card - 12 Columns */}
        <motion.div 
          variants={itemVariants}
          className="col-span-1 md:col-span-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-[2rem] p-8 flex flex-col md:flex-row items-center justify-between shadow-lg"
        >
          <div className="text-gray-400 font-light text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Abhinav Chauhan. Symmetrical Chaos.
          </div>
          <div className="flex space-x-6 text-sm font-medium">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">GitHub</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Twitter</a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
