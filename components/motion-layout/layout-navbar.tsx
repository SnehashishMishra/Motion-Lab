"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";

const LayoutNavbar = () => {
  type Route = "/home" | "/about" | "/contact" | "/login";
  type NavItems = { title: string; href: Route };
  const navItems: NavItems[] = [
    { title: "Home", href: "/home" },
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },
    { title: "Login", href: "/login" },
  ];

  const [hovered, setHovered] = useState<number | null>(null);
  return (
    <div className="py-40 text-black">
      <nav className="mx-auto flex max-w-xl rounded-full bg-gray-100 px-2 py-1 text-black">
        {navItems.map((item, idx) => (
          <Link
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
            key={item.title}
            href={item.href}
            className="group relative w-full py-2 text-center text-xs text-neutral-500"
          >
            {hovered == idx && (
              <motion.div
                layoutId="hover"
                className="absolute inset-0 h-full w-full rounded-full bg-black"
              ></motion.div>
            )}
            <span className="relative text-neutral-500 group-hover:text-neutral-400">
              {item.title}
            </span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default LayoutNavbar;
