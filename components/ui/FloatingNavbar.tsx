"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

// ...existing imports

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      setVisible(true);
    }
  });

  // Add smooth scroll functionality
  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit fixed z-[5000] top-4 inset-x-0 mx-auto px-8 py-4 rounded-2xl shadow-xl items-center justify-center space-x-6",
          "bg-gradient-to-br from-black-200/90 to-black-100/90 backdrop-blur-md",
          "border border-white/[0.08] hover:border-white/[0.15] transition-all",
          "ring-1 ring-white/[0.05] shadow-black/40",
          className
        )}
      >
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            onClick={(e) => handleClick(e, navItem.link)}
            className={cn(
              "relative text-white/80 items-center flex space-x-1",
              "hover:text-white transition-colors duration-200",
              "px-4 py-2 rounded-lg hover:bg-white/[0.05]",
              "text-sm font-medium"
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span>{navItem.name}</span>
          </Link>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};