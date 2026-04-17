"use client";

import React from "react";
import Link from "next/link";
import { motion, Variants } from "motion/react";

type SideBarLinksProps = {
  name: string;
  href: string;
  icon: React.ElementType;
};

const MotionLink = motion.create(Link);

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

const SideBarLink = ({ name, href, icon: Icon }: SideBarLinksProps) => {
  return (
    <div className="flex w-full">
      <MotionLink
        href={href}
        className="relative flex items-center gap-4 px-2.5 py-2.5 w-full rounded-lg text-neutral-300 hover:text-cyan-400 hover:bg-white/5 transition-all duration-300 overflow-hidden"
        initial="initial"
        whileHover="hover"
      >
        <span className="flex shrink-0 items-center justify-center">
          <Icon size={22} strokeWidth={1.5} />
        </span>
        <span className="whitespace-nowrap font-medium text-[15px]">
          {name}
        </span>

        <motion.span
          className="absolute left-0 bottom-0 w-full h-px bg-linear-to-r from-transparent via-cyan-500/50 to-transparent"
          variants={underlineVariants}
        />
      </MotionLink>
    </div>
  );
};

export default SideBarLink;
