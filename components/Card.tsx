"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { MessageSquareText, X } from "lucide-react";
import React, { useState } from "react";
import {
  Icon24Hours,
  Icon360View,
  Icon3dCubeSphere,
  IconPlus,
} from "@tabler/icons-react";
import { AnimatePresence, easeInOut, motion } from "motion/react";

const Card = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.98, filter: "blur(10px)" }}
            transition={{ duration: 0.3, ease: easeInOut }}
            className={cn(
              "w-72 min-h-104 h-112 rounded-xl",
              "shadow-[0_1px_1px_0_rgba(0,0,0,0.05),0_4px_6px_rgba(32,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]",
              "p-6 flex flex-col",
              "bg-white",
            )}
          >
            <h2 className="font-bold text-[10px]">MotionLab UI Components</h2>
            <p className="text-neutral-600 mt-2 text-[10px]">
              A collection of reusableUI components, let's get on with it.
            </p>
            <div className="flex items-center justify-center">
              <button
                className={cn(
                  "flex items-center gap-1 mt-4 text-[10px]",
                  "px-2 py-1 rounded-md shadow-card",
                  "cursor-pointer",
                )}
                onClick={() => setIsOpen(false)}
              >
                <Image
                  src="/motionlab-logo.png"
                  alt="logo"
                  className="h-4 w-4"
                  width={50}
                  height={50}
                />
                Motionlab
                <X className="h-3 w-3 text-neutral-400" />
              </button>
            </div>
            {/* Motion Divs here */}
            {/* flex-1  is to tell the container to grow and fill the available space */}
            <div className="relative bg-gray-100 flex-1 mt-4 rounded-lg border border-dashed border-neutral-200">
              <motion.div
                initial={{ opacity: 0, scale: 0.98, filter: "blur(10px)" }}
                whileHover={{ opacity: 1, scale: 1.05, filter: "blur(0px" }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                  mass: 0.5,
                  ease: easeInOut,
                }}
                className="absolute inset-0 h-full w-full bg-white border border-neutral-200 rounded-lg divide-y divide-neutral-200"
              >
                <div className="flex gap-2 p-4">
                  <div className="h-7 w-7 shrink-0 bg-linear-to-br shadow-card bg-white rounded-md flex items-center justify-center">
                    <MessageSquareText className="h-4 w-4 text-neutral-600" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[8px] font-bold text-neutral-600">
                      Motion Lab UI Components
                    </p>
                    <p className="text-[8px] mt-1 text-neutral-400">
                      Motion Lab UI Components
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 p-4">
                  <div className="h-7 w-7 shrink-0 bg-linear-to-br shadow-card bg-white rounded-md flex items-center justify-center">
                    <Icon24Hours className="h-4 w-4 text-neutral-600" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[8px] font-bold text-neutral-600">
                      24 hours turnaround
                    </p>
                    <p className="text-[8px] mt-1 text-neutral-400">
                      Super fast delivery at warp speed.
                    </p>
                  </div>
                </div>

                <div className="flex gap-2 p-4">
                  <div className="h-7 w-7 shrink-0 bg-linear-to-br shadow-card bg-white rounded-md flex items-center justify-center">
                    <Icon360View className="h-4 w-4 text-neutral-600" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[8px] font-bold text-neutral-600">
                      360 days all around
                    </p>
                    <p className="text-[8px] mt-1 text-neutral-400">
                      We're here to help you.
                    </p>
                  </div>
                </div>

                <div className="flex gap-2 p-4">
                  <div className="h-7 w-7 shrink-0 bg-linear-to-br shadow-card bg-white rounded-md flex items-center justify-center">
                    <Icon3dCubeSphere className="h-4 w-4 text-neutral-600" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[8px] font-bold text-neutral-600">
                      Some other components
                    </p>
                    <p className="text-[8px] mt-1 text-neutral-400">
                      Some other subtile.
                    </p>
                  </div>
                </div>

                <div className="flex gap-2 p-2 items-center justify-center">
                  <div className="h-7 w-7 shrink-0 bg-linear-to-br shadow-card bg-white rounded-lg flex items-center justify-center">
                    <IconPlus className="h-3 w-3 text-neutral-600" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[8px] text-neutral-400">
                      Create Project
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
            {/* Motion Divs end here */}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Card;
