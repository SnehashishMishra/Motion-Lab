import React from "react";
import Link from "next/link";

const OptionsComponent = () => {
  const classes =
    "rounded-full px-3 py-2 hover:bg-neutral-200/90 transition-color duration-300";
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gray-200 text-black">
      <div className="flex h-4 w-70 items-center justify-between rounded-full bg-gray-400 px-2 py-6">
        <div className={classes}>
          <Link href={"motion-layout/layout-cards"}>Layout Cards</Link>
        </div>
        <div className={classes}>
          <Link href={"motion-layout/layout-navbar"}>Layout Navbar</Link>
        </div>
      </div>
    </div>
  );
};

export default OptionsComponent;
