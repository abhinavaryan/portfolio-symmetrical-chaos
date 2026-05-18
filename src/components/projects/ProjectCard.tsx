"use client";

import { motion } from "motion/react";
import { useState } from "react";
import ArchitectureModal from "./ArchitectureModal";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  colSpan?: 1 | 2;
  hasArchitecture?: boolean;
  chartDef?: string;
}

export default function ProjectCard({ title, description, tags, colSpan = 1, hasArchitecture, chartDef }: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div
        whileHover={{ y: -8, boxShadow: "0 10px 30px -10px rgba(99,102,241,0.5)" }}
        className={`glass p-lg rounded-2xl flex flex-col justify-between ${colSpan === 2 ? "md:col-span-2 lg:col-span-2" : "col-span-1"}`}
      >
        <div>
          <h3 className="text-2xl font-bold mb-sm text-white">{title}</h3>
          <p className="text-gray-300 mb-md line-clamp-3">{description}</p>
        </div>
        
        <div>
          <div className="flex flex-wrap gap-2 mb-md">
            {tags.map(tag => (
              <span key={tag} className="px-3 py-1 text-xs font-medium rounded-full bg-indigo-500/20 text-indigo-200 border border-indigo-500/30">
                {tag}
              </span>
            ))}
          </div>
          
          <div className="flex gap-4">
            {hasArchitecture && (
              <button 
                onClick={() => setIsModalOpen(true)}
                className="text-sm font-medium px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors border border-white/10"
              >
                System Architecture
              </button>
            )}
          </div>
        </div>
      </motion.div>

      {hasArchitecture && chartDef && (
        <ArchitectureModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
          chartDef={chartDef} 
          title={title} 
        />
      )}
    </>
  );
}
