"use client";

import React from "react";

import HomeButton from "@/components/HomeButton";
import OptionsComponent from "@/components/motion-layout/options-component";

const page = () => {
  return (
    <div>
      <HomeButton classes="bg-neutral-800 text-white hover:bg-neutral-700 hover:text-neutral-200" />
      <OptionsComponent />
    </div>
  );
};

export default page;
