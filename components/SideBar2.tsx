"use client";

import { motion, Variants } from "motion/react";
import React from "react";
import SideBarLink from "./SideBarLink";
import { MousePointerClick, Image, Blocks } from "lucide-react";
import { IconPackage } from "@tabler/icons-react";

type ComponentLink = {
  name: string;
  href: string;
  icon: React.ElementType;
};

const components: ComponentLink[] = [
  { name: "Button", href: "/button", icon: MousePointerClick },
  { name: "Card", href: "/card", icon: Image },
  { name: "Dashboard", href: "/dashboard", icon: IconPackage },
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
      className="sticky top-0 shrink-0 h-dvh z-40 bg-neutral-950/40 border-r border-white/5 backdrop-blur-md overflow-y-auto overflow-x-hidden bg-dot-pattern pt-28 pb-6 px-3 flex flex-col group"
    >
      <div className="flex items-center gap-4 px-2.5 mb-8 text-neutral-500 group-hover:text-cyan-500 transition-colors duration-300">
        <Blocks size={24} strokeWidth={1.5} className="shrink-0" />
        <span className="font-semibold text-xs tracking-widest uppercase whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Components
        </span>
      </div>

      <motion.ul
        initial="initial"
        animate="animate"
        variants={parentVariants}
        className="flex flex-col gap-2 w-full"
      >
        {components.map((component) => (
          <motion.li variants={childVariants} key={component.name} className="flex">
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
