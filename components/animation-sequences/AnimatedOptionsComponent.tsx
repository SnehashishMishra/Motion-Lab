import React from "react";
import Link from "next/link";
import { motion } from "motion/react";

const AnimatedOptionsComponent = () => {
  const classes =
    "rounded-full px-3 py-2 w-55 text-center hover:bg-neutral-200/90 transition-color duration-300";

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gray-200 text-black">
      <motion.div
        initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
        animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="flex h-4 w-80 items-center justify-between rounded-full bg-gray-400 px-2 py-6"
      >
        <div className={classes}>
          <Link href={"animation-sequences/animated-button"}>
            Animated Button
          </Link>
        </div>
        <div className={classes}>
          <Link href={"animation-sequences/animated-text"}>Animated Text</Link>
        </div>
      </motion.div>
    </div>
  );
};

export default AnimatedOptionsComponent;
