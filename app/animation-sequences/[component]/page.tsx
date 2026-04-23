"use client";

import React from "react";
import { useParams } from "next/navigation";

import AnimatedSuccessButton from "@/components/animation-sequences/AnimatedSuccessButton";
import AnimatedText from "@/components/animation-sequences/AnimatedText";
import HomeButton from "@/components/HomeButton";

const page = () => {
  type Params = {
    component: string;
  };
  const params = useParams<Params>();

  let content;
  if (params.component == "animated-button") {
    content = <AnimatedSuccessButton />;
  } else if (params.component == "animated-text") {
    content = <AnimatedText />;
  }

  console.log(params.component);

  return (
    <div>
      <HomeButton classes="bg-neutral-800 text-white hover:bg-neutral-700 hover:text-neutral-200" />
      <div className="flex min-h-screen w-full items-center justify-center overflow-x-hidden bg-black text-white">
        {content}
      </div>
    </div>
  );
};

export default page;
