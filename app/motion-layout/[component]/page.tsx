"use client";

import React from "react";
import { useParams } from "next/navigation";

import HomeButton from "@/components/HomeButton";
import LayoutCards from "@/components/motion-layout/layout-cards";
import LayoutNavbar from "@/components/motion-layout/layout-navbar";

const page = () => {
  type Params = {
    component: string;
  };
  const params = useParams<Params>();

  let content;
  if (params.component == "layout-cards") {
    content = <LayoutCards />;
  } else if (params.component == "layout-navbar") {
    content = <LayoutNavbar />;
  }

  return (
    <div>
      <HomeButton classes="bg-neutral-800 text-white hover:bg-neutral-700 hover:text-neutral-200" />
      {content}
    </div>
  );
};

export default page;
