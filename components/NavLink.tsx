"use client"; // 1. CRITICAL: Required for Framer Motion interactivity in Next.js

import Link from "next/link"; // 2. Corrected import
import { motion, Variants } from "motion/react";

type NavLinksProps = {
  name: string;
  href: string;
};

// 3. THE MAGIC FIX: Use `motion.create()` for strict TypeScript compatibility
const MotionLink = motion.create(Link);

// Defined outside to prevent unnecessary re-renders
const underlineVariants: Variants = {
  initial: {
    scaleX: 0,
    originX: 0.5,
  },
  hover: {
    scaleX: 1,
    originX: 0.5,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const NavLink = ({ name, href }: NavLinksProps) => {
  return (
    <div className="flex gap-4">
      {/* 4. Use your newly created type-safe MotionLink */}
      <MotionLink
        href={href}
        className="relative px-1 py-0.5 hover:text-cyan-500 transition-colors duration-300"
        initial="initial"
        whileHover="hover"
      >
        {name}

        <motion.span
          className="absolute left-0 bottom-0 w-full h-px bg-linear-to-r from-transparent via-cyan-500 to-transparent"
          variants={underlineVariants}
        />
      </MotionLink>
    </div>
  );
};

export default NavLink;
