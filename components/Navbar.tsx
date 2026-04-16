"use client";

import Link from "next/link";
import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <div className="fixed inset-x-0 top-0 h-20 bg-white/10 text-white backdrop-blur-2xl p-4 px-20 flex items-center justify-between">
      <div className="group cursor-pointer">
        <Link href="/">
          <span className="text-white group-hover:text-cyan-500 transition-colors duration-300">
            Motion
          </span>{" "}
          <span className="text-cyan-500 group-hover:text-white transition-colors duration-300">
            Lab
          </span>
        </Link>
      </div>
      <div className="flex gap-4">
        <NavLink name="Home" href="/" />
        <NavLink name="About" href="/" />
        <NavLink name="Contact" href="/" />
      </div>
    </div>
  );
};

export default Navbar;
