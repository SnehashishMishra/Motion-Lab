"use client";

import React, { useEffect } from "react";
import { motion, stagger, useAnimate } from "motion/react";

const AnimatedText = () => {
  const text =
    "Welcome to the F*** C***. The first rule of the F*** C*** is that you don't talk about F*** C***. The second rule of the F*** C*** is that you don't talk about F*** C***";

  const [scope, animate] = useAnimate();

  useEffect(() => {
    startAnimating();
  }, []);
  const startAnimating = () => {
    animate(
      "span",
      {
        opacity: 1,
        filter: "0px",
        y: 0,
      },
      {
        duration: 0.3,
        ease: "easeInOut",
        delay: stagger(0.02),
      },
    );
  };
  return (
    <div
      ref={scope}
      className="mx-auto max-w-2xl bg-black font-bold text-white"
    >
      {text.split(" ").map((word, index) => (
        <motion.span
          style={{ opacity: 0, filter: "blur(10px)", y: 10 }}
          key={word + index}
          className="inline-block"
        >
          {word} &nbsp;{" "}
        </motion.span>
      ))}
    </div>
  );
};

export default AnimatedText;
