"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { IconRocket } from "@tabler/icons-react";
import {
  motion,
  useMotionTemplate,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";

import HomeButton from "../HomeButton";

const MotionHooksExample = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgrounds = ["#343434", "#00193b", "#002729"];
  const [background, setBackground] = useState(backgrounds[0]);
  // This useMotionValueEvent prints the scrolled progress value
  // useMotionValueEvent(scrollYProgress, "change", (latest) => {
  //   console.log("Scroll Progress:", latest);
  // });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // We multiply the scroll progress (which is a value between 0 and 1) by the number of backgrounds to get a value that ranges from 0 to the length of the backgrounds array. We then use Math.floor to round it down to the nearest whole number, which gives us an index to select the appropriate background color based on how far we've scrolled.
    // Eg. like here, if we have 3 backgrounds and the scroll progress is 0.5, then latest * backgrounds.length would be 0.5 * 3 = 1.5, and Math.floor(1.5) would give us 1, which means we would use the second background color in the array (since array indices start at 0).
    const finalValue = Math.floor(latest * backgrounds.length);
    setBackground(backgrounds[finalValue]);
  });

  return (
    <>
      <HomeButton />
      {/* ------------------------------------------ Main Parallax ------------------------------------------------------ */}

      <motion.div
        ref={containerRef}
        animate={{ background }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="flex min-h-screen items-center justify-center bg-neutral-900"
      >
        <div className="mx-auto flex max-w-4xl flex-col gap-10 py-40">
          {features.map((feature) => (
            <Card key={feature.title} feature={feature} />
          ))}
        </div>
      </motion.div>
    </>
  );
};

// -------------------------------------------------- Card Section ---------------------------------------------------------

type Feature = {
  icon: React.ReactNode;
  title: string;
  description: string;
  content: React.ReactNode;
};

const Card = ({ feature }: { feature: Feature }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    // If target is not provided, it defaults to the viewport, so we specify our card as the target to get its scroll progress
    target: ref,
    // "start end" means the animation starts when the top (start) of the element hits the bottom (end) of the viewport, and ends when the bottom (end) of the element hits the top (start) of the viewport
    // So, ["start end", "end start"] is like ["top of element hits bottom of viewport", "bottom of element hits top of viewport"]
    offset: ["start end", "end start"],
  });
  // We use useTransform to map the scroll progress (which goes from 0 to 1 as we scroll through the card) to a translateY value that moves the content up as we scroll. When scrollYProgress is 0, translateY will be 200px (content starts below), and when scrollYProgress is 1, translateY will be -300px (content moves up). We then wrap this in useSpring to add a spring animation to the movement, making it smoother and more natural.
  const translateContent = useSpring(
    useTransform(scrollYProgress, [0, 1], [200, -300]),
    {
      stiffness: 100, // Higher stiffness means the animation will be more responsive and less bouncy
      damping: 30, // Higher damping means the animation will settle faster and be less bouncy
      mass: 1, // Mass affects the inertia of the animation; higher mass means it will take more time to accelerate and decelerate
    },
  );
  // We also map the scroll progress to an opacity value that fades the content in and out as we scroll. The content is fully transparent (opacity 0) at the start (0) and end (1) of the scroll, and fully opaque (opacity 1) in the middle (0.5) of the scroll.
  const opacityContent = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  // To create a blur effect on the left side of the card, we map the scroll progress to a blur value that increases as we scroll. When scrollYProgress is 0.6, blur will be 0px (no blur), and when scrollYProgress is 1, blur will be 10px (maximum blur). We then use useMotionTemplate to create a CSS filter string that applies this dynamic blur to the content.
  const blur = useTransform(scrollYProgress, [0.6, 1], [0, 10]);
  // We also add a scale effect to the entire card that scales it down to 0.8 when the scroll progress is 1, creating a subtle zoom-out effect as we scroll past the card.
  const scale = useTransform(scrollYProgress, [0.5, 1], [1, 0.8]);

  return (
    <div ref={ref} className="grid grid-cols-2 items-center gap-20 py-40">
      <motion.div
        // We use useMotionTemplate to create a CSS blur filter that updates based on the scroll progress. The blur value is dynamically inserted into the string, allowing us to smoothly transition the blur effect as we scroll.
        style={{ filter: useMotionTemplate`blur(${blur}px)`, scale }}
        className="flex flex-col gap-5"
      >
        {feature.icon}
        <h2 className="text-4xl text-white">{feature.title}</h2>
        <p className="text-lg text-neutral-400">{feature.description}</p>
      </motion.div>
      <motion.div
        style={{
          y: translateContent,
          opacity: opacityContent,
        }}
        className="overflow-hidden rounded-md"
      >
        {feature.content}
      </motion.div>
    </div>
  );
};

const features: Feature[] = [
  {
    icon: <IconRocket className="h-8 w-8 text-neutral-200" />,
    title: "Generate ultra-realistic images in seconds",
    description:
      "With out state of the art AI, you can create stunning visuals for your projects in no time.",
    content: (
      <div>
        <Image
          src="/images/3d_shapes_bg.png"
          alt="3D Model Generation"
          width={500}
          height={500}
        />
      </div>
    ),
  },
  {
    icon: <IconRocket className="h-8 w-8 text-neutral-200" />,
    title: "AI Model Generation",
    description:
      "Our AI can generate complex 3D models from simple descriptions.",
    content: (
      <div>
        <Image
          src="/images/ai_network_bg.png"
          alt="Ai Network"
          width={500}
          height={500}
        />
      </div>
    ),
  },
  {
    icon: <IconRocket className="h-8 w-8 text-neutral-200" />,
    title: "Batch generate images with a single click",
    description:
      "With out state of the art AI, you can generate a batch of images in 10 seconds with absolutely no compute power",
    content: (
      <div>
        <Image
          src="/images/glassmorphism_bg.png"
          alt="3D Model Generation"
          width={500}
          height={500}
        />
      </div>
    ),
  },
];

export default MotionHooksExample;
