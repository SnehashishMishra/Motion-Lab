import Card from "@/components/Card";
import { cn } from "@/lib/utils";
import { GeistSans } from "geist/font/sans";
import React from "react";

const page = () => {
  return (
    <div
      className={cn(
        GeistSans.className,
        "min-h-[calc(100vh-60px)] bg-gray-50 text-foreground",
        "flex items-center justify-center",
      )}
    >
      <Card />
    </div>
  );
};

export default page;
