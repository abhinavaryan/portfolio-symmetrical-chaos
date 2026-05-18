"use client";

import { motion, AnimatePresence } from "motion/react";
import MermaidDiagram from "./MermaidDiagram";
import { useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  chartDef: string;
  title: string;
}

export default function ArchitectureModal({ isOpen, onClose, chartDef, title }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass p-xl rounded-2xl shadow-[0_0_40px_rgba(99,102,241,0.2)]"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors text-xl"
            >
              ✕
            </button>
            <h3 className="text-2xl font-bold mb-md text-white">{title} Architecture</h3>
            <div className="p-md bg-black/40 rounded-xl overflow-x-auto">
              <MermaidDiagram chart={chartDef} />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
