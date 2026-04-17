"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import NavLink from "./NavLink";

const Navbar = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > 150 && latest > previous!) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.div
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed inset-x-0 top-0 h-20 z-50 bg-neutral-950/60 text-white backdrop-blur-xl border-b border-white/5 shadow-sm p-4 px-8 md:px-20 flex items-center justify-between"
    >
      <div className="group cursor-pointer">
        <Link href="/" className="font-semibold text-xl tracking-tight">
          <span className="text-white group-hover:text-cyan-500 transition-colors duration-300">
            Motion
          </span>{" "}
          <span className="text-cyan-500 group-hover:text-white transition-colors duration-300">
            Lab
          </span>
        </Link>
      </div>
      <div className="flex gap-6">
        <NavLink name="Home" href="/" />
        <NavLink name="About" href="/" />
        <NavLink name="Contact" href="/" />
      </div>
    </motion.div>
  );
};

export default Navbar;
