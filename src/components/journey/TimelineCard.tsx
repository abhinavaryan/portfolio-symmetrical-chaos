"use client";

import { motion } from "motion/react";

interface TimelineCardProps {
  date: string;
  title: string;
  body: string;
  isLeft: boolean;
}

export default function TimelineCard({ date, title, body, isLeft }: TimelineCardProps) {
  return (
    <div className={`mb-3xl flex justify-between items-center w-full ${isLeft ? "flex-row-reverse" : ""}`}>
      <div className="order-1 w-5/12 hidden md:block"></div>
      
      <div className="z-20 flex items-center order-1 bg-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.6)] w-4 h-4 rounded-full">
      </div>
      
      <motion.div 
        initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        whileHover={{ y: -5, boxShadow: "0 0 20px rgba(99,102,241,0.2)" }}
        className="order-1 w-11/12 md:w-5/12 px-lg py-md glass rounded-xl text-left"
      >
        <p className="mb-xs text-sm text-indigo-300 font-semibold">{date}</p>
        <h4 className="mb-sm font-bold text-xl text-white">{title}</h4>
        <p className="text-sm leading-snug text-gray-300 text-opacity-100">
          {body}
        </p>
      </motion.div>
    </div>
  );
}
