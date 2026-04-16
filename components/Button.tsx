"use client";

import { motion } from "motion/react";

const Button = () => {
  return (
    <div className="[perspective::1000px] [transform-style::preserve-3d] min-h-[calc(100vh-80px)] w-full bg-neutral-900 flex items-center justify-center bg-dot-pattern">
      <motion.button
        // when the user enters the page, the button will rotate from 0 to 20 degrees with a delay of 0.3 seconds
        initial={{ rotate: 0 }}
        // These are the keyframes for the animation, the button will rotate to 10 degrees, then back to 0, then to 123, and so on.
        animate={{ rotate: [0, 10, 0, 123, -123, 22, 31, -55, 1, 0] }}
        // the transition takes inputs for duration, delay, easing function, etc.
        transition={{ duration: 0.3, delay: 0, ease: "easeInOut" }}
        whileHover={{
          rotateX: 25,
          rotateY: 10,
          y: -5,
          boxShadow: "0px 20px 50px rgba(8, 112, 184, 0.7)", // the shadow will be more intense on hover 2nd shadow is for the inner shadow
        }}
        whileTap={{ y: 0 }}
        style={{ translateZ: "100px" }}
        className="group relative bg-black text-neutral-500 px-12 py-4 rounded-lg shadow-inset-soft shadow-[0px_1px_2px_0px_rgba(255,255,255,0.1)_inset,0px_-1px_2px_0px_rgba(255,255,255,0.1)_inset] cursor-pointer"
      >
        <span className="group-hover:text-cyan-500 transition-colors duration-300">
          Hover Me
        </span>
        {/* The span below makes the gradient effect */}
        <span className="absolute inset-x-0 bottom-px bg-linear-to-r from-transparent via-cyan-500 to-transparent h-px w-3/4 mx-auto"></span>
        {/* Same component with blur effect gives the shadow on hover */}
        <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 inset-x-0 bottom-px bg-linear-to-r from-transparent via-cyan-500 to-transparent w-full mx-auto blur-sm h-1"></span>
      </motion.button>
    </div>
  );
};

export default Button;
