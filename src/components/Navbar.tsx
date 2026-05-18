"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Journey", href: "/journey" },
  { name: "Projects", href: "/projects" },
  { name: "Skills", href: "/skills" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/20 border-t-0 border-l-0 border-r-0">
      <div className="max-w-7xl mx-auto px-base py-sm flex justify-between items-center">
        <Link href="/" className="font-bold text-xl tracking-tighter">
          <motion.span 
            whileHover={{ y: -2, textShadow: "0px 0px 8px rgba(255,255,255,0.8)" }}
            className="inline-block"
          >
            Abhinav
          </motion.span>
        </Link>

        <ul className="flex space-x-md">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.name}>
                <Link href={link.href} className="relative block px-sm py-xs">
                  <motion.span
                    whileHover={{ y: -2 }}
                    className={`inline-block transition-colors ${isActive ? "text-white" : "text-gray-400 hover:text-white"}`}
                  >
                    {link.name}
                  </motion.span>
                  {isActive && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute left-0 right-0 bottom-0 h-[2px] bg-indigo-500 rounded-t-sm"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
