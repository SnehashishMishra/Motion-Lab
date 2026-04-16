"use client";

import { motion } from "motion/react";
import React from "react";
import SideBarLink from "./SideBarLink";

type ComponentLink = {
  name: string;
  href: string;
};

const components: ComponentLink[] = [
  { name: "Button", href: "/button" },
  { name: "content", href: "/" },
];

const SideBar = () => {
  return (
    <motion.aside
      initial={{ opacity: 0, x: -10, width: 0 }}
      whileHover={{ opacity: 1, x: 0, width: "8rem" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className=" bg-neutral-900/40 overflow-y-auto overflow-x-hidden mt-20 bg-dot-pattern cursor-pointer p-4"
    >
      <div>Components</div>
      <div className="mt-10 flex flex-col gap-2">
        {components.map((component) => (
          <SideBarLink
            key={component.name}
            name={component.name}
            href={component.href}
          />
        ))}
      </div>
    </motion.aside>
  );
};

export default SideBar;
