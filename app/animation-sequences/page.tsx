"use client";

import React from "react";

import AnimatedOptionsComponent from "@/components/animation-sequences/AnimatedOptionsComponent";
import HomeButton from "@/components/HomeButton";

const page = () => {
  return (
    <div>
      <HomeButton classes="bg-neutral-800 text-white hover:bg-neutral-700 hover:text-neutral-200" />
      <AnimatedOptionsComponent />
    </div>
  );
};

export default page;
