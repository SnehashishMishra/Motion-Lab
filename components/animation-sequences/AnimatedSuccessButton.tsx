"use client";

import React from "react";
import { AnimationSequence, motion, useAnimate } from "motion/react";

const AnimatedSuccessButton = () => {
  const [scope, animate] = useAnimate();

  const sequence: AnimationSequence = [
    [
      ".loader",
      {
        width: "2rem",
        opacity: [0, 1],
      },
      { duration: 0.1, at: "-1.2" },
    ],
    [
      ".loader",
      {
        rotate: 360 * 4,
      },
      { duration: 2 },
    ],
    [
      ".loader",
      {
        opacity: [1, 0],
        scale: 0,
      },
      { duration: 0.1, at: "0.5" },
    ],
    [".text", { display: "none" }, { duration: 0.1, at: "-0.5" }],
    ["button", { width: "5rem", borderRadius: "1000px" }, { duration: 0.3 }],
    ["button", { opacity: 1, scale: [1, 1.2, 0.8, 1] }, { duration: 0.8 }],
    [
      "button",
      {
        backgroundImage: "linear-gradient(to right, #00ff99, #00ccff)",
      },
      { duration: 0.3, at: "-0.4.9" },
    ],
    [
      ".check-icon",
      {
        opacity: [0, 1],
      },
      { duration: 0.1, at: "-0.3" },
    ],
    [
      ".check-icon path",
      {
        pathLength: 1,
      },
      { duration: 0.3 },
    ],
  ];

  // const startAnimating = async () => {
  //   animate(
  //     ".loader",
  //     {
  //       width: "2rem",
  //       opacity: 1,
  //     },
  //     { duration: 0.1 },
  //   );

  //   await animate(
  //     ".loader",
  //     {
  //       rotate: 360 * 4,
  //     },
  //     { duration: 2 },
  //   );
  //   await animate(
  //     ".loader",
  //     {
  //       opacity: 0,
  //       scale: 0,
  //     },
  //     { duration: 0.1 },
  //   );

  //   animate(".text", { display: "none" }, { duration: 0.1 });

  //   await animate(
  //     "button",
  //     { width: "5rem", borderRadius: "1000px" },
  //     { duration: 0.3 },
  //   );

  //   await animate(
  //     "button",
  //     { opacity: 1, scale: [1, 1.2, 0.8, 1] },
  //     { duration: 0.8 },
  //   );

  //   animate(
  //     "button",
  //     {
  //       backgroundImage: "linear-gradient(to right, #00ff99, #00ccff)",
  //     },
  //     { duration: 0.8 },
  //   );

  //   animate(
  //     ".check-icon",
  //     {
  //       opacity: 1,
  //     },
  //     { duration: 0.1 },
  //   );

  //   animate(
  //     ".check-icon path",
  //     {
  //       pathLength: 1,
  //     },
  //     { duration: 0.3 },
  //   );
  // };

  const startAnimating = () => {
    animate(sequence);
  };

  return (
    <div ref={scope} className="relative flex h-20 items-center justify-center">
      <motion.button
        onClick={startAnimating}
        style={{ width: "30rem" }}
        className="flex h-20 items-center justify-center rounded-lg bg-linear-to-r from-purple-500 via-violet-600 to-indigo-500 font-medium text-white"
      >
        <motion.svg
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="loader h-5 w-5 text-white"
          initial={{ width: "0rem" }}
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12 3a9 9 0 1 0 9 9" />
        </motion.svg>
        <span className="text">Purchase Now ($169)</span>
      </motion.button>

      <motion.svg
        fill="none"
        viewBox="0 0 24 24"
        stroke="#FFFFFF"
        strokeWidth={3}
        style={{ opacity: 0 }}
        className="check-icon pointer-events-none absolute inset-0 z-50 m-auto h-8 w-8"
      >
        <motion.path
          initial={{ pathLength: 0 }}
          transition={{ duration: 0.3, type: "tween", ease: "easeOut" }}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 13l4 4L19 7"
        />
      </motion.svg>
    </div>
  );
};

export default AnimatedSuccessButton;
