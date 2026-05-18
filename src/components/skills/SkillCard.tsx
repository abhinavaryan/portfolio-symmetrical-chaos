"use client";

import { motion } from "motion/react";

interface SkillCardProps {
  name: string;
  category: string;
  level: number; // 1 to 100
  colSpan?: 1 | 2;
}

export default function SkillCard({ name, category, level, colSpan = 1 }: SkillCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(34,211,238,0.3)" }}
      className={`glass p-lg rounded-2xl flex flex-col justify-between ${colSpan === 2 ? "md:col-span-2 lg:col-span-2" : "col-span-1"}`}
    >
      <div>
        <p className="text-xs text-cyan-400 font-semibold mb-xs uppercase tracking-wider">{category}</p>
        <h3 className="text-xl font-bold mb-md text-white">{name}</h3>
      </div>
      
      <div className="w-full bg-white/10 rounded-full h-1.5 mt-auto">
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="bg-gradient-to-r from-indigo-500 to-cyan-400 h-1.5 rounded-full"
        />
      </div>
    </motion.div>
  );
}
