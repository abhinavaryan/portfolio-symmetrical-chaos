"use client";

import { motion } from "motion/react";

interface AchievementCardProps {
  title: string;
  organization: string;
  date: string;
  colSpan?: 2 | 3 | 4;
}

export default function AchievementCard({ title, organization, date, colSpan = 2 }: AchievementCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(139,92,246,0.4)" }}
      className={`glass p-lg rounded-2xl relative overflow-hidden flex flex-col justify-center ${
        colSpan === 4 ? "md:col-span-4 lg:col-span-4" : colSpan === 3 ? "md:col-span-3 lg:col-span-3" : "md:col-span-2 lg:col-span-2"
      }`}
    >
      <div className="absolute -right-10 -top-10 w-32 h-32 bg-violet-600/20 blur-2xl rounded-full" />
      
      <p className="text-xs text-violet-400 font-semibold mb-xs uppercase tracking-wider">{date}</p>
      <h3 className="text-2xl font-bold mb-xs text-white leading-tight">{title}</h3>
      <p className="text-gray-300">{organization}</p>
    </motion.div>
  );
}
