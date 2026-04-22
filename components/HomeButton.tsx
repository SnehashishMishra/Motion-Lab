"use client";

import React from "react";
import Link from "next/link";
import { IconHome } from "@tabler/icons-react";
import { motion } from "motion/react";

import { cn } from "@/lib/utils";

const HomeButton = ({ classes }: { classes?: string }) => {
  return (
    <Link href="/">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={cn(
          "absolute top-4 left-4 z-10 cursor-pointer rounded-full p-2 backdrop-blur-md transition-colors",
          "bg-white/10 text-neutral-200",
          "hover:bg-white/20 hover:text-white",
          classes,
        )}
      >
        <IconHome className="h-5 w-5" strokeWidth={1} />
      </motion.div>
    </Link>
  );
};

export default HomeButton;
