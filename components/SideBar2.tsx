"use client";

import React from "react";
import { IconLayout, IconPackage } from "@tabler/icons-react";
import { Blocks, Image, Layers3, MousePointerClick } from "lucide-react";
import { motion, Variants } from "motion/react";

import SideBarLink from "./SideBarLink";

type ComponentLink = {
  name: string;
  href: string;
  icon: React.ElementType;
};

const components: ComponentLink[] = [
  { name: "Button", href: "/button", icon: MousePointerClick },
  { name: "Card", href: "/card", icon: Image },
  { name: "Dashboard", href: "/dashboard", icon: IconPackage },
  { name: "Parallax", href: "/parallax", icon: Layers3 },
  { name: "Layout", href: "/motion-layout", icon: IconLayout },
];

const childVariants: Variants = {
  initial: { opacity: 0, y: -10 },
  animate: { opacity: 1, y: 0 },
};

const parentVariants: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.2,
    },
  },
  hover: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const SideBar2 = () => {
  return (
    <motion.aside
      initial={{ width: "4.5rem" }}
      whileHover={{ width: "16rem" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="bg-dot-pattern group sticky top-0 z-40 flex h-dvh shrink-0 flex-col overflow-x-hidden overflow-y-auto border-r border-white/5 bg-neutral-950/40 px-3 pt-28 pb-6 backdrop-blur-md"
    >
      <div className="mb-8 flex items-center gap-4 px-2.5 text-neutral-500 transition-colors duration-300 group-hover:text-cyan-500">
        <Blocks size={24} strokeWidth={1.5} className="shrink-0" />
        <span className="text-xs font-semibold tracking-widest whitespace-nowrap uppercase opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          Components
        </span>
      </div>

      <motion.ul
        initial="initial"
        animate="animate"
        variants={parentVariants}
        className="flex w-full flex-col gap-2"
      >
        {components.map((component) => (
          <motion.li
            variants={childVariants}
            key={component.name}
            className="flex"
          >
            <SideBarLink
              name={component.name}
              href={component.href}
              icon={component.icon}
            />
          </motion.li>
        ))}
      </motion.ul>
    </motion.aside>
  );
};

export default SideBar2;
