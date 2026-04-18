import {
  ChartBarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  HomeIcon,
  SettingsIcon,
  UserIcon,
} from "lucide-react";
import { delay } from "motion";
import { motion } from "motion/react";
import React, { useState } from "react";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const links = [
    {
      name: "Home",
      href: "/",
      icon: <HomeIcon />,
    },
    {
      name: "Analytics",
      href: "/analytics",
      icon: <ChartBarIcon />,
    },
    {
      name: "Users",
      href: "/users",
      icon: <UserIcon />,
    },
    {
      name: "Settings",
      href: "/settings",
      icon: <SettingsIcon />,
    },
  ];

  const sidebarVariants = {
    open: { width: "16rem" },
    closed: { width: "4.5rem" },
  };

  const parentVariants = {
    open: {
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.2,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const childVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: -10 },
  };

  return (
    <motion.div
      initial={false}
      animate={isOpen ? "open" : "closed"}
      exit={"closed"}
      transition={{ duration: 0.3 }}
      className="border-r border-neutral-100 h-full"
    >
      <motion.nav
        variants={sidebarVariants}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`bg-white shadow-md h-full`}
      >
        <div className="p-4 flex justify-between items-center">
          <h2 className={`text-xl font-semibold ${!isOpen && "sr-only"}`}>
            Dashboard
          </h2>
          {/* Toggle button */}
          <button
            onClick={toggleSidebar}
            className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 focus:outline-none"
            aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
          >
            {isOpen ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </button>
        </div>
        <div className="relative">
          {/* Sidebar content */}
          <nav className="p-4">
            <motion.ul variants={parentVariants} className="space-y-2">
              {links.map((link) => (
                <motion.li variants={childVariants} key={link.name}>
                  <a
                    href={link.href}
                    className="flex items-center gap-4 p-2 text-gray-700 rounded hover:bg-gray-200"
                    title={!isOpen ? link.name : ""}
                  >
                    {link.icon}
                    {isOpen && link.name}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </nav>
        </div>
      </motion.nav>
    </motion.div>
  );
};

export default SideBar;
